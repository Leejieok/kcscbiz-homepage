export interface WarningCard {
  title: string;
  titleHighlight: string[];
  description: string;
  backgroundImage: string;
}

export interface WarningCardsData {
  title: {
    normal: string;
    highlight: string;
  };
  cards: WarningCard[];
}

export const warningCardsData: WarningCardsData = {
  title: {
    normal: '정책자금 컨설팅, 이런 회사는',
    highlight: '무조건 걸러야 합니다!'
  },
  cards: [
    {
      title: '무조건 승인을 장담하는 회사',
      titleHighlight: ['무조건 승인을 장담하는 회사'],
      description: '컨설팅은 승인 가능성을 높혀주지, 100% 승인은 불가능합니다. 현실적인 조언을 하는 회사인지 반드시 확인하세요.',
      backgroundImage: 'https://cdn.imweb.me/thumbnail/20250307/90318035e57dd.png'
    },
    {
      title: '기업 상황에 맞는 솔루션을 제공하지 않는 회사',
      titleHighlight: ['기업 상황에 맞는 솔루션을 제공하지 않는 회사'],
      description: '모든 기업은 상황이 다릅니다. 일률적인 가이드는 부결 가능성을 높입니다. 맞춤 전략을 제공하는 회사를 선택하세요.',
      backgroundImage: 'https://cdn.imweb.me/thumbnail/20250307/92a812fb89e7e.png'
    },
    {
      title: '성공 사례와 후기가 없는 회사',
      titleHighlight: ['성공 사례와 후기가 없는 회사'],
      description: '성공 사례와 후기가 없으면 경험이 부족할 가능성이 99% 입니다. 반드시 꼼꼼히 확인하고 신뢰할 수 있는 회사를 선택하세요.',
      backgroundImage: 'https://cdn.imweb.me/thumbnail/20250307/843bb4a2d2414.png'
    }
  ]
};
