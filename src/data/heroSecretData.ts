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
    normal: '재계약률 90% 비법 공개합니다.'
  },
  secrets: [
    {
      number: 1,
      title: '건수를 높히는 계약이 아닌, \n 본질에 집중',
      description: '빠른 상담이 필요하시면, 대표번호를 통한 추가적인 문의가 필요 합니다.'
    },
    {
      number: 2,
      title: '시간과 비용 절약을 위한 \n철저한 서류 가이드',
      description: '사업계획서 작성부터 필수 서류 준비까지, 복잡한 절차를 간소화하여 기회 비용을 절감 합니다.'
    },
    {
      number: 3,
      title: '성공을 위한\n 다각적 대안과 전략 제시',
      description: '불시 돌발 상황에도 대비할 수 있도록, 맞춤형 대안과 상담 플랜으로 성공 전략을 안내합니다.'
    }
  ]
};
