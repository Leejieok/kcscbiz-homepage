import { FIREBASE_IMAGES } from '@/constants/firebaseImages';

export interface PromiseItem {
  number: string;
  title: string;
  titleHighlight: string[];
  description: string;
  descriptionHighlight?: string;
  backgroundImage: string;
}

export interface PromiseData {
  title: {
    normal: string;
    highlight: string;
  };
  promises: PromiseItem[];
}

export const promiseData: PromiseData = {
  title: {
    normal: '무슨 일이 있어도',
    highlight: '다음 3가지 약속은 무조건 지키겠습니다.'
  },
  promises: [
    {
      number: '약속 1',
      title: '대표님의 시간을 ',
      titleHighlight: ['가장 귀한 자원으로 생각합니다.'],
      description: '수천 건의 경험을 토대로, \n',
      descriptionHighlight: '가장 빠른 성공을 위한 맞춤 전략을 정성스럽게 준비하겠습니다.',
      backgroundImage: FIREBASE_IMAGES.images.hero3
    },
    {
      number: '약속 2',
      title: '소통의 진심은 ',
      titleHighlight: ['누구보다 강합니다.'],
      description: '20명 이상의 전문 컨설턴트가 함께하며, \n',
      descriptionHighlight: '빠른 회신과 정확한 소통으로 언제든 든든하게 연결되어 있습니다.',
      backgroundImage: FIREBASE_IMAGES.images.hero2
    },
    {
      number: '약속 3',
      title: '안되는 일은 ',
      titleHighlight: ['솔직하게 안된다고 말씀드립니다.'],
      description: '수익을 위해 무리하게 계약하지 않습니다.\n 한국중소기업지원센터는 ',
      descriptionHighlight: '대표님의 시간과 신뢰를 지키는 것이 우리의 원칙입니다.',
      backgroundImage: FIREBASE_IMAGES.images.hero
    }
  ]
};
