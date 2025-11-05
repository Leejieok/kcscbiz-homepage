export interface TestimonialData {
  id: number;
  image: string;
  description: string;
  result: string;
}

export const testimonialsData: TestimonialData[] = [
  {
    id: 1,
    image: 'https://cdn.imweb.me/thumbnail/20250615/76dcd5aff56ad.png',
    description: '기대출 1억+부채비율 680%',
    result: '25일만에 4천만원 승인!'
  },
  {
    id: 2,
    image: 'https://cdn.imweb.me/thumbnail/20250615/b9c67df6daa5f.png',
    description: '심사 담당자 판단 실수로 대출 제한',
    result: '명확한 컨설팅으로 직접대출 5천만원 승인!'
  },
  {
    id: 3,
    image: 'https://cdn.imweb.me/thumbnail/20250615/632b30869ddd4.png',
    description: '사업계획서 만족도 100% 증명',
    result: '최종 1억 5천만원 승인!'
  },
  {
    id: 4,
    image: 'https://cdn.imweb.me/thumbnail/20250615/4565c2a1f324c.png',
    description: '가압류로 인한 대출 제한 사항',
    result: '한비즈 가이드로 실사 확정!'
  },
  {
    id: 5,
    image: 'https://cdn.imweb.me/thumbnail/20250616/8f9a3d425d4ce.png',
    description: '2번 이상 부결당한 기업',
    result: '계약 20일만에 4천만원 승인!'
  },
  {
    id: 6,
    image: 'https://cdn.imweb.me/thumbnail/20250615/16b6a9d0ea12d.png',
    description: '신용점수 500점대 소상공인',
    result: '3천만원 다이렉트 승인!'
  },
  {
    id: 7,
    image: 'https://cdn.imweb.me/thumbnail/20250615/3abea707a5488.png',
    description: '계약 1달만에 정책자금',
    result: '9천+3천만원 2번 연속 승인!'
  }
];
