/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// 제거된 함수(submitConsultation)와 관련된 import:
// import {setGlobalOptions} from "firebase-functions";
// import {onRequest} from "firebase-functions/https";
// import cors from "cors";

import {onDocumentCreated} from "firebase-functions/v2/firestore";
import {defineSecret} from "firebase-functions/params";
import * as logger from "firebase-functions/logger";
import * as admin from "firebase-admin";
import {google} from "googleapis";

// Initialize Firebase Admin
try {
  admin.app();
} catch {
  admin.initializeApp();
}

// Define secrets
const GOOGLE_CREDENTIALS = defineSecret("GOOGLE_CREDENTIALS");
const SHEET_ID = defineSecret("SHEET_ID");
const SHEET_NAME = defineSecret("SHEET_NAME");

// Google Sheets client helper
async function getSheetsClient() {
  const credentialsJson = GOOGLE_CREDENTIALS.value();
  const credentials = JSON.parse(credentialsJson);

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({version: "v4", auth});
}

// v1 HTTP 함수 관련 setGlobalOptions 제거

// ConsultationFormData 인터페이스는 onFormCreated에서 타입으로 사용되지 않으므로 제거

// 제거된 함수: export const submitConsultation = onRequest(...)

// Firestore 트리거: consultations 컬렉션에 문서 생성 시 Google Sheets에 추가
export const onFormCreated = onDocumentCreated(
  {
    document: "consultations/{docId}",
    region: "asia-northeast3",
    database: "(default)",
    secrets: [GOOGLE_CREDENTIALS, SHEET_ID, SHEET_NAME],
  },
  async (event) => {
    const data = event.data?.data() ?? {};
    const docId = event.params.docId;

    const sheetId = SHEET_ID.value().trim();
    const sheetName = SHEET_NAME.value().trim();

    logger.info("[onFormCreated] triggered", {docId, sheetId, sheetName});

    // ⚠️ Firestore 문서의 필드 이름이 Google Sheets에 저장될 순서에 맞게 row 배열 구성
    const row = [
      new Date().toLocaleString("ko-KR", {
        timeZone: "Asia/Seoul",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }), // 타임스탬프
      docId,
      data["companyName"] ?? "",
      data["phone"] ?? "",
      data["industry"] ?? "",
      data["location"] ?? "",
      // services와 referralSource가 배열일 경우 문자열로 변환
      Array.isArray(data["services"]) ?
        data["services"].join(", ") : "",
      Array.isArray(data["referralSource"]) ?
        data["referralSource"].join(", ") : "",
      data["requests"] ?? "",
      data["status"] ?? "pending", // submitConsultation에서 추가했던 status 필드
    ];

    try {
      const sheets = await getSheetsClient();
      await sheets.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range: `${sheetName}!A1`,
        valueInputOption: "USER_ENTERED",
        requestBody: {values: [row]},
      });

      logger.info("[onFormCreated] appended to sheet DONE");
    } catch (error) {
      logger.error("[onFormCreated] Error appending to sheet", error);
      throw error;
    }
  }
);