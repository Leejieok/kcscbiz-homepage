function HookSection() {
  return(
    <section
      className="relative w-full py-24 px-4 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: 'url(https://cdn.imweb.me/thumbnail/20250308/968de10275fec.png)',
        backgroundPosition: '50% 50%'
      }}
    >
      {/* 다크 오버레이 */}
      <div className="absolute inset-0 bg-black/15"></div>

      {/* 콘텐츠 */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* 타이틀 */}
        <div className="mb-8 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-white">대표님도 </span>
            <span className="text-orange-500">숨겨진 환급금의 대상</span>
            <span className="text-white">일 수 있습니다.</span>
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2">
            무료로 간편하게 조회해보세요.
          </h2>
        </div>

        {/* 버튼 */}
        <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <a
            href="/contact"
            className="inline-block px-8 py-4 border-2 border-orange-500 text-orange-500 hover:text-white text-lg font-semibold rounded-full hover:bg-orange-500 transition-colors duration-300"
          >
            아까운 세금 환급 받기
          </a>
        </div>
      </div>
    </section>
  )
}

export default HookSection