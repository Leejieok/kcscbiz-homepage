function CertHelpSection() {
  const concerns = [
    "우리 회사는 어떤 인증이 유리한 지 잘 모르겠어요.",
    "이노비즈와 메인비즈, 둘 다 받아야 하나요? 어떻게 다른가요?",
    "이 많은 걸 어떻게 다 외워요? 어떻게 하죠? 알아봐도 모르겠어요."
  ];

  return (
    <section className="w-full px-4 py-8 md:py-28 bg-[#f5f7fd]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* 왼쪽 고민 카드 영역 (5/12) */}
          <div className="lg:col-span-5">
            <div className="space-y-4 lg:space-y-6 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
              {concerns.map((concern, index) => {
                // 각 카드마다 다른 채도의 파란색 그라데이션 아이콘 적용
                const gradientColors = [
                  'from-blue-400 to-blue-500',
                  'from-blue-500 to-blue-600',
                  'from-indigo-500 to-indigo-600'
                ];
                const gradientClass = gradientColors[index % gradientColors.length];

                return (
                  <div
                    key={index}
                    className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 flex items-start gap-4"
                  >
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br ${gradientClass} flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed font-medium group-hover:text-gray-900 transition-colors duration-300 pt-1">
                      {concern}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 오른쪽 텍스트 영역 (7/12) */}
          <div className="lg:col-span-7 lg:pl-8 text-center md:text-left">
            {/* 메인 타이틀 */}
            <div className="mb-6 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold leading-tight lg:mb-4">
                혹시 막막하다고
              </h2>
              <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-blue-700">생각 하고 계신가요?</span>
              </h2>
            </div>

            {/* 서브 텍스트 */}
            <div className="animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
              <p className="text-sm md:text-xl text-[#544d4d] leading-relaxed mb-2">
                복잡하고 까다로운 인증 과정, <br className="md:hidden" />더 이상 주저하지 마세요.
              </p>
              <p className="text-sm md:text-xl text-[#544d4d] leading-relaxed">
                전문가와 함께라면 모든 과정을 <br className="md:hidden" />빠르고 간단하게 해결해드립니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CertHelpSection;