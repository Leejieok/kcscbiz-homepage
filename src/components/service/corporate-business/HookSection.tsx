function HookSection() {
  return (
    <section
      className="relative w-full px-4 py-12 lg:py-24 bg-cover bg-center bg-fixed"
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
          <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-center tracking-tight mb-4">
            <span className="text-white">지금의 선택이<br className="md:hidden" /> 10년 후 </span>
            <span className="text-orange-500">기업의 가치</span>
            <span className="text-white">를 <br className="md:hidden" />결정합니다.</span>
          </h2>
          <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-white text-center tracking-tight">
            복잡한 경영 과제,<br className="md:hidden" /> 더 이상 혼자 고민하지 마세요.
          </h2>
        </div>

        {/* 서브 텍스트 */}
        <div className="mb-8 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <p className="text-lg md:text-xl text-white leading-relaxed mb-2">
            불필요한 세금 누수를 막고, 잠재된 리스크를 사전에 차단하는 것.
          </p>
          <p className="text-lg md:text-xl text-white leading-relaxed">
            지금이 바로 기업의 체질을 바꾸고 <strong>성공적인 도약(Scale-up)</strong>을 준비할 골든타임입니다.
          </p>
        </div>

        {/* 버튼 */}
        <div className="animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <a
            href="/contact"
            className="inline-block px-8 py-4 border-2 border-orange-500 text-orange-500 hover:text-white text-lg font-semibold hover:bg-orange-500 transition-colors duration-300 rounded-full"
          >
            무료 기업 진단 받기
          </a>
        </div>
      </div>
    </section>
  )
}

export default HookSection;