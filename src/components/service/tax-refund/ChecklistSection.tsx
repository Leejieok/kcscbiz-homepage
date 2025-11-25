function ChecklistSection() {
  return (
    <section className="w-full py-8 lg:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* 타이틀 */}
        <div className="mb-4 lg:mb-12 animate-fadeInUp">
          <h2 className="text-md md:text-4xl lg:text-5xl font-bold text-center">
            혹시 <span className="text-blue-700">아래의 경우</span>에 해당되시나요?
          </h2>
        </div>

        {/* 체크리스트 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {/* 항목 1 */}
          <div className="group p-6 lg:p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm lg:text-xl text-gray-700 leading-relaxed">
                지난 5년 동안 <strong className="text-gray-900">받아보신 환급금이</strong>전혀 없으셨나요?
              </p>
            </div>
          </div>

          {/* 항목 2 */}
          <div className="group p-6 lg:p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm lg:text-xl text-gray-700 leading-relaxed">
                <strong className="text-gray-900">직원을 두고</strong>계신데도 받을 수 있는 혜택을 놓치고 계신 건 아닐까요?
              </p>
            </div>
          </div>

          {/* 항목 3 */}
          <div className="group p-6 lg:p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm lg:text-xl text-gray-700 leading-relaxed">
                <strong className="text-gray-900">그동안 세금은 그냥 내는 비용</strong>이라고만 여기지 않으셨나요?
              </p>
            </div>
          </div>

          {/* 항목 4 */}
          <div className="group p-6 lg:p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm lg:text-xl text-gray-700 leading-relaxed">
                <strong className="text-gray-900">사실, 세무사가 먼저 말해주지 않는 환급 제도도</strong> 있다는 점 알고 계셨나요?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChecklistSection;