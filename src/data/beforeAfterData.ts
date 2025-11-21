import { FIREBASE_IMAGES } from '@/constants/firebaseImages';

export interface BeforeAfterImage {
  id: number;
  beforeImage: string;
  afterImage: string;
  alt: string;
}

export const beforeAfterData = {
  mainTitle: {
    text: '컨설팅 이후,',
    highlight: '이렇게 달라졌습니다',
    subText: 'Before & After'
  },
  description: [
    `"정책자금은 어렵다?"\n→ 알고 보면 성장의 지름길입니다.`,
    `"내 자본으로만 버틴다?"\n→ 그 사이 기회는 멀어집니다.`,
    `"서류가 복잡하다?"\n→ 그래서 저희가 있습니다.`,
  ],
  images: [
    {
      id: 1,
      beforeImage: FIREBASE_IMAGES.images.before01,
      afterImage: FIREBASE_IMAGES.images.after01,
      alt: '기업 변화 사례 1'
    },
    {
      id: 2,
      beforeImage: FIREBASE_IMAGES.images.before02,
      afterImage: FIREBASE_IMAGES.images.after02,
      alt: '기업 변화 사례 2'
    },
    {
      id: 3,
      beforeImage: FIREBASE_IMAGES.images.before03,
      afterImage: FIREBASE_IMAGES.images.after03,
      alt: '기업 변화 사례 3'
    }
  ] as BeforeAfterImage[]
};
