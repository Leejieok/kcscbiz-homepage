function HeroHmm() {
  return (
    <section
      className="relative py-[100px] bg-black/60 hidden md:block overflow-hidden"
      id="s2025030717fce04b66c7b"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('https://cdn.imweb.me/thumbnail/20250307/c749ead3aeac9.png')",
          backgroundPosition: '50% 50%'
        }}
      >
        <img
          className="hidden"
          src="https://cdn.imweb.me/thumbnail/20250307/c749ead3aeac9.png"
          alt="mobile background"
          loading="lazy"
        />
      </div>

      {/* Background Color Overlay */}
      <div
        className="absolute inset-0 bg-black/60"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
      />

      {/* Content */}
      <main className="relative z-10">
        <div className="container mx-auto">
          <div className="animate-fadeInUp" style={{ animationDuration: '1s', animationDelay: '0.5s' }}>
            <div className="text-center space-y-2">
              <h6 className="text-[48px] font-semibold text-[#FF7800]">
                성공을 돕는 정책자금 컨설팅,
              </h6>
              <h6 className="text-[48px] font-semibold text-white">
                한국중소기업지원센터와
              </h6>
              <h6 className="text-[48px] font-semibold text-white">
                함께라면 가능합니다!
              </h6>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default HeroHmm;