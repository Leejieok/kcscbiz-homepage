import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/swiper-bundle.css';
import bgImg from '../../assets/images/brandBG.webp';
import crape01 from '../../assets/images/crape01.webp';
import crape02 from '../../assets/images/crape02.webp';
import crape03 from '../../assets/images/crape03.webp';
import crape04 from '../../assets/images/crape04.webp';

// 기술 슬라이드 데이터
const techSlides = [
  {
    id: 1,
    number: '01',
    title: '대한민국 우수기업인증',
    description: '질병의 원인을 이해하고 그에 따른 효과적인 치료법을 개발해\n바이오마커, 유전자 치료 등 의료 분야에서 혁신을 가져오고 있습니다.',
    image: crape01,
    link: '/service/medical',
  },
  {
    id: 2,
    number: '02',
    title: '대한민국 우수브랜드인증',
    description: '유전공학 기술을 활용하여 작물의 생산성과 내구성을 향상시키고,\n새로운 식품 생산 및 가공 기술을 개발해 식량 및 영양 문제에 대응합니다.',
    image: crape02,
    link: '/service/agriculture',
  },
  {
    id: 3,
    number: '03',
    title: '고객선호 브랜드 대상',
    description: '바이오 에너지, 바이오 다양성 보전, 환경 오염 제어 등을 통해\n지속 가능한 개발과 환경 보호를 동시에 추구합니다.',
    image: crape03,
    link: '/service/environment',
  },
  {
    id: 4,
    number: '04',
    title: '경영 컨설팅 부문 우수기업',
    description: '세포공학, 효소 공학 등으로 새로운 원료 및 생산 방법을 개발해\n산업 생산의 효율성을 높이고 친환경적인 생산을 실현하고 있습니다.',
    image: crape04,
    link: '/service/industrial',
  },
];

function HeroReview() {
  const swiperRef = useRef<SwiperType | null>(null);
  const paginationRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  return (
    <section id="atc02" className="w-full bg-white">
      <div className="l_inner w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch relative ">
          {/* 왼쪽 패널 - 배경 이미지 */}
          <div
            className="lg:col-span-6 p-6 lg:p-8 py-16 lg:py-20 relative overflow-visible h-full "
            style={{
              backgroundImage: `url(${bgImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* 배경 오버레이 */}

            <div className="relative z-10 h-full flex flex-col pl-[200px]">
              {/* 영문 타이틀 */}
              <p 
                className="eng_tit text-xs uppercase tracking-widest text-white/70 mb-12"
                data-aos="fade-right"
              >
                OUR CONSULTING 
              </p>

              {/* 큰 제목 */}
              <p 
                className="big_txt text-2xl lg:text-4xl font-bold text-white leading-tight mb-8"
                data-aos="fade-left"
              >
                인증 완료된<br />
                한국중소기업지원센터<br />
                지금이 골든 타임입니다.
              </p>

              {/* 커스텀 페이지네이션 */}
              <div 
                ref={paginationRef}
                className="pager_txt flex flex-col gap-3 mt-auto"
              >
                {techSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => {
                      if (swiperRef.current) {
                        swiperRef.current.slideToLoop(index);
                      }
                    }}
                    className={`pager_bullet flex items-center gap-3 text-left transition-all duration-300 relative pl-3 py-2 ${
                      activeIndex === index
                        ? 'text-white'
                        : 'text-white/60 hover:text-white/80'
                    }`}
                    aria-label={`${slide.title} 보기`}
                  >
                    {/* 활성 상태 세로선 */}
                    {activeIndex === index && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-white"></div>
                    )}
                    <span className="font-bold text-base min-w-[35px]">{slide.number}</span>
                    <span className="text-sm lg:text-base">{slide.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 가운데 네비게이션 버튼 */}
            <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20">
              <button
                className="w-12 h-12 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all flex items-center justify-center"
                aria-label="다음 슬라이드"
                onClick={() => {
                  if (swiperRef.current) {
                    swiperRef.current.slideNext();
                  }
                }}
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
                  className="text-gray-800"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>

          {/* 오른쪽 패널 - 흰색 배경 */}
          <div className="lg:col-span-6 relative">
            <div className="w-full h-full flex items-center justify-center p-6 lg:p-8 py-16 lg:py-20">
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                  setActiveIndex(swiper.realIndex);
                }}
                modules={[Autoplay, Navigation]}
                loop={true}
                speed={1400}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                  delay: 3200,
                  disableOnInteraction: false,
                }}
                navigation={{
                  prevEl: '#atc02 .nav_arrow .prev',
                }}
                className="w-full max-w-2xl"
              >
                {techSlides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div className="w-full flex flex-col items-center">
                      {/* 이미지 */}
                      <div className="img mb-4 rounded-lg overflow-hidden aspect-[4/3] w-full max-w-xl shadow-xl">
                        <img 
                          src={slide.image} 
                          alt={slide.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/1200x800?text=' + encodeURIComponent(slide.title);
                          }}
                        />
                      </div>

                      {/* 제목 */}
                      <p className="tit text-xl lg:text-2xl font-bold text-gray-900 mb-3 text-center">
                        {slide.title}
                      </p>



                      {/* 자세히 보기 버튼 */}
                      {/* <Link 
                        to={slide.link}
                        className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors group text-sm"
                      >
                        자세히 보기
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
                          className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        >
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </Link> */}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroReview;
