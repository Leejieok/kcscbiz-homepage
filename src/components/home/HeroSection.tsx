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
import { heroSlides } from '@/data/heroData';

// ...existing code...
const slideImages = [
  heroImg,
  hero2Img,
  hero3Img,
];

function HeroSection() {
  const paginationRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({ duration: 1000, easing: 'ease-in-out', once: true, offset: 100, disable: false });
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

  // Get current slide data for mobile and desktop
  const currentMobileSlide = heroSlides[mobileActiveIndex];
  const currentDesktopSlide = heroSlides[activeIndex];

  return (
    <>
      {/* 모바일: block md:hidden */}
      <div className="block md:hidden w-full h-screen max-h-[440px] relative pt-[60px] bg-slate-900">
        {/* 모바일 Swiper */}
        <Swiper
          modules={[Autoplay, EffectFade]}
          loop={true}
          effect="fade"
          speed={1400}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 3200, disableOnInteraction: false }}
          onSlideChange={(swiper) => setMobileActiveIndex(swiper.realIndex)}
          className="w-full h-full"
        >
          {slideImages.map((image, index) => (
            <SwiperSlide key={index} className="w-full h-full">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-black/60"></div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute inset-0 flex items-start justify-start z-20 px-4 pt-[120px]">
          <div className="w-full max-w-[720px] text-left">
            <p className="text-white text-sm leading-tight font-thin mb-2">
              {currentMobileSlide.mainCopy[0]}<br className="md:hidden" />{currentMobileSlide.mainCopy[1]}<br className="md:hidden" />{currentMobileSlide.mainCopy[2]}
            </p>
            <h2 className="text-white font-bold text-lg leading-tight mb-2">
              <span className="text-blue-300">{currentMobileSlide.mainCopy[3]}<br className="md:hidden" />{currentMobileSlide.mainCopy[4]}</span>
              <br />
            </h2>
            <p className="text-white text-xs leading-relaxed mb-4 max-w-xs">
              {currentMobileSlide.subCopy[0]}<br />{currentMobileSlide.subCopy[1]} <br className="md:hidden" />
              {currentMobileSlide.subCopy[2]}
            </p>
          </div>
        </div>

        {/* 하단 버튼 */}
        <a
          href="#contact"
          className="absolute bottom-20 left-4 z-30 inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm px-3 py-2 rounded transition"
          aria-label="무료 상담 신청하기"
        >
          무료 상담 신청하기
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
      </div>

      {/* 웹: 기존 데스크탑용 (hidden md:block) */}
      <div className="hidden md:block">
        {/* ...existing desktop code... */}
        <div id="mainVisual" className="w-full h-screen min-h-screen overflow-hidden relative bg-slate-900">
          {/* Text Content */}
          <div className="main_txt absolute inset-0 flex items-center z-20 pointer-events-none">
            <div className="px-2 sm:px-3 mx-auto w-full max-w-[1280px]">
              <div className="w-full px-2 sm:px-4">
                <div className="flex flex-col gap-4 sm:gap-8">
                  {/* Main Content */}
                  <header className="flex flex-col gap-2 sm:gap-4">
                    <p className="text-white text-base sm:text-xl md:text-2xl lg:text-6xl leading-tight font-thin" data-aos="fade-right">
                      <span className="block mb-2 sm:mb-3">{currentDesktopSlide.mainCopy[0]}{currentDesktopSlide.mainCopy[1]}</span>
                      <span className="block">{currentDesktopSlide.mainCopy[2]}</span>
                    </p>
                    <span className="text-white font-bold text-sm sm:text-lg md:text-xl lg:text-5xl leading-tight block">
                      <span className="text-blue-300 pt-1 sm:pt-2">{currentDesktopSlide.mainCopy[3]}{currentDesktopSlide.mainCopy[4]}</span>
                    </span>
                    <p className="text-white text-xs sm:text-base md:text-xl lg:text-2xl leading-relaxed mt-3 sm:mt-6 max-w-3xl" data-aos="fade-left">
                      {currentDesktopSlide.subCopy[0]}<br />{currentDesktopSlide.subCopy[1]}<br />
                      {currentDesktopSlide.subCopy[2]}
                    </p>
                    <a href="#contact" className="flex flex-col items-end sm:gap-2 text-white text-sm sm:text-base md:text-lg font-semibold mt-4 sm:mt-8 w-fit pointer-events-auto hover:opacity-80 transition-opacity" data-aos="fade-in" data-aos-delay="500" aria-label="무료 상담 신청하기">
                      <p className="go_txt">무료 상담 신청하기</p>
                      <p className="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
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

          {/* Swiper Container (데스크탑용 슬라이더 유지) */}
          <div className="swiper-container main_slide w-full h-full relative z-0">
            {/* ...existing Swiper code... */}
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                setTimeout(() => {
                  if (paginationRef.current && swiper.pagination) {
                    swiper.pagination.el = paginationRef.current;
                    swiper.pagination.init();
                    swiper.pagination.render();
                    swiper.pagination.update();
                  }
                }, 100);
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              modules={[Autoplay, Pagination, EffectFade]}
              loop={true}
              effect="fade"
              speed={1400}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{ delay: 3200, disableOnInteraction: false }}
              pagination={{ el: paginationRef.current, clickable: true, bulletActiveClass: 'on', renderBullet: (index, className) => { const number = String(index + 1).padStart(2, '0'); return `<span class="${className}" tabindex="0" role="button" aria-label="Go to slide ${index + 1}">${number}</span>`; } }}
              className="w-full h-full"
            >
              {slideImages.map((image, index) => (
                <SwiperSlide key={index} className="w-full h-full">
                  <div className="inner_img w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
                  <div className="absolute inset-0 bg-black/55" aria-hidden="true"></div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Pager Box */}
          <div className="absolute bottom-16 sm:bottom-24 md:bottom-32 left-0 right-0 z-50 px-2 sm:px-4 pointer-events-auto">
            <div className="max-w-screen-2xl mx-auto relative">
              <div ref={paginationRef} className="hidden"></div>
              <div className="flex gap-4 sm:gap-8 md:gap-12 lg:gap-20 items-end mb-2">
                {slideImages.map((_, index) => {
                  const number = String(index + 1).padStart(2, '0');
                  const isActive = activeIndex === index;
                  return (
                    <button key={index} type="button" onClick={() => swiperRef.current?.slideToLoop(index)} className={`relative cursor-pointer transition-all duration-300 border-none outline-none ${isActive ? 'text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold' : 'text-white/70 text-sm sm:text-base md:text-lg font-normal'}`} aria-label={`Go to slide ${index + 1}`}>
                      {number}
                      {isActive && <span className="absolute -bottom-0 left-0 h-0.5 bg-white w-8 sm:w-12 md:w-16 lg:w-24"></span>}
                    </button>
                  );
                })}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-white/30"></div>
            </div>
          </div>
        </div>
        {/* ...existing code... */}
      </div>
    </>
  );
}

export default HeroSection;