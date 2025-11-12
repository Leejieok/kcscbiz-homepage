import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { promiseData } from '@/data/promiseData';

function AboutPromises() {
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
            Our Promise
          </span>
          <p
            className="text-gray-400 text-xl md:text-2xl mb-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {promiseData.title.normal}
          </p>
          <p
            className="text-2xl md:text-3xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <strong className="text-gray-900">{promiseData.title.highlight}</strong>
          </p>
        </div>

        {/* 약속 타임라인 */}
        <div className="relative max-w-4xl mx-auto">
          {promiseData.promises.map((promise, index) => (
            <div
              key={index}
              className="relative"
              data-aos="fade-up"
              data-aos-delay={`${300 + index * 150}`}
            >
              <dl className="flex gap-8 pb-12 last:pb-0">
                {/* 타임라인 왼쪽 - 동그라미와 선 */}
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full border-4 border-gray-800 bg-white flex-shrink-0 mt-1"></div>
                  {index !== promiseData.promises.length - 1 && (
                    <div className="w-px bg-gray-300 flex-grow mt-2"></div>
                  )}
                </div>

                {/* 내용 */}
                <div className="flex-1 pb-4">
                  <dt className="text-gray-500 text-sm md:text-base mb-3">
                    {promise.number}
                  </dt>
                  <dd>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">
                      {promise.title}
                      {promise.titleHighlight.length > 0 && (
                        <span className="text-gray-900">{promise.titleHighlight[0]}</span>
                      )}
                    </h3>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed whitespace-pre-line">
                      {promise.description}
                      {promise.descriptionHighlight && (
                        <strong className="text-gray-900">{promise.descriptionHighlight}</strong>
                      )}
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

export default AboutPromises;
