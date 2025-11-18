import { FIREBASE_IMAGES } from '@/constants/firebaseImages';

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
    highlight: '여기까지 온 이유,',
    normal: '이미 마음이 답을 알고 있습니다. \n 지금, 대표님의 고민을 가볍게 만들 차례입니다.'
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
      icon: FIREBASE_IMAGES.assets.con01,
      link: '/consulting1'
    },
    {
      title: '세금 환급 컨설팅',
      description: '세금을 줄이고\n환급받고 싶을 때',
      backgroundImage: 'https://cdn.imweb.me/thumbnail/20250119/a87de0d460aa9.jpg',
      icon: FIREBASE_IMAGES.assets.con02,
      link: '/consulting2'
    },
    {
      title: '법인사업자 컨설팅',
      description: '법인 설립과 운영에 대한\n상담이 필요할 때',
      backgroundImage: 'https://cdn.imweb.me/thumbnail/20250119/3796f154eca16.jpg',
      icon: FIREBASE_IMAGES.assets.con03,
      link: '/consulting3'
    },
    {
      title: '기업인증 컨설팅',
      description: '인증을 빠르고 정확하게\n받고 싶을 때',
      backgroundImage: 'https://cdn.imweb.me/thumbnail/20250119/3c86bc355e5ff.jpg',
      icon: FIREBASE_IMAGES.assets.con04,
      link: '/consulting4'
    }
  ]
};
