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
  const paginationRefDesktop = useRef<HTMLDivElement>(null);
  const swiperRefDesktop = useRef<SwiperType | null>(null);
  const [counters, setCounters] = useState<{ [key: number]: number }>({});
  const [hasAnimated, setHasAnimated] = useState(false);
  const bannerRefMobile = useRef<HTMLDivElement>(null);
  const bannerRefDesktop = useRef<HTMLDivElement>(null);

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

  // 카운트 애니메이션
  useEffect(() => {
    if (hasAnimated) return;

    const currentBannerRefMobile = bannerRefMobile.current;
    const currentBannerRefDesktop = bannerRefDesktop.current;

    const animateCounters = () => {
      if (!hasAnimated) {
        setHasAnimated(true);

        iconBanners.forEach((banner) => {
          const duration = 2000;
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
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (currentBannerRefMobile) observer.observe(currentBannerRefMobile);
    if (currentBannerRefDesktop) observer.observe(currentBannerRefDesktop);

    return () => {
      if (currentBannerRefMobile) observer.unobserve(currentBannerRefMobile);
      if (currentBannerRefDesktop) observer.unobserve(currentBannerRefDesktop);
    };
  }, [hasAnimated]);

  return (
    <section id="atc01" className="w-full relative bg-transparent md:bg-[#f5f5f5]">
      <div className="inner relative">
        {/* 모바일 버전: block md:hidden */}
        <div className="block md:hidden bg-white rounded-t-xl overflow-hidden -mt-8 relative z-10">
          {/* 상단 텍스트 영역 */}
          <div className="txt_area relative z-20 px-4 py-6">
            <div className="flex flex-col gap-4">
              {/* 텍스트 영역 */}
              <div>
                <p className="text-xl font-bold text-gray-900 leading-none mb-3">
                  <span className="block mb-2">정책자금 컨설팅,</span>
                  <span className="block">정말 믿어도 될지 걱정되시죠?</span>
                </p>
                <p className="text-sm text-gray-700 tracking-tight leading-relaxed">
                  쉽게 속일 듯한 <br />낮은 금리 광고에 지치셨다면,<br />
                  이제는 올바른 길에서 시작해보세요. <br />
                  <strong>한국중소기업지원센터가</strong> <br />고객님 곁에서 함께 챙겨드립니다.
                </p>
              </div>

              {/* 더보기 버튼 */}
              <div className="flex items-end justify-end">
                <Link
                  to="/service"
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors group text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform w-4 h-4"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                  <p className="text-sm font-medium whitespace-pre-line">서비스 소개{'\n'}더보기</p>
                </Link>
              </div>
            </div>
          </div>

          {/* 배경 이미지 슬라이더 - 가로 스크롤 */}
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-4" style={{ scrollBehavior: 'smooth' }}>
              <div className="flex gap-3 pb-4">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`flex-shrink-0 w-[85vw] relative min-h-[280px] rounded-lg overflow-hidden snap-center ${
                      index === 0 ? 'ml-4' : ''
                    } ${
                      index === slides.length - 1 ? 'mr-4' : ''
                    }`}
                  >
                    {/* 배경 이미지 */}
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${slide.image})`,
                      }}
                    ></div>

                    {/* 오버레이 */}
                    <div className="absolute inset-0 bg-black/65"></div>

                    {/* 슬라이드 텍스트 */}
                    <div className="absolute inset-0 flex items-center justify-center px-4 z-10">
                      <div className="text-center text-white max-w-md">
                        <p className="text-lg font-bold mb-3 leading-tight whitespace-pre-line">
                          {slide.title}
                        </p>
                        <p className="text-sm text-white/90 leading-relaxed whitespace-pre-line">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 아이콘 배너 */}
          <div ref={bannerRefMobile} className="icon_banner relative z-20 px-4 py-8">
            <ul className="grid grid-cols-1 gap-3">
              {iconBanners.map((banner) => (
                <li
                  key={banner.id}
                  data-aos="fade-up"
                  data-aos-delay={banner.delay || 0}
                >
                  <div className="bg-gray-50 p-5 rounded-lg flex flex-col items-center text-center shadow-sm">
                    <div className="txt">
                      <p className="font-bold text-2xl text-blue-600 mb-1">
                        {counters[banner.id] !== undefined
                          ? formatNumber(counters[banner.id], banner.suffix)
                          : '0' + banner.suffix
                        }
                      </p>
                      <p className="text-gray-900 text-sm font-medium">
                        {banner.title}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 웹 버전: hidden md:block */}
        <div className="hidden md:block">
          {/* 상단 텍스트 영역 - 흰색 배경 */}
          <div className="txt_area relative z-20 px-2 sm:px-3 mx-auto max-w-[1280px] py-6 sm:py-8 md:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8">
            {/* 왼쪽 박스 */}
            <div className="l_box lg:col-span-6">
              <p
                className="txt01 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight"
                data-aos="fade-right"
              >
                <span className="block mb-2 sm:mb-3 md:mb-4">정책자금 컨설팅,</span>
                <span className="block mb-2 sm:mb-3 md:mb-4">정말 믿어도 될지 걱정되시죠?</span>
              </p>
              <p
                className="txt02 text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mt-3 sm:mt-4"
                data-aos="fade-left"
              >
                쉽게 속일 듯한 낮은 금리 광고에 지치셨다면, <br />
                이제는 올바른 길에서 시작해보세요. <br />
                <strong>한국중소기업지원센터가</strong> 고객님 곁에서 함께 챙겨드립니다.
              </p>
            </div>

            {/* 오른쪽 박스 */}
            <div className="r_box lg:col-span-6 flex flex-col items-start lg:items-end justify-end space-y-4 sm:space-y-6 mt-4 lg:mt-0">
              {/* 페이지네이션 */}
              <div
                ref={paginationRefDesktop}
                className="pager flex gap-2"
              ></div>

              {/* 더보기 링크 */}
              <Link
                to="/service"
                className="flex items-center gap-2 sm:gap-3 bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors group text-sm sm:text-base"
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
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
                <p className="text-sm sm:text-base md:text-lg font-medium whitespace-pre-line">서비스 소개{'\n'}더보기</p>
              </Link>
            </div>
          </div>
        </div>

        {/* 배경 이미지 슬라이더 - 하단 영역 */}
        <div className="swiper-container img_slide swiper-container-fade mx-auto relative overflow-hidden list-none p-0 z-[1] rounded-lg sm:rounded-xl md:rounded-[20px] bg-black max-w-[1280px] px-2 sm:px-3">
          <Swiper
            onSwiper={(swiper) => {
              swiperRefDesktop.current = swiper;
              if (paginationRefDesktop.current) {
                swiper.pagination.el = paginationRefDesktop.current;
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
              el: paginationRefDesktop.current,
              clickable: true,
              bulletActiveClass: 'on',
            }}
            className="w-full h-full"
          >
            {slides.map((slide) => (
              <SwiperSlide
                key={slide.id}
                className={`swiper-slide ${slide.bgClass} w-full h-full relative min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px]`}
              >
                {/* 배경 이미지 */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                  }}
                >

                </div>

                {/* 오버레이 */}
                <div className="absolute inset-0 bg-black/65"></div>

                {/* 슬라이드 텍스트 - 오른쪽에 배치 */}
                <div className="absolute inset-0 flex items-center justify-center sm:justify-end px-4 sm:px-6 md:px-8 lg:px-12 xl:pr-20 z-10">
                  <div className="text-center sm:text-right text-white max-w-2xl">
                    <p className="slide_txt01 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight whitespace-pre-line">
                      {slide.title}
                    </p>
                    <p className="slide_txt02 text-xs sm:text-sm md:text-base lg:text-lg text-white/90 leading-relaxed whitespace-pre-line">
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
          ref={bannerRefDesktop}
          className="icon_banner relative z-20 px-2 sm:px-3 mx-auto max-w-[1280px] pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 md:pb-20"
        >
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {iconBanners.map((banner) => (
              <li
                key={banner.id}
                data-aos="fade-up"
                data-aos-delay={banner.delay || 0}
              >
                <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg transition-all duration-300 flex flex-col items-center text-center h-full shadow-sm hover:shadow-md">
                  <div className="txt">
                    <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-600 mb-1 sm:mb-2">
                      {counters[banner.id] !== undefined
                        ? formatNumber(counters[banner.id], banner.suffix)
                        : '0' + banner.suffix
                      }
                    </p>
                    <p className="text-gray-900 text-sm sm:text-base lg:text-lg font-medium">
                      {banner.title}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </div>
    </section>
  );
}

export default HeroService;
