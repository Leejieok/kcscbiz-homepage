export interface SolutionData {
  title: string;
  items: string[];
  backgroundImage: string;
}

export const solutionData: SolutionData[] = [
  {
    title: '원클릭 데이터 수집',
    items: [
      '5년간 소득 자료를 원클릭 정리',
      '5분 이내에 필요한 DATA 원클릭 정리',
      '누락 세금 및 놓친 절세 내역 정리'
    ],
    backgroundImage: 'https://cdn.imweb.me/thumbnail/20250308/f47bacefc0930.png'
  },
  {
    title: '정책자금 신청 및 관리',
    items: [
      '세금 환급 AI가 환급 가능한 세액 정밀 산출',
      '직원 고용 혜택 및 사회보험 공제까지 계산',
      '놓치기 쉬운 환급 요건까지 자동 반영'
    ],
    backgroundImage: 'https://cdn.imweb.me/thumbnail/20250308/8686f1dd3b90a.png'
  },
  {
    title: '사후관리',
    items: [
      '고객 정보 보안 100% 유지',
      '원클릭 계산 결과 제공',
      '환수를 감안한 사후 관리'
    ],
    backgroundImage: 'https://cdn.imweb.me/thumbnail/20250308/f17f0170fc91e.png'
  }
];
