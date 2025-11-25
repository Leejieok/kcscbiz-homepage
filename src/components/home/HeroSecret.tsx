import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { heroSecretData, heroSecretMobileData } from '../../data/heroSecretData';

function HeroSecret() {
  const [isMobile, setIsMobile] = useState(false);

  // 화면 크기 감지
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 모바일이면 heroSecretMobileData, 데스크톱이면 heroSecretData 사용
  const currentData = isMobile ? heroSecretMobileData : heroSecretData;
  const { title, secrets } = currentData;

  useEffect(() => {
    // AOS 초기화
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
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* 타이틀 영역 */}
        <div className="text-center mb-16">
          <span
            className="text-gray-400 text-sm md:text-base uppercase tracking-wide block mb-4"
            data-aos="fade-up"
          >
            Our Philosophy
          </span>
          <p
            className="text-2xl md:text-3xl mb-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <strong className="text-blue-500">{title.highlight}</strong>
          </p>
          <p
            className="text-gray-400 text-xl md:text-2xl whitespace-pre-line"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {title.normal}
          </p>
        </div>

        {/* 타임라인 & 그리드 */}
        <div className="relative max-w-4xl mx-auto lg:max-w-7xl lg:grid lg:grid-cols-3 lg:gap-8">
          {secrets.map((secret, index) => (
            <div
              key={secret.number}
              className="relative lg:bg-white lg:rounded-2xl lg:p-8 lg:shadow-[0_4px_20px_rgba(0,0,0,0.05)] lg:hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] lg:transition-all lg:duration-300 lg:hover:-translate-y-1 lg:border lg:border-gray-100 group"
              data-aos="fade-up"
              data-aos-delay={`${300 + index * 150}`}
            >
              <dl className="flex gap-8 pb-12 last:pb-0 lg:block lg:pb-0 lg:gap-0">
                {/* 타임라인 왼쪽 - 동그라미와 선 (모바일 전용) */}
                <div className="flex flex-col items-center lg:hidden">
                  <div className="w-4 h-4 rounded-full border-4 border-gray-800 bg-white flex-shrink-0 mt-1"></div>
                  {index !== secrets.length - 1 && (
                    <div className="w-px bg-gray-300 flex-grow mt-2"></div>
                  )}
                </div>

                {/* 내용 */}
                <div className="flex-1 pb-4 lg:pb-0">
                  {/* 번호 */}
                  <dt className="text-gray-500 text-sm md:text-base mb-3 lg:mb-6">
                    <span className="lg:hidden">0{secret.number}</span>
                    <span className="hidden lg:block text-6xl font-bold text-blue-50/80 absolute top-4 right-6 select-none transition-colors group-hover:text-blue-100">
                      0{secret.number}
                    </span>
                  </dt>
                  <dd>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 whitespace-pre-line lg:text-2xl lg:mb-4 lg:pr-12">
                      {secret.highlight ? (
                        <>
                          <span className="text-blue-500">{secret.highlight}</span>
                          {secret.title}
                        </>
                      ) : (
                        secret.title
                      )}
                    </h3>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed whitespace-pre-line lg:text-gray-500 lg:leading-relaxed">
                      {secret.description}
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSecret;