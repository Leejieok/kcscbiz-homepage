import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutIntroduce() {
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
    <section className="w-full py-16 px-4 bg-white mb-28">
      <div className="max-w-6xl mx-auto">
        {/* 메인 타이틀 */}
        <div className="mb-8 text-center">
          <p className="" data-aos="fade-up">Introduction</p>
          <div className="flex justify-center my-2" data-aos="fade-up" data-aos-delay="100">
            <div className="w-px h-9 bg-slate-900 my-4"></div>
          </div>
          <h2
            className="text-gray-400 font-extralight text-3xl md:text-4xl leading-tight pb-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            대표님들의 든든한 동반자,
          </h2>

          <h3
            className="text-3xl md:text-4xl"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <span className="text-gray-900 font-bold">한국중소기업지원센터</span>입니다.
          </h3>
        </div>

        {/* 이미지 */}
        <div
          className="mb-12 max-w-5xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="relative w-full overflow-hidden bg-slate-600" style={{ height: '320px' }}>
            {/* <img
              src="https://cdn.imweb.me/thumbnail/20250307/6c08502dcceb2.png"
              alt="한국중소기업지원센터"
              className="w-full h-auto object-cover"
              style={{
                imageRendering: '-webkit-optimize-contrast',
                display: 'block'
              }}
              loading="lazy"
            /> */}
          </div>
        </div>

        {/* 미션 텍스트 */}
        <div className="mb-6 text-center">
          <p
            className="text-xl md:text-2xl leading-relaxed mb-8"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <strong className="text-blue-800">
              먼저 고객 여러분의 변함없는 관심과 사랑에 깊이 감사드립니다.
            </strong>
          </p>
          <p
            className="text-base text-gray-700 leading-relaxed pb-8"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            우리는 중소기업과 소상공인의 성장을 지원하는 파트너로,<br />
            전문 컨설턴트들이 맞춤형 자금 전략부터 절차·서류 준비까지
            원스톱으로 안정적인 자금 확보와 기업 도약을 돕습니다.
          </p>
          <p
            className="text-base text-gray-700 leading-relaxed pb-8"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            한국중소기업지원센터는 최고의 실력, 그리고 믿을 수 있는<br />
            서비스로 전문 컨설턴트와 함께 여러분과 성장하는 혁신적인
            파트너가 되겠습니다.
          </p>
          <p
            className="text-base text-gray-700 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            감사합니다.
          </p>

        </div>



        {/* 추가 설명 텍스트 2 */}
        {/* <div className="mb-24 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            저희는 수많은 성공 사례와 고객들의 신뢰를 바탕으로, 중소기업의 성장과 발전을 이끄는 데 앞장서고 있습니다. 이제, 혼자 고민하지 마세요. 한국중소기업비즈니스센터가 대표님의 영원한 동반자로 함께하겠습니다.
          </p>
        </div> */}

        {/* 서명 */}
        <div
          className="text-right"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl text-center text-gray-700 leading-relaxed" style={{ fontFamily: 'InkLiquid, sans-serif' }}>
            한국중소기업지원센터 임직원 일동
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutIntroduce;