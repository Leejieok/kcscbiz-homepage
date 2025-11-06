// consultingContent.ts

export interface ContentSection {
  necessity: string;
  title: string;
  titleHighlight: string;
  points: string[];
}

export const consultingData = {
  mainHeading: {
    highlight: "꼭 비용까지 지불하면서",
    text: "컨설팅을 받아야 할까 고민인가요?"
  },
  
  subHeading: "아직 정책자금 컨설팅의 필요성을 못 느끼셨다면 그냥 넘어가지 마세요.",
  
  sections: [
    {
      necessity: "필요성 1",
      title: "정책자금, ",
      titleHighlight: "부결 시 6개월 간 재신청 불가",
      points: [
        "정책자금 심사 부결시 동일 상품 6개월간 재신청 불가(신청안내자료 참고).",
        "전문가의 기업 맞춤 솔루션으로 심사 요건을 정밀 분석하여 부결 가능성 최소화.",
        "신청부터 승인까지,복잡한 과정을 간소화하고 한 번에 성공적으로 처리."
      ]
    },
    {
      necessity: "필요성 2",
      title: "심사 상담, 대처 전략 및 상황 ",
      titleHighlight: "맞춤형 PPT 제공",
      points: [
        "정책자금 심사 담당자의 질문 의도 파악과 효과적인 답변을 사전 PPT 자료 제공",
        "실제 상담 상황을 기반으로 한 맞춤형 시뮬레이션을 통한 사전 완벽 준비",
        "심사 담당자에게 신뢰를 주는 멘트에 대한 교육을 통해 승인 확률 극대화"
      ]
    },
    {
      necessity: "필요성 3",
      title: "전문가와 함께라면 ",
      titleHighlight: "성공률 97% 이상!",
      points: [
        "3,000건 이상의 성공 컨설팅 사례로 검증된 신뢰와 전문성 제공",
        "업종별 맞춤형 솔루션과 최신 정책자금 정보 제공",
        "사업규모와 대표님의 상황에 맞춘 최적의 전략으로 승인 도달"
      ]
    }
  ] as ContentSection[]
};

export type ConsultingData = typeof consultingData;