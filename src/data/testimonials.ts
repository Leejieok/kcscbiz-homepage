import { FIREBASE_IMAGES } from '@/constants/firebaseImages';

export interface TestimonialData {
  id: number;
  image: string;
  description: string;
  result: string;
}

export const testimonialsData: TestimonialData[] = [
  {
    id: 1,
    image: FIREBASE_IMAGES.images.review01,
    description: '기대출 1억+부채비율 680%',
    result: '25일만에 4천만원 승인!'
  },
  {
    id: 2,
    image: FIREBASE_IMAGES.images.review02,
    description: '심사 담당자 판단 실수로 대출 제한',
    result: '명확한 컨설팅으로 5천만원 승인!'
  },
  {
    id: 3,
    image: FIREBASE_IMAGES.images.review03,
    description: '사업계획서 만족도 100% 증명',
    result: '최종 1억 5천만원 승인!'
  },
  {
    id: 4,
    image: FIREBASE_IMAGES.images.review04,
    description: '가압류로 인한 대출 제한 사항',
    result: '가이드로 실사 확정!'
  },
  {
    id: 5,
    image: FIREBASE_IMAGES.images.review05,
    description: '2번 이상 부결당한 기업',
    result: '계약 20일만에 4천만원 승인!'
  },
  {
    id: 6,
    image: FIREBASE_IMAGES.images.review06,
    description: '신용점수 500점대 소상공인',
    result: '3천만원 다이렉트 승인!'
  },
  {
    id: 7,
    image: FIREBASE_IMAGES.images.review07,
    description: '계약 1달만에 정책자금',
    result: '9천+3천만원 2번 연속 승인!'
  }
];
