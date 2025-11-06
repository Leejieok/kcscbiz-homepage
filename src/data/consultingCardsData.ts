export interface ConsultingCard {
  title: string;
  description: string;
  backgroundImage: string;
  icon: string;
  link: string;
}

export interface ConsultingCardsData {
  mainTitle: {
    highlight: string;
    normal: string;
  };
  subTexts: {
    text: string;
    highlight?: boolean;
  }[];
  buttonText: string;
  buttonLink: string;
  cards: ConsultingCard[];
}

export const consultingCardsData: ConsultingCardsData = {
  mainTitle: {
    highlight: '어떤 고민',
    normal: '여기까지 보고 계신걸까요?'
  },
  subTexts: [
    {
      text: '대표님의 고민, 맞춤 컨설팅으로 해결해드리겠습니다.'
    },
    {
      text: '제발 더 이상 혼자 고민하지마세요.'
    },
    {
      text: '10초만 투자해서 지금 바로 무료 상담 신청하세요',
      highlight: true
    }
  ],
  buttonText: '무료 상담 신청',
  buttonLink: '/contact',
  cards: [
    {
      title: '정책자금 컨설팅',
      description: '정책자금\n지원이 필요할 때!',
      backgroundImage: 'https://cdn.imweb.me/thumbnail/20250119/52db5f8a22b60.jpg',
      icon: '/src/assets/images/con01.png',
      link: '/consulting1'
    },
    {
      title: '세금 환급 컨설팅',
      description: '세금을 줄이고\n환급받고 싶을 때',
      backgroundImage: 'https://cdn.imweb.me/thumbnail/20250119/a87de0d460aa9.jpg',
      icon: '/src/assets/images/con02.png',
      link: '/consulting2'
    },
    {
      title: '법인사업자 컨설팅',
      description: '법인 설립과 운영에 대한\n상담이 필요할 때',
      backgroundImage: 'https://cdn.imweb.me/thumbnail/20250119/3796f154eca16.jpg',
      icon: '/src/assets/images/con03.png',
      link: '/consulting3'
    },
    {
      title: '기업인증 컨설팅',
      description: '인증을 빠르고 정확하게\n받고 싶을 때',
      backgroundImage: 'https://cdn.imweb.me/thumbnail/20250119/3c86bc355e5ff.jpg',
      icon: '/src/assets/images/con04.png',
      link: '/consulting4'
    }
  ]
};
