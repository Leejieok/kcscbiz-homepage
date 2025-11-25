import { Link } from 'react-router-dom';

function ProblemSection() {
  return (
    <section className="relative w-full py-20 px-4 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Animated wave-like background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-violet-200 to-fuchsia-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* 왼쪽 텍스트 영역 (7/12) */}
          <div className="lg:col-span-7">
            <div className="mb-8">
              {/* 배지 */}
              <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 font-semibold rounded-full text-sm mb-6 animate-fadeInUp">
                Tax Refund
              </div>

              {/* 메인 타이틀 */}
              <div className="mb-4 lg:mb-8 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                <p className="text-sm md:text-2xl text-gray-600 lg:mb-4">
                  세금 문제, 정말 잘 해결되고 계신가요?
                </p>
                <h2 className="text-xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 lg:mb-2">
                  사업자분들 중 70%가
                </h2>
                <h2 className="text-xl md:text-5xl lg:text-6xl font-bold leading-tight lg:mb-2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">세금을 더 내고 계셨다는 사실,</span>
                </h2>
                <h2 className="text-xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                  알고 계셨나요?
                </h2>
              </div>

              {/* 서브 텍스트 */}
              <div className="mb-10 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                <p className="text-md md:text-xl text-gray-600 leading-relaxed lg:mb-2">
                  지난 5년 동안 과하게 낸 세금은
                </p>
                <p className="text-md md:text-xl text-gray-600 leading-relaxed">
                  지금 확인하지 않으면 국고로 그대로 넘어갈 수 있어요.
                </p>
              </div>

              {/* 버튼 */}
              <div className="flex justify-center lg:justify-start animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5"
                >
                  환급 금액 조회하기
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* 오른쪽 카드 영역 (5/12) */}
          <div className="lg:col-span-5 space-y-4">
            {/* 2021년 카드 */}
            <div
              className="group p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 animate-fadeInUp"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-5 lg:w-10 h-5 lg:h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-gray-700 text-lg font-semibold">2021년 세금 환급</h3>
                </div>
                <p className="text-gray-900 text-lg font-bold ml-8 md:ml-0">4,320,000원</p>
              </div>
            </div>

            {/* 2022년 카드 */}
            <div
              className="group p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 animate-fadeInUp"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-5 lg:w-10 h-5 lg:h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-gray-400 text-lg font-semibold">2022년 세금 환급</h3>
                </div>
                <p className="text-gray-400 text-lg font-bold ml-8 md:ml-0">1,960,300원</p>
              </div>
            </div>

            {/* 2023년 카드 */}
            <div
              className="group p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 animate-fadeInUp"
              style={{ animationDelay: '0.6s' }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-5 lg:w-10 h-5 lg:h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-gray-700 text-lg font-semibold">2023년 세금 환급</h3>
                </div>
                <p className="text-gray-900 text-lg font-bold ml-8 md:ml-0">2,318,040원</p>
              </div>
            </div>

            {/* 올해 예상 금액 카드 - 강조 */}
            <div
              className="group p-6 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: '0.7s' }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-5 lg:w-10 h-5 lg:h-10 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-white text-lg font-semibold">올해 돌려받을 예상 금액</h3>
                </div>
                <p className="text-white text-xl md:text-2xl font-bold ml-8 md:ml-0">50,000,000원</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSection;