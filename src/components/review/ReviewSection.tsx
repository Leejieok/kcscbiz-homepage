import { useEffect, useRef, useState } from 'react';
import reviewBG from '../../assets/images/reviewBG.webp';

function ReviewSection() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    const counters = document.querySelectorAll('.wb-counter-value');

    counters.forEach((counter) => {
      const target = counter.getAttribute('data-target');
      if (!target) return;

      const isDecimal = target.includes('.');
      const targetValue = parseFloat(target.replace(/,/g, ''));
      const duration = 2000;
      const increment = targetValue / (duration / 16);
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < targetValue) {
          if (isDecimal) {
            counter.textContent = current.toFixed(1);
          } else {
            counter.textContent = Math.floor(current).toLocaleString();
          }
          requestAnimationFrame(updateCounter);
        } else {
          if (isDecimal) {
            counter.textContent = targetValue.toFixed(1);
          } else {
            counter.textContent = targetValue.toLocaleString();
          }
        }
      };

      updateCounter();
    });
  };

  return (
    <section
      className="pt-28 pb-20 px-5 relative min-h-[500px] flex items-center"
      id="wb-hanbizstats-wrapper"
      ref={sectionRef}
      style={{
        backgroundImage: `url(${reviewBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="max-w-[1400px] mx-auto relative z-10 w-full">
        {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-5 leading-[1.4]">
          한국중소기업지원센터가<br />숫자로 증명합니다.
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-[#666] mb-12 md:mb-16 leading-[1.6]">
          정책자금, 어디서부터 시작해야할지 막막하셨다면<br />지금부터 집중해서 모든 과정을 확인하세요.
        </p> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1400px] mx-auto">
          <div className="transition-transform duration-300 ease-in-out flex flex-col items-center">
            <div className="text-base md:text-lg lg:text-xl text-white font-semibold mb-3">누적 정책자금 승인 금액</div>
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white flex items-baseline justify-center gap-1" id="wb-amount-counter">
              <span className="wb-counter-value text-4xl md:text-5xl lg:text-6xl font-black text-white" data-target="84.6">0</span>
              <span className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold">억+</span>
            </div>
          </div>

          <div className="transition-transform duration-300 ease-in-out flex flex-col items-center">
            <div className="text-base md:text-lg lg:text-xl text-white font-semibold mb-3">정책자금 승인률</div>
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white flex items-baseline justify-center gap-1" id="wb-rate-counter">
              <span className="wb-counter-value text-4xl md:text-5xl lg:text-6xl font-black text-white" data-target="97">0</span>
              <span className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold">%</span>
            </div>
          </div>

          <div className="transition-transform duration-300 ease-in-out flex flex-col items-center">
            <div className="text-base md:text-lg lg:text-xl text-white font-semibold mb-3">누적상담기업수</div>
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white flex items-baseline justify-center gap-1" id="wb-companies-counter">
              <span className="wb-counter-value text-4xl md:text-5xl lg:text-6xl font-black text-white" data-target="4267">0</span>
              <span className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold">명+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewSection;