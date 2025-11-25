import { supportBenefits } from '@/data/supportBenefits';

function SupportIntro() {
  return (
    <section className="w-full px-4 py-8 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* 타이틀 */}
        <div className="lg:mb-12 mb-8 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-center tracking-tight lg:mb-4 mb-2">
            복잡한 과정은 <br className="md:hidden" />저희에게 위임하세요.
          </h2>
          <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-center tracking-tight">
            <span className="text-blue-700">각종 기업 인증</span>으로 <br className="md:hidden" />사업에 날개를 다세요.
          </h2>
        </div>

        {/* 혜택 카드 리스트 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {supportBenefits.map((benefit, index) => {
            // 각 카드마다 다른 채도의 파란색 그라데이션 적용
            const gradientColors = [
              'from-blue-400 to-blue-500',
              'from-blue-500 to-blue-600',
              'from-blue-600 to-blue-700',
              'from-indigo-500 to-indigo-600',
              'from-indigo-600 to-indigo-700'
            ];
            const gradientClass = gradientColors[index % gradientColors.length];

            return (
              <div
                key={index}
                className="group bg-white p-6 lg:p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200 animate-fadeInUp"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-br ${gradientClass} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm lg:text-lg text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">{benefit.highlight}</strong>
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default SupportIntro;