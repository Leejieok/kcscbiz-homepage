import heroImg from '@/assets/images/hero.webp';

function HeroSection() {
  return (
    <section 
      className="w-full h-screen overflow-hidden relative" 
      aria-label="메인 히어로 섹션"
    >
      {/* Background Image */}
      <img
        src={heroImg}
        alt="정책자금 컨설팅 서비스 - 대표님들을 위한 전문 상담"
        className="w-full h-full object-cover"
        loading="eager"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" aria-hidden="true"></div>

      {/* Hero Content Overlay */}
      <div className="absolute inset-0 flex items-center">
        <div
          className="px-3 mx-auto w-full"
          style={{
            maxWidth: '1280px'
          }}
        >
          <div className="w-full px-4">
            <div className="flex flex-col gap-8">
              {/* Main Content */}
              <header className="flex flex-col gap-4">
                
                <p 
                  className="text-white text-5xl lg:text-5xl leading-tight" 
                  style={{ fontFamily: 'InkLiquid, sans-serif' }}
                >
                  대표님, 이제는 준비하실 차례입니다.
                </p>
                
                <h1 className="text-white text-5xl lg:text-7xl font-bold leading-tight">
                  정책자금 신청부터 승인까지
                </h1>
                <h2 className="text-white text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="inline-block bg-brand-highlight px-4 py-2 rounded-md">
                    A부터 Z까지 직접 증명합니다.
                  </span>
                </h2>
                
                <p className="text-white text-xl lg:text-2xl leading-relaxed mt-6 max-w-3xl">
                  <strong>정책자금 컨설팅,</strong> 혹시 고민 중이신가요?<br />
                  그렇다면 딱 5분만 집중해주세요.
                </p>
              </header>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a 
                  href="#contact"
                  className="px-10 py-4 bg-primary text-white text-lg font-semibold rounded-md hover:bg-primary-hover transition-all duration-300 shadow-lg text-center"
                  aria-label="무료 상담 신청하기"
                >
                  무료 상담 신청
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;