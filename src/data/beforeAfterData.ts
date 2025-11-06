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
    '"정책자금은 그냥 힘들 때 버티라고 받는거야..."',
    '"나는 돈 안 빌리고 내 돈으로 사업할래..."',
    '정책자금 활용을 똑바로 못해서 그렇습니다.',
    '다른 대표님들의 레전드 변화 과정을 확인해보세요.'
  ],
  images: [
    {
      id: 1,
      beforeImage: 'https://cdn.imweb.me/upload/S20231213aa2eeb2497234/0da97bb0760d3.png',
      afterImage: 'https://cdn.imweb.me/upload/S20231213aa2eeb2497234/91b74a7888e49.png',
      alt: '기업 변화 사례 1'
    },
    {
      id: 2,
      beforeImage: 'https://cdn.imweb.me/upload/S20231213aa2eeb2497234/cc62da58bdd25.png',
      afterImage: 'https://cdn.imweb.me/upload/S20231213aa2eeb2497234/051d9f42347f0.png',
      alt: '기업 변화 사례 2'
    },
    {
      id: 3,
      beforeImage: 'https://cdn.imweb.me/upload/S20231213aa2eeb2497234/d41d5b7644cef.png',
      afterImage: 'https://cdn.imweb.me/upload/S20231213aa2eeb2497234/ada3e3044c8c0.png',
      alt: '기업 변화 사례 3'
    }
  ] as BeforeAfterImage[]
};
