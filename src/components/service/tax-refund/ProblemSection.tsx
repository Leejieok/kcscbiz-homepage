function ProblemSection() {
  return(
    <section className="w-full py-20 px-4 bg-[#f5f7fd] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* 왼쪽 텍스트 영역 (7/12) */}
          <div className="lg:col-span-7">
            <div className="mb-8">
              {/* 메인 타이틀 */}
              <div className="mb-6 animate-fadeInUp">
                <p className="text-3xl md:text-4xl lg:text-5xl mb-4" style={{ fontFamily: 'InkLiquid, sans-serif', lineHeight: '1.5' }}>
                  세금 문제, 정말 다 해결되셨나요?
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  사업자 70%는
                </h2>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-blue-700">세금을 과납하고 있다</span>는
                </h2>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  사실 알고 계셨나요?
                </h2>
              </div>

              {/* 서브 텍스트 */}
              <div className="mb-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                  지난 5년간 과납한 아까운 세금,
                </p>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                  지금 놓치면 국고에 그대로 귀속됩니다.
                </p>
              </div>

              {/* 버튼 */}
              <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                <a
                  href="/contact"
                  className="inline-block px-8 py-4 border-2 border-blue-700 text-blue-700 hover:text-white text-lg font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                  환급 금액 조회하기
                </a>
              </div>
            </div>
          </div>

          {/* 오른쪽 카드 영역 (5/12) */}
          <div className="lg:col-span-5 space-y-4">
            {/* 2021년 카드 */}
            <div
              className="p-6 rounded-lg animate-fadeInUp bg-[#c8c9c9]"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src="https://cdn.imweb.me/upload/S20231213aa2eeb2497234/6b65eb6e8715e.png"
                    alt="check"
                    className="w-5 h-5"
                    loading="lazy"
                  />
                  <h3 className="text-white text-lg md:text-xl font-semibold">2021년 세금 환급</h3>
                </div>
                <p className="text-white text-xl md:text-2xl font-bold">4,320,000원</p>
              </div>
            </div>

            {/* 2022년 카드 */}
            <div
              className="p-6 rounded-lg animate-fadeInUp bg-white"
              style={{ animationDelay: '0.7s' }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src="https://cdn.imweb.me/upload/S20231213aa2eeb2497234/f04ed6efafb58.png"
                    alt="check"
                    className="w-5 h-5"
                    loading="lazy"
                  />
                  <h3 className="text-gray-400 text-lg md:text-xl font-semibold">2022년 세금 환급</h3>
                </div>
                <p className="text-gray-400 text-xl md:text-2xl font-bold">1,960,300원</p>
              </div>
            </div>

            {/* 2023년 카드 */}
            <div
              className="p-6 rounded-lg animate-fadeInUp bg-[#c8c9c9]"
              style={{ animationDelay: '0.9s' }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src="https://cdn.imweb.me/upload/S20231213aa2eeb2497234/6b65eb6e8715e.png"
                    alt="check"
                    className="w-5 h-5"
                    loading="lazy"
                  />
                  <h3 className="text-white text-lg md:text-xl font-semibold">2023년 세금 환급</h3>
                </div>
                <p className="text-white text-xl md:text-2xl font-bold">2,318,040원</p>
              </div>
            </div>

            {/* 올해 예상 금액 카드 */}
            <div
              className="p-6 rounded-lg animate-fadeInUp bg-[#214bab]"
              style={{ animationDelay: '1.1s' }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src="https://cdn.imweb.me/upload/S20231213aa2eeb2497234/c2ad259b28a0a.png"
                    alt="money"
                    className="w-5 h-5"
                    loading="lazy"
                  />
                  <h3 className="text-white text-lg md:text-xl font-semibold">올해 돌려 받을 수 있는 예상 금액</h3>
                </div>
                <p className="text-white text-xl md:text-2xl font-bold">50,000,000원</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSection;