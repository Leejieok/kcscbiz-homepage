export interface SolutionData {
  title: string;
  items: string[];
  backgroundImage: string;
}

export const solutionData: SolutionData[] = [
  {
    title: '원클릭 데이터 수집',
    items: [
      '최근 5년간 소득 자료를 부드럽게 한 번에 정리해드려요',
      '필요한 데이터도 5분 안에 간편하게 모아드려요',
      '놓치기 쉬운 세금·절세 내역까지 자연스럽게 챙겨드립니다'
    ],
    backgroundImage: 'https://cdn.imweb.me/thumbnail/20250308/f47bacefc0930.png'
  },
  {
    title: '정책자금 신청 및 관리',
    items: [
      'AI가 환급 가능 금액을 꼼꼼하게 계산해드려요',
      '직원 고용 혜택과 사회보험 공제도 편하게 확인하실 수 있어요',
      '흘러가기 쉬운 환급 조건도 자동으로 챙겨드립니다'
    ],
    backgroundImage: 'https://cdn.imweb.me/thumbnail/20250308/8686f1dd3b90a.png'
  },
  {
    title: '사후관리',
    items: [
      '고객님의 정보를 안전하게 보호하고 관리해드려요',
      '원클릭 계산 결과를 바로 확인하실 수 있어요',
      '향후 환수 가능성까지 고려해 안정적으로 안내드립니다'
    ],
    backgroundImage: 'https://cdn.imweb.me/thumbnail/20250308/f17f0170fc91e.png'
  }
];
