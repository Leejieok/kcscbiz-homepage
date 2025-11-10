function ChecklistSection() {
  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* 타이틀 */}
        <div className="mb-12 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            혹시 <span className="text-blue-700">아래의 경우</span>에 해당되시나요?
          </h2>
        </div>

        {/* 체크리스트 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 항목 1 */}
          <div className="p-6 bg-[#f5f7fd] rounded-lg animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <p className="flex items-start gap-3 text-lg md:text-xl lg:text-2xl">
              <img
                src="https://cdn.imweb.me/upload/S20231213aa2eeb2497234/31d4e85ad386e.png"
                alt="check"
                className="w-5 h-5 mt-1 flex-shrink-0"
                loading="lazy"
              />
              <span>
                지난 5년간 <strong>돌려받은 세금</strong>이 없으신가요?
              </span>
            </p>
          </div>

          {/* 항목 2 */}
          <div className="p-6 bg-[#f5f7fd] rounded-lg animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <p className="flex items-start gap-3 text-lg md:text-xl lg:text-2xl">
              <img
                src="https://cdn.imweb.me/upload/S20231213aa2eeb2497234/31d4e85ad386e.png"
                alt="check"
                className="w-5 h-5 mt-1 flex-shrink-0"
                loading="lazy"
              />
              <span>
                <strong>직원을 고용</strong>했지만 절세 혜택을 모르시나요?
              </span>
            </p>
          </div>

          {/* 항목 3 */}
          <div className="p-6 bg-[#f5f7fd] rounded-lg animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <p className="flex items-start gap-3 text-lg md:text-xl lg:text-2xl">
              <img
                src="https://cdn.imweb.me/upload/S20231213aa2eeb2497234/31d4e85ad386e.png"
                alt="check"
                className="w-5 h-5 mt-1 flex-shrink-0"
                loading="lazy"
              />
              <span>
                <strong>세금은 당연한 것</strong>이라고만 생각하셨나요?
              </span>
            </p>
          </div>

          {/* 항목 4 */}
          <div className="p-6 bg-[#f5f7fd] rounded-lg animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
            <p className="flex items-start gap-3 text-lg md:text-xl lg:text-2xl">
              <img
                src="https://cdn.imweb.me/upload/S20231213aa2eeb2497234/31d4e85ad386e.png"
                alt="check"
                className="w-5 h-5 mt-1 flex-shrink-0"
                loading="lazy"
              />
              <span>
                <strong>세무사가 말해주지 않는 세금 환급,</strong> 알고 계셨나요?
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChecklistSection;