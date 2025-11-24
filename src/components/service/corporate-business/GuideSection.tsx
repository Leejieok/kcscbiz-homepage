import { corporateBenefits } from '@/data/corporateBenefits';

function GuideSection() {

  return (
    <section className="w-full px-4 pt-12 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* 타이틀 */}
        <div className="mb-12 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-sm md:text-3xl lg:text-4xl text-center mb-2 lg:mb-6 tracking-tight">
            법인사업자가 받을 수 있는 혜택, <br className="md:hidden" />얼마나 알고 계신가요?
          </h2>
          <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-center mb-2 lg:mb-4 tracking-tight">
            한국중소기업지원센터가
          </h2>
          <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-center tracking-tight lg:pb-8">
            <span className="text-blue-700">법인 사업자 전용 혜택 안내</span>를 <br className="md:hidden" />도와드립니다.
          </h2>
        </div>

        {/* 혜택 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {corporateBenefits.map((benefit, index) => {
            // 각 카드마다 다른 그라데이션 색상 배열
            const gradientColors = [
              'from-blue-500 to-blue-600',
              'from-green-500 to-green-600',
              'from-purple-500 to-purple-600',
              'from-orange-500 to-orange-600',
              'from-pink-500 to-pink-600',
              'from-indigo-500 to-indigo-600',
              'from-teal-500 to-teal-600',
              'from-red-500 to-red-600'
            ];
            const gradientClass = gradientColors[index % gradientColors.length];

            return (
              <div
                key={index}
                className="group bg-white p-6 lg:p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200 animate-fadeInUp"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="items-start space-y-4">
                  <div className={`flex-shrink-0 w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-br ${gradientClass} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3 group-hover:text-blue-700 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default GuideSection;