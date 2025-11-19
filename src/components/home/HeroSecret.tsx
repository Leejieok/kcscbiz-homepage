import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { heroSecretData } from '../../data/heroSecretData';

function HeroSecret() {
  const { title, secrets } = heroSecretData;

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

        {/* 타임라인 */}
        <div className="relative max-w-4xl mx-auto">
          {secrets.map((secret, index) => (
            <div
              key={secret.number}
              className="relative"
              data-aos="fade-up"
              data-aos-delay={`${300 + index * 150}`}
            >
              <dl className="flex gap-8 pb-12 last:pb-0">
                {/* 타임라인 왼쪽 - 동그라미와 선 */}
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full border-4 border-gray-800 bg-white flex-shrink-0 mt-1"></div>
                  {index !== secrets.length - 1 && (
                    <div className="w-px bg-gray-300 flex-grow mt-2"></div>
                  )}
                </div>

                {/* 내용 */}
                <div className="flex-1 pb-4">
                  <dt className="text-gray-500 text-sm md:text-base mb-3">
                    0{secret.number}
                  </dt>
                  <dd>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 whitespace-pre-line">
                      {secret.title}
                    </h3>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed whitespace-pre-line">
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
  )
}

export default HeroSecret;