// consultingContent.ts

export interface ContentSection {
  necessity: string;
  title: string;
  titleHighlight: string;
  points: string[];
}

export const consultingData = {
  mainHeading: {
    highlight: "돈을 쓰면서까지",
    text: "컨설팅이 맞는 선택인지 걱정되나요?"
  },
  
  subHeading: "정책자금이 먼 이야기처럼 느껴지셨다면 잠시만 멈춰서 이유부터 함께 살펴보세요.",
  
  sections: [
    {
      necessity: "필요성 1",
      title: "정책자금, 단 한 번의 부결이 ",
      titleHighlight: "6개월의 멈춤이 됩니다.",
      points: [
        "동일 상품은 부결 후 6개월간 재신청 불가. 한 번의 실수가 반년을 묶습니다.",
        "전문가의 정밀 분석으로 심사 요건을 정확히 파악, 부결 확률을 ‘제로’에 가깝게.",
        "신청부터 승인까지, 복잡한 과정을 전략적으로 간소화. ‘한 번에 통과’가 현실이 됩니다."
      ]
    },
    {
      necessity: "필요성 2",
      title: "정책자금,",
      titleHighlight: "모르고 하면 리스크. 알고 하면 기회입니다.",
      points: [
        "심사 담당자의 질문 의도를 분석한 맞춤형 Q&A PPT 제공.",
        "실제 상담 상황을 시뮬레이션해 답변과 전략을 미리 훈련.",
        "심사관에게 ‘준비된 기업’이라는 인상을 각인시키는 멘트 교육."
      ]
    },
    {
      necessity: "필요성 3",
      title: "신청은 누구나 합니다. ",
      titleHighlight: "승인은, 준비한 사람이 받습니다.",
      points: [
        "3,000건 이상 성공 컨설팅으로 입증된 신뢰와 데이터 기반 전략.",
        "업종·규모·상황별 맞춤형 자금 솔루션 제공.",
        "당신의 사업 상황에 ‘가장 현실적인’ 정책자금 전략을 설계합니다."
      ]
    }
  ] as ContentSection[]
};

export type ConsultingData = typeof consultingData;