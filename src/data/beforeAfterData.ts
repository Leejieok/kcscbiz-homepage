import { FIREBASE_IMAGES } from '@/constants/firebaseImages';

export interface BeforeAfterImage {
  id: number;
  beforeImage: string;
  afterImage: string;
  alt: string;
}

export const beforeAfterData = {
  mainTitle: {
    text: '한국중소기업지원센터를 만난 기업들의',
    highlight: 'Before&After',
    subText: '이렇게 달라졌습니다.'
  },
  description: [
    `"정책자금은 그냥 힘들 때 받는 돈 아니야?"\n→ 아니요, 똑똑한 대표님은 그걸 '성장 자금'이라 부릅니다.`,
    `"나는 빚지기 싫어서 내 돈으로 버틸래."\n→ 버티는 게 아니라, 늦추고 있는 겁니다.`,
    `"지원금이 너무 복잡해서 포기했어요."\n→ 그 '복잡함'을 푸는 게, 저희의 일입니다.`,
    '다른 대표님들의 레전드 변화 과정을 확인해보세요.'
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
