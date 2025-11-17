import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/swiper-bundle.css';
import { FIREBASE_IMAGES } from '@/constants/firebaseImages';

// 슬라이드 데이터
const slides = [
  {
    id: 1,
    bgClass: 'img01',
    title: '계약금 드린 뒤, 혹시나 사라질까…\n자꾸만 마음이 조마조마해요',
    description: "한국중소기업지원센터는 '성공 시 수수료' 원칙으로\n고객님의 걱정을 끝까지 함께 안아드립니다.",
    image: FIREBASE_IMAGES.images.slide01,
  },
  {
    id: 2,
    bgClass: 'img02',
    title: '괜히 돈과 시간만 흘려보내게 될까…\n그게 가장 불안해요',
    description: '10년 넘는 경험과 98.9% 승인률로,\n고객님의 시간과 비용을 소중하게 지켜드립니다.',
    image: FIREBASE_IMAGES.images.slide02,
  },
  {
    id: 3,
    bgClass: 'img03',
    title: '비슷한 회사가 너무 많아서…\n어느 곳을 믿어야 할지 모르겠어요',
    description: '3,486건 이상의 성공과 5,623개 기업 상담 경험으로,\n흔들리지 않는 신뢰를 전해드립니다.',
    image: FIREBASE_IMAGES.images.slide03,
  },
];

// 아이콘 배너 데이터
const iconBanners = [
  {
    id: 1,
    title: '정책자금 승인 건수',
    data: '3,000+',
    targetValue: 3486,
    suffix: '+',
    delay: 0,
  },
  {
    id: 2,
    title: '정책자금 승인률',
    data: '98.9%',
    targetValue: 98.9,
    suffix: '%',
    delay: 300,
  },
  {
    id: 3,
    title: '누적 상담 기업 수',
    data: '5,351+ 명',
    targetValue: 5623,
    suffix: '+ 명',
    delay: 600,
  },
];

// 숫자 포맷팅 함수
const formatNumber = (value: number, suffix: string): string => {
  if (suffix === '%') {
    return `${value.toFixed(1)}%`;
  }
  return `${Math.floor(value).toLocaleString()}${suffix}`;
};

function HeroService() {
  const paginationRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const [counters, setCounters] = useState<{ [key: number]: number }>({});
  const [hasAnimated, setHasAnimated] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        offset: 100,
        disable: false,
      });
      AOS.refresh();
    }
  }, []);

  useEffect(() => {
    if (swiperRef.current && paginationRef.current) {
      const timer = setTimeout(() => {
        swiperRef.current?.pagination?.update();
        swiperRef.current?.pagination?.render();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

  // 카운트 애니메이션
  useEffect(() => {
    if (hasAnimated) return;

    const currentBannerRef = bannerRef.current;
    if (!currentBannerRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            iconBanners.forEach((banner) => {
              const duration = 2000; // 2초
              const steps = 60;
              const increment = banner.targetValue / steps;
              let current = 0;
              
              const timer = setInterval(() => {
                current += increment;
                if (current >= banner.targetValue) {
                  current = banner.targetValue;
                  clearInterval(timer);
                }
                
                setCounters((prev) => ({
                  ...prev,
                  [banner.id]: current,
                }));
              }, duration / steps);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(currentBannerRef);

    return () => {
      observer.unobserve(currentBannerRef);
    };
  }, [hasAnimated]);

  return (
    <section id="atc01" className="w-full relative" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="inner relative">
        {/* 상단 텍스트 영역 - 흰색 배경 */}
        <div className="txt_area relative z-20 px-3 mx-auto" style={{ maxWidth: '1280px', paddingTop: '40px', paddingBottom: '40px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* 왼쪽 박스 */}
            <div className="l_box lg:col-span-6">
              <p 
                className="txt01 text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                data-aos="fade-right"
              >
                <span className="block mb-4">정책자금 컨설팅,</span>
                <span className="block mb-4">정말 믿어도 될지 걱정되시죠?</span>
              </p>
              <p 
                className="txt02 text-lg lg:text-xl text-gray-700 leading-relaxed"
                data-aos="fade-left"
              >
                쉽게 속일 듯한 낮은 금리 광고에 지치셨다면, <br />
                이제는 올바른 길에서 시작해보세요. <br />
                <strong>한국중소기업지원센터가</strong> 고객님 곁에서 함께 챙겨드립니다.
              </p>
            </div>

            {/* 오른쪽 박스 */}
            <div className="r_box lg:col-span-6 flex flex-col items-end justify-end space-y-6">
              {/* 페이지네이션 */}
              <div 
                ref={paginationRef}
                className="pager flex gap-2"
              ></div>
              
              {/* 더보기 링크 */}
              <Link
                to="/service"
                className="flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors group"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
                <p className="text-lg font-medium whitespace-pre-line">서비스 소개{'\n'}더보기</p>
              </Link>
            </div>
          </div>
        </div>

        {/* 배경 이미지 슬라이더 - 하단 영역 */}
        <div className="swiper-container img_slide swiper-container-fade mx-auto relative overflow-hidden list-none p-0 z-[1] rounded-[20px] bg-black" style={{ maxWidth: '1280px'}}>
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              if (paginationRef.current) {
                swiper.pagination.el = paginationRef.current;
                swiper.pagination.init();
                swiper.pagination.render();
              }
            }}
            modules={[Autoplay, Pagination, EffectFade]}
            loop={true}
            effect="fade"
            speed={1400}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 3200,
              disableOnInteraction: false,
            }}
            pagination={{
              el: paginationRef.current,
              clickable: true,
              bulletActiveClass: 'on',
            }}
            className="w-full h-full"
          >
            {slides.map((slide) => (
              <SwiperSlide 
                key={slide.id} 
                className={`swiper-slide ${slide.bgClass} w-full h-full relative`}
                style={{ 
                  minHeight: '300px'
                }}
              >
                {/* 배경 이미지 */}
                <div 
                  className="absolute inset-0 bg-cover bg-center "
                  style={{
                    backgroundImage: `url(${slide.image})`,
                  }}
                >

                </div>
                
                {/* 오버레이 */}
                <div className="absolute inset-0 bg-black/65"></div>
                
                {/* 슬라이드 텍스트 - 오른쪽에 배치 */}
                <div className="absolute inset-0 flex items-center justify-end pr-12 lg:pr-20 z-10">
                  <div className="text-right text-white max-w-2xl">
                    <p className="slide_txt01 text-3xl lg:text-4xl font-bold mb-4 leading-tight whitespace-pre-line">
                      {slide.title}
                    </p>
                    <p className="slide_txt02 text-base lg:text-lg text-white/90 leading-relaxed whitespace-pre-line">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 아이콘 배너 */}
        <div 
          ref={bannerRef}
          className="icon_banner relative z-20 px-3 mx-auto" 
          style={{ maxWidth: '1280px', paddingTop: '60px', paddingBottom: '80px' }}
        >
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {iconBanners.map((banner) => (
              <li 
                key={banner.id}
                data-aos="fade-up"
                data-aos-delay={banner.delay || 0}
              >
                <div className="bg-white p-6 rounded-lg transition-all duration-300 flex flex-col items-center text-center h-full">
                  <div className="txt">
                    <p className="font-bold text-3xl lg:text-4xl text-blue-600 mb-2">
                      {counters[banner.id] !== undefined 
                        ? formatNumber(counters[banner.id], banner.suffix)
                        : '0' + banner.suffix
                      }
                    </p>
                    <p className="text-gray-900 text-base lg:text-lg font-medium">
                      {banner.title}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HeroService;
