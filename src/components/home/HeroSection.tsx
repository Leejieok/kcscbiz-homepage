import heroImg from '@/assets/images/hero.png';
import circle from '@/assets/images/hero_circle_text.png';

function HeroSection() {
  return (
    <div className="w-full h-screen overflow-hidden relative">
      <img
        src={heroImg}
        alt="Hero"
        className="w-full h-full object-cover"
      />

      {/* Hero Content Overlay */}
      <div
        className="absolute inset-0 flex items-end px-3 mx-auto"
        style={{
          width: 'calc(100vw - clamp(0px, calc((100vw - 1600px) * 0.9888), 310px))'
        }}
      >
        <div className="w-full px-4 pb-20">
          <div className="flex">
            {/* Main Content - 10/12 width on large screens */}
            <div className="w-full lg:w-10/12 flex flex-col gap-5">
              <h3 className="text-white text-4xl lg:text-5xl font-bold">
                소상공인을 위한
              </h3>
              <h3 className="text-white text-4xl lg:text-5xl font-bold">
                정부 정책자금 컨설팅
              </h3>
              <p className="text-white text-lg lg:text-xl leading-relaxed max-w-3xl">
                정부 지원제도는 많지만, 실제로 어떤 걸 받을 수 있는지 알기 어려우셨죠?<br />
                저희의 전문 컨설턴트와 함께 1:1 맞춤형 솔루션을 제공합니다.
              </p>
            </div>

            {/* Circle Text Link - 2/12 width on large screens, hidden on mobile */}
            <div className="hidden lg:block lg:w-2/12 text-right">
              <a href="#service-section" className="inline-block relative w-[243px] h-[243px]">
                {/* Rotating circle text */}
                <img
                  src={circle}
                  alt="circle-text"
                  className="circle-text w-full h-full object-contain animate-spin-slow absolute inset-0"
                />
                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/kcsclogo.svg"
                    alt="circle-icon"
                    className="circle-icon w-24 h-24"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
