import icon1 from '@/assets/svgs/service-icon-1.svg';
import icon2 from '@/assets/svgs/service-icon-2.svg';
import icon3 from '@/assets/svgs/service-icon-3.svg';
import icon4 from '@/assets/svgs/service-icon-4.svg';

export interface ServiceData {
  id: number;
  icon: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  delay: string;
}

export const servicesData: ServiceData[] = [
  {
    id: 1,
    icon: icon1,
    title: '정책자금',
    description: '정책자금은 국가나 지자체가 기업의 성장과 안정을 돕기 위해 장기·저금리로 빌려주는 지원금입니다.',
    linkText: '정책자금이 뭔가요?',
    linkUrl: '/service-details-1',
    delay: '0.30'
  },
  {
    id: 2,
    icon: icon2,
    title: '정부지원금',
    description: '정부지원금은 정부가 특정 목적을 위해 개인이나 기업에 무상으로 지급하는 금전 지원입니다.',
    linkText: '정부지원금이 뭔가요?',
    linkUrl: '/service-details-2',
    delay: '0.40'
  },
  {
    id: 3,
    icon: icon3,
    title: '기업인증',
    description: '기업인증은 정부나 공인기관이 기업의 역량·제품·서비스가 일정 기준을 충족했음을 공식적으로 인정하는 절차입니다.',
    linkText: '기업인증이 뭔가요?',
    linkUrl: '/service-details-2',
    delay: '0.40'
  },
  {
    id: 4,
    icon: icon4,
    title: '놓치기 아까운 다른 혜택',
    description: '지금 바로 다른 지원 프로그램을 확인해보세요.',
    linkText: '보조금이 뭔가요?',
    linkUrl: '/service-details-2',
    delay: '0.40'
  },
];
