import FundingCard from '@/components/common/card/FundingCard';
import { fundingData } from '@/data/funding';

function ServiceSection4() {

  return (
    <section className="w-full py-20 relative min-h-screen" style={{ backgroundColor: '#f5f7fd' }}>
      <main className="relative z-10">
        <div className="px-3 mx-auto" style={{ maxWidth: '1280px' }}>
          {/* Header */}
          <div className="animate-fadeInUp mb-12 font-extrabold" style={{ animationDelay: '0.5s' }}>
            <h2 className="text-5xl text-center leading-tight">
              귀사의 상황에 알맞는
            </h2>
            <h2 className="text-5xl text-center leading-tight">
              <span className="text-blue-700">정책자금 전문 컨설턴트</span>가
            </h2>
            <h2 className="text-5xl text-center leading-tight">
              <span className="text-blue-700">명확한 방향</span>을 제안합니다.
            </h2>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - Info Card */}
            <div
              className="animate-fadeInUp p-8 rounded-3xl bg-cover bg-center h-[600px] flex flex-col justify-end"
              style={{
                backgroundImage: "url('https://cdn.imweb.me/thumbnail/20250308/8ee44263f2961.png')",
                animationDelay: '0.5s',
              }}
            >
              <p className="text-2xl text-white mb-2">
                연매출 2억 음식점을 운영하는 <strong>박대표님</strong>
              </p>
              <h3 className="text-3xl font-semibold text-white">
                1년만에 받을 수 있는 정책자금
              </h3>
            </div>

            {/* Right Side - Funding Cards Grid */}
            <div className="grid grid-cols-1 gap-5 justify-between">
              {fundingData.map((funding) => (
                <FundingCard key={funding.id} funding={funding} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default ServiceSection4;