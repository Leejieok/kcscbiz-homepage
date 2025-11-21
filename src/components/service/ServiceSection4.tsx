import FundingCard from '@/components/common/card/FundingCard';
import { fundingData } from '@/data/funding';
import { FIREBASE_IMAGES } from '@/constants/firebaseImages';

function ServiceSection4() {

  return (
    <section className="w-full py-12 lg:py-20 relative min-h-screen" style={{ backgroundColor: '#f5f7fd' }}>
      <main className="relative z-10">
        <div className="px-3 mx-auto" style={{ maxWidth: '1280px' }}>
          {/* Header */}
          <div className="animate-fadeInUp mb-12 font-extrabold" style={{ animationDelay: '0.5s' }}>
            <h2 className="lg:text-5xl text-xl text-center leading-tight">
              귀사의 상황에 알맞는
            </h2>
            <h2 className="lg:text-5xl text-xl text-center leading-tight">
              <span className="text-blue-700">정책자금 전문 컨설턴트</span>가
            </h2>
            <h2 className="lg:text-5xl text-xl text-center leading-tight">
              <span className="text-blue-700">명확한 방향</span>을 제안합니다.
            </h2>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - Info Card */}
            <div
              className="animate-fadeInUp p-8 rounded-3xl bg-cover bg-center h-[600px] flex flex-col justify-end relative overflow-hidden"
              style={{
                backgroundImage: `url(${FIREBASE_IMAGES.images.foodCEO})`,
                animationDelay: '0.5s',
              }}
            >
              {/* Bottom Gradient Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              <div className="relative z-10">
                <p className="text-lg lg:text-2xl text-white mb-2">
                  연매출 <strong>10억</strong> 음식점을 운영하는 <strong>최대표님</strong>
                </p>
                <h3 className="text-lg lg:text-3xl font-semibold text-white">
                  컨설팅 후, 가게는 그대로인데 <br />매출만 수직 상승 중 입니다.
                </h3>
              </div>
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