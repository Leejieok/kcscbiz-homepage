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
      title: '안되는 상황에 희망고문 ',
      titleHighlight: ['안되는 상황에 희망고문'],
      description: '많은 컨설팅 회사들은 연체, 체납이 있더라도 당장의 수익을 위해, 계약을 체결하곤 합니다. 한국중소기업지원센터는 대표님들의 시간과 신뢰를 중요시 여기며, ',
      descriptionHighlight: '안되는 건 절대 안된다고 말씀드리겠습니다.',
      backgroundImage: 'https://cdn.imweb.me/thumbnail/20250307/5ffbb256aa732.png'
    },
    {
      number: '약속 2',
      title: '소통 실력은 ',
      titleHighlight: ['한국중소기업지원센터가 최고입니다.'],
      description: '한국중소기업지원센터는 전문 컨설턴트를 20명 이상 고용하고 있습니다. ',
      descriptionHighlight: '정책자금 컨설팅에서 가장 중요한 것은 소통입니다. 전문가 20:1 소통을 통해 빠른 피드백을 약속합니다.',
      backgroundImage: 'https://cdn.imweb.me/thumbnail/20250307/9ff1060f296bf.png'
    },
    {
      number: '약속 3',
      title: '대표님들의 시간을 ',
      titleHighlight: ['금처럼 여기겠습니다.'],
      description: '',
      descriptionHighlight: '한중지는 3,000건 이상 성공 사례를 보유하고 있습니다. 모든 기업들이 원하는 결과를 빨리 실현할 수 있도록 맞춤 컨설팅 플랜으로 최고의 결과를 선물하겠습니다.',
      backgroundImage: 'https://cdn.imweb.me/thumbnail/20250307/f0d1833d57765.png'
    }
  ]
};
