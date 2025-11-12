import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutImage from '../../assets/images/about.webp';

function AboutSection() {
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
    <div className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
         style={{
           backgroundImage: `url(${aboutImage})`,
           backgroundColor: '#dddddd'
         }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-20">
        <div className="flex justify-between items-start gap-8">
          {/* Left: Text Content */}
          <div className="flex-1">
            {/* Main Title */}
            <div className="mb-8">
              <span
                className="block text-3xl text-white md:text-4xl lg:text-5xl mb-6"
                style={{ fontFamily: 'InkLiquid, sans-serif' }}
                data-aos="fade-right"
              >
                정책자금 컨설팅, 믿을 수 있는 전문가
              </span>
              <h1
                className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-4 block"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                한국중소기업지원센터와
              </h1>
              <h2
                className="text-4xl md:text-5xl lg:text-5xl text-white mb-4 block"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                함께라면 가능합니다.
              </h2>
            </div>

            {/* Subtitle */}
            <div className="mb-12">
              <p
                className="text-xl md:text-2xl lg:text-3xl text-white"
                data-aos="fade-left"
                data-aos-delay="600"
              >
                <span className="font-semibold">대표님의 도약</span>
                <span className="text-lg md:text-xl lg:text-2xl">을 기대할 수 있도록 힘껏 밀어드리겠습니다.</span>
              </p>
            </div>
          </div>

          {/* Right: Statistics Cards */}
          <div className="flex flex-col gap-4 max-w-xs flex-shrink-0">
            {/* Card 1 */}
            <div
              className="bg-orange-500 p-6 text-white"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <p className="text-lg md:text-xl font-bold mb-2">
                매 달 50억원 이상
              </p>
              <p className="text-sm opacity-90">정책자금 조달 성공</p>
            </div>

            {/* Card 2 */}
            <div
              className="bg-gray-800 p-6 text-white"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <p className="text-lg md:text-xl font-bold mb-2">
                연 간 1,000곳 이상 기업
              </p>
              <p className="text-sm opacity-90">과 함께 한 신뢰</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection;