import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/swiper-bundle.css';
import heroImg from '@/assets/images/hero.webp';
import hero2Img from '@/assets/images/hero2.webp';
import hero3Img from '@/assets/images/hero3.webp';

// 슬라이드 이미지 배열
const slideImages = [
  heroImg,
  hero2Img,
  hero3Img,
];

function HeroSection() {
  const paginationRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // AOS 초기화 - 한 번만 실행
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        offset: 100,
        disable: false,
      });
      // AOS 새로고침
      AOS.refresh();
    }
  }, []);

  // Swiper가 업데이트된 후 pagination 다시 렌더링
  useEffect(() => {
    if (swiperRef.current && paginationRef.current) {
      const timer = setTimeout(() => {
        swiperRef.current?.pagination?.update();
        swiperRef.current?.pagination?.render();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div id="mainVisual" className="w-full h-screen min-h-screen overflow-hidden relative">
      {/* Text Content */}
      <div className="main_txt absolute inset-0 flex items-center z-20 pointer-events-none">
        <div className="px-3 mx-auto w-full max-w-[1280px]">
          <div className="w-full px-4">
            <div className="flex flex-col gap-8">
              {/* Main Content */}
              <header className="flex flex-col gap-4">
                <p 
                  className="text-white text-2xl lg:text-7xl leading-tight font-thin"
                  data-aos="fade-right"
                >
                  대표님, 이제는 준비하실 차례입니다.
                </p>
                <span className="text-white font-bold text-xl lg:text-5xl leading-tight block">
                  정책자금 신청부터 승인까지 <span className="text-blue-300 pt-2">맞춤형 컨설팅 직접 증명합니다.</span>
                </span>
                
                <p 
                  className="text-white text-xl lg:text-2xl leading-relaxed mt-6 max-w-3xl"
                  data-aos="fade-left"
                >
                  <strong>정책자금 컨설팅,</strong> 혹시 고민 중이신가요?<br />
                  그렇다면 딱 3분만 집중해주세요.<br />
                </p>
                
                <a 
                  href="#contact"
                  className="flex items-center gap-2 text-white text-lg font-semibold mt-8 w-fit pointer-events-auto hover:opacity-80 transition-opacity"
                  data-aos="fade-in"
                  data-aos-delay="500"
                  aria-label="무료 상담 신청하기"
                >
                  <p className="go_txt">무료 상담 신청하기</p>
                  <p className="arrow">
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
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </p>
                </a>
              </header>
            </div>
          </div>
        </div>
      </div>

      {/* Swiper Container */}
      <div className="swiper-container main_slide w-full h-full relative z-0">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            // 약간의 지연을 두고 pagination 초기화
            setTimeout(() => {
              if (paginationRef.current && swiper.pagination) {
                swiper.pagination.el = paginationRef.current;
                swiper.pagination.init();
                swiper.pagination.render();
                swiper.pagination.update();
              }
            }, 100);
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
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
            renderBullet: (index, className) => {
              const number = String(index + 1).padStart(2, '0');
              return `<span class="${className}" tabindex="0" role="button" aria-label="Go to slide ${index + 1}">${number}</span>`;
            },
          }}
          className="w-full h-full"
        >
          {slideImages.map((image, index) => (
            <SwiperSlide key={index} className="w-full h-full">
              <div 
                className="inner_img w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/55" aria-hidden="true"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pager Box */}
      <div className="absolute bottom-32 left-0 right-0 z-50 px-4 pointer-events-auto">
        <div className="max-w-screen-2xl mx-auto relative">
          <div 
            ref={paginationRef}
            className="hidden"
          ></div>
          {/* 직접 렌더링하는 숫자 페이지네이션 */}
          <div className="flex gap-20 items-end mb-2">
            {slideImages.map((_, index) => {
              const number = String(index + 1).padStart(2, '0');
              const isActive = activeIndex === index;
              return (
                <button
                  key={index}
                  onClick={() => {
                    if (swiperRef.current) {
                      swiperRef.current.slideToLoop(index);
                    }
                  }}
                  className={`relative cursor-pointer transition-all duration-300 border-none outline-none ${
                    isActive 
                      ? 'text-white text-2xl font-bold' 
                      : 'text-white/70 text-lg font-normal'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  {number}
                  {/* 활성 상태 밑줄 */}
                  {isActive && (
                    <span className="absolute -bottom-0 left-0 h-0.5 bg-white w-24"></span>
                  )}
                </button>
              );
            })}
          </div>
          {/* Bottom Progress Line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-white/30"></div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
