function HookSection() {
  return(
    <section
      className="relative w-full px-4 py-24 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: 'url(https://cdn.imweb.me/thumbnail/20250308/968de10275fec.png)',
        backgroundPosition: '50% 50%'
      }}
    >
      {/* 다크 오버레이 */}
      <div className="absolute inset-0 bg-black/15"></div>

      {/* 콘텐츠 */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* 메인 타이틀 */}
        <div className="mb-8 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center tracking-tight mb-4">
            <span className="text-white">기업의 성장은 </span>
            <span className="text-orange-500">선택이 아닌 필수</span>
            <span className="text-white"> 입니다.</span>
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center tracking-tight">
            작은 실천으로 큰 성장을 만들어 보세요.
          </h2>
        </div>

        {/* 서브 텍스트 */}
        <div className="mb-8 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <p className="text-lg md:text-xl text-white leading-relaxed mb-2">
            기업 운영의 숨은 문제를 찾고 해결하는 건 지금이 가장 좋은 타이밍 입니다.
          </p>
          <p className="text-lg md:text-xl text-white leading-relaxed">
            리스크는 방어하고 성과는 올릴 수 있는 구체적인 비즈니스 솔루션을 제공 받아보세요.
          </p>
        </div>

        {/* 버튼 */}
        <div className="animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <a
            href="/contact"
            className="inline-block px-8 py-4 border-2 border-orange-500 text-orange-500 hover:text-white text-lg font-semibold hover:bg-orange-500 transition-colors duration-300 rounded-full"
          >
            컨설팅 신청하기
          </a>
        </div>
      </div>
    </section>
  )
}

export default HookSection;