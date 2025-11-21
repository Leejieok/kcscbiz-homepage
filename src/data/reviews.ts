import { FIREBASE_IMAGES } from '@/constants/firebaseImages';

export interface ReviewData {
  id: number;
  image: string;
  title: string;
  categoryEn: string;
  categoryKr: string;
  link: string;
}

export const reviewsData: ReviewData[] = [
  {
    id: 1,
    image: FIREBASE_IMAGES.images.review06,
    title: '종합 건설·시공 산업',
    categoryEn: 'Construction Industry',
    categoryKr: '건설업',
    link: '#'
  },
  {
    id: 2,
    image: FIREBASE_IMAGES.images.review02,
    title: '전문 도·소매 유통업',
    categoryEn: 'Wholesale And Retail Business',
    categoryKr: '도·소매업',
    link: '#'
  },
  {
    id: 3,
    image: FIREBASE_IMAGES.images.review03,
    title: '고객 맞춤형 서비스업',
    categoryEn: 'Service Industry',
    categoryKr: '서비스업',
    link: '#'
  },
  {
    id: 4,
    image: FIREBASE_IMAGES.images.review04,
    title: '외식·프랜차이즈 산업',
    categoryEn: 'Restaurant Business',
    categoryKr: '요식업',
    link: '#'
  },
  {
    id: 5,
    image: FIREBASE_IMAGES.images.review05,
    title: '스마트 운송·물류 산업',
    categoryEn: 'Tansportation And Logistics Industry',
    categoryKr: '운수·물류업',
    link: '#'
  },
  {
    id: 6,
    image: FIREBASE_IMAGES.images.review01,
    title: '첨단기술 제조·가공 산업',
    categoryEn: 'Manufacturing Industry',
    categoryKr: '제조업',
    link: '#'
  }
];
