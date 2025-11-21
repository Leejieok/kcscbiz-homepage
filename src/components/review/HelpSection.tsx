import { useEffect, useRef, useState } from 'react';

function HelpSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
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
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 px-5 bg-cover bg-no-repeat"
      id="wb-hanbizcontact-wrapper"
    >
      <div className="max-w-[1400px] mx-auto text-center">
        <h1
          className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6 transition-all duration-800 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          사업 자금때문에 힘들지 않으신가요?
        </h1>

        <h2
          className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-800 mb-6 md:mb-8 transition-all duration-800 delay-100 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          한국중소기업지원센터가 해결하겠습니다.
        </h2>

        <p
          className={`text-base md:text-lg lg:text-xl text-gray-700 mb-8 md:mb-10 lg:mb-12 leading-relaxed transition-all duration-800 delay-200 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          또 다른 성공사례를 만들 생각에
          <br />
          우리는 기쁩니다.
        </p>

        <a
          href="https://www.krbizinfo.co.kr/contact"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block px-8 md:px-12 py-4 md:py-5 text-base md:text-lg lg:text-xl font-bold text-white bg-[#4285f4] hover:bg-[#3367d6] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          지원금 조회하기
        </a>

        {/* Bottom Spacing */}
        <div className="w-full h-[135px]"></div>
      </div>
    </section>
  );
}

export default HelpSection;