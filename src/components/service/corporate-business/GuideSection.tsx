import { corporateBenefits } from '@/data/corporateBenefits';

function GuideSection() {

  return (
    <section className="w-full px-4 py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* 타이틀 */}
        <div className="mb-12 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-6 tracking-tight">
            법인사업자만 누릴 수 있는 혜택, 어디까지 알고 계신가요?
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 tracking-tight">
            한국중소기업지원센터가
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center tracking-tight pb-8">
            <span className="text-blue-700">법인 사업자 맞춤 혜택 가이드</span>를 도와드리겠습니다.
          </h2>
        </div>

        {/* 혜택 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {corporateBenefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#f5f7fd] p-6 rounded-lg animate-fadeInUp"
              style={{ animationDelay: '0.5s' }}
            >
              <h3 className="flex items-start gap-2 text-xl md:text-2xl font-semibold text-blue-700 mb-4">
                <img
                  src="https://cdn.imweb.me/upload/S20231213aa2eeb2497234/31d4e85ad386e.png"
                  alt="check"
                  className="w-[22px] h-[22px] mt-1 flex-shrink-0"
                />
                {benefit.title}
              </h3>
              <p className="text-base md:text-lg text-[#544d4d] leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GuideSection;