import { useState, useEffect } from 'react';
import { FIREBASE_IMAGES } from '@/constants/firebaseImages';

interface FundingCardData {
  id: number;
  month: number;
  amount: string;
}

function ServiceSection() {
  const fundingData: FundingCardData[] = [
    { id: 1, month: 1, amount: '1,000,000,000 원' },
    { id: 2, month: 2, amount: '70,000,000 원' },
    { id: 3, month: 3, amount: '50,000,000 원' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % fundingData.length);
    }, 3000); // 3초마다 변경

    return () => clearInterval(interval);
  }, [fundingData.length]);

  return (
    <section
      className="w-full min-h-screen px-4 py-28 relative flex items-center bg-[#2b2d4e]"
      aria-labelledby="policy-funding-heading"
      style={{
        backgroundImage: `url(${FIREBASE_IMAGES.backgrounds.serviceBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="px-3 mx-auto w-full relative z-10" style={{ maxWidth: '1280px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side - 7 columns */}
          <div className="lg:col-span-7 space-y-6">
            {/* Header Section */}
            <header className="space-y-6">
              {/* Spacing */}
              <div className="h-8"></div>

              {/* Main Heading */}
              <div className="space-y-2 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                <h2
                  id="policy-funding-heading"
                  className="text-5xl tracking-tight text-white pb-4"
                  style={{ fontFamily: 'InkLiquid, sans-serif' }}
                >
                  대표님 자금으로 버티는 순간, <br /> 경쟁사는 정책자금으로 확장합니다.
                </h2>
                <h3 className="text-6xl font-bold text-white tracking-tight">
                  몰라서 못 받은 정책자금,
                </h3>
                <h3 className="text-6xl font-bold text-white tracking-tight">
                  대표님 업종엔
                </h3>
                <h3 className="text-6xl font-bold tracking-tight text-blue-300">
                  얼마까지 가능할까요?
                </h3>
              </div>

              {/* Sub Text */}
              <div className="animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                <p className="text-2xl leading-loose text-gray-300">
                  간이과세도 <strong className="text-white">최대 1억 원</strong>까지 지원 대상!
                </p>
              </div>

              {/* Spacing */}
              <div className="h-8"></div>

              {/* CTA Button */}
              <div className="animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                <a
                  href="/consulting1#s20250308c7f899e620f1e"
                  className="inline-block px-6 py-3 border-2 border-blue-400 text-blue-400 hover:text-white font-medium hover:bg-blue-500 hover:border-blue-500 transition-colors rounded-full"
                  aria-label="업종별 정책자금 한도 상담 신청하기"
                >
                  놓치고 있는 정책자금 바로 알아보기
                </a>
              </div>
            </header>
          </div>

          {/* Right Side - 5 columns */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Mockup Image with slide-up animation */}
            <div className="animate-fadeInUp relative pt-16" style={{ animationDelay: '0.3s' }}>
              <img
                src={FIREBASE_IMAGES.images.mockup}
                alt="정책자금 신청 모바일 화면"
                className="w-full mx-auto transform scale-150"
              />

              {/* Overlay Data - Month Number */}
              <div className="absolute" style={{ top: '43%', left: '35%' }}>
                <span
                  key={`month-${currentIndex}`}
                  className="text-4xl font-bold text-blue-600 animate-fadeIn"
                  style={{ animationDelay: '0.6s' }}
                >
                  {fundingData[currentIndex].month}
                </span>
              </div>

              {/* Overlay Data - Amount in White Box */}
              <div className="absolute" style={{ top: '53%', left: '30%', width: '40%' }}>
                <p
                  key={`amount-${currentIndex}`}
                  className="text-center text-2xl font-bold text-blue-500 animate-fadeIn whitespace-nowrap"
                  style={{ animationDelay: '0.6s' }}
                >
                  {fundingData[currentIndex].amount}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;