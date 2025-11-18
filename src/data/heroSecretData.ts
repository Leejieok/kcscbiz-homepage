export interface SecretItem {
  number: number;
  title: string;
  description: string;
}


export interface HeroSecretData {
  title: {
    highlight: string;
    normal: string;
  };
  secrets: SecretItem[];
}

export const heroSecretData: HeroSecretData = {
  title: {
    highlight: '한국중소기업지원센터의',
    normal: '성과를 만드는 \n우리의 철학을 말씀드립니다.'
  },
  secrets: [
    {
      number: 1,
      title: '건수를 위한 계약이 아닌, \n 정책자금 승인에 집중합니다',
      description: '빠른 상담이 필요하시면, 대표번호를 통한 추가적인 문의가 필요 합니다.'
    },
    {
      number: 2,
      title: '시간과 비용을 아껴주는 \n꼼꼼한 서류 안내',
      description: '사업계획서부터 필수 서류까지, 복잡함을 줄여 기회비용을 지켜드립니다.'
    },
    {
      number: 3,
      title: '성공을 높이는\n 다각도의 전략 제시',
      description: '예상치 못한 변수까지 대비한 맞춤형 전략과 상담으로 든든하게 함께합니다.'
    }
  ]
};
