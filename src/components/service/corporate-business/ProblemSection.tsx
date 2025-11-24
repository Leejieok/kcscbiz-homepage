function ProblemSection() {
  return (
    <section className="relative w-full px-4 lg:py-28 py-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 overflow-hidden flex items-center">
      {/* Animated wave-like background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-violet-200 to-fuchsia-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* 왼쪽 텍스트 영역 (7/12) */}
          <div className="lg:col-span-7">
            <div className="mb-4 lg:mb-8">
              {/* 여백 */}
              <div className="h-[30px]"></div>

              {/* 메인 타이틀 */}
              <div className="lg:mb-6 animate-fadeInUp">
                <p className="text-sm md:text-4xl mb-2 lg:mb-4">
                  지금 대표님의 회사는 얼마나 안정적인가요?
                </p>
                <h2 className="text-xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  혹시 확신이 서지 않는다면,
                </h2>
                <h2 className="text-xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-blue-700">리스크를 대비해야 할 순간</span>
                </h2>
                <h2 className="text-xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  일지 모릅니다.
                </h2>
              </div>

              {/* 여백 */}
              <div className="h-[30px]"></div>

              {/* 버튼 */}
              <div className="flex justify-center lg:justify-start animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5"
                >
                  전문가에게 문의하기
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* 오른쪽 카드 영역 (5/12) */}
          <div className="lg:col-span-5">
            <div className="space-y-4 lg:space-y-6 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
              {/* 카드 1 */}
              <div className="group bg-white p-6 lg:p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm lg:text-lg text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">대표님 회사의 주식 가치가</strong> 앞으로 더 성장할지, 혹은 하락 위험이 있는지 생각해보신 적 있으신가요?
                  </p>
                </div>
              </div>

              {/* 카드 2 */}
              <div className="group bg-gradient-to-br from-blue-500 to-purple-600 p-6 lg:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-white/20 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm lg:text-lg text-white leading-relaxed">
                    그리고 예상치 못한 상황이 찾아왔을 때, 충분히 <strong>대응할 준비가 되어 있으신가요?</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSection;