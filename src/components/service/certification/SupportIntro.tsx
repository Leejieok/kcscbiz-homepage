import { supportBenefits } from '@/data/supportBenefits';

function SupportIntro() {
  return(
    <section className="w-full px-4 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* 타이틀 */}
        <div className="mb-12 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center tracking-tight mb-4">
            복잡한 과정은 저희에게 위임하세요.
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center tracking-tight">
            <span className="text-blue-700">각종 기업 인증</span>으로 사업에 날개를 다세요.
          </h2>
        </div>

        {/* 혜택 카드 리스트 */}
        <div className="space-y-4">
          {supportBenefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#f5f7fd] p-6 rounded-lg animate-fadeInUp"
              style={{ animationDelay: '0.5s' }}
            >
              <p className="flex items-start gap-2 text-lg md:text-xl lg:text-2xl">
                <img
                  src="https://cdn.imweb.me/upload/S20231213aa2eeb2497234/31d4e85ad386e.png"
                  alt="check"
                  className="w-[22px] h-[22px] mt-1 flex-shrink-0"
                />
                <span>
                  <strong>{benefit.highlight}</strong>
                  {benefit.description}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SupportIntro;