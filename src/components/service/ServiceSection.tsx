import FundingCard, { type FundingCardData } from '../common/card/FundingCard';

function ServiceSection() {
  const fundingData: FundingCardData[] = [
    {
      id: 1,
      title: '1월 정책자금 신청',
      amount: '1,000,000,000원',
      delay: '0.5s'
    },
    {
      id: 2,
      title: '2월 정책자금 신청',
      amount: '70,000,000원',
      delay: '0.7s'
    },
    {
      id: 3,
      title: '3월 정책자금 신청',
      amount: '50,000,000원',
      delay: '0.9s'
    },
    {
      id: 4,
      title: '4월 정책자금 신청',
      amount: '30,000,000원',
      delay: '1.1s'
    },
  ];

  return (
    <section
      className="w-full px-4 py-28 relative flex items-center bg-[#2b2d4e]"
      aria-labelledby="policy-funding-heading"
    >
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
                  className="text-5xl tracking-tight text-white"
                  style={{ fontFamily: 'InkLiquid, sans-serif' }}
                >
                  아직도 대표님 돈으로 사업하시나요?
                </h2>
                <h3 className="text-6xl font-bold text-blue-300 tracking-tight">
                  업종별 지원 가능한
                </h3>
                <h3 className="text-6xl font-bold text-blue-300 tracking-tight">
                  정책자금 한도,
                </h3>
                <h3 className="text-6xl font-bold tracking-tight text-white">
                  궁금하시지 않으신가요?
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
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-center">
            {fundingData.map((item) => (
              <FundingCard key={item.id} funding={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;