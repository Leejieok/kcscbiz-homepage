function ServiceSection2() {
  return (
    <section
      className="w-full relative py-[100px] overflow-hidden"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('https://cdn.imweb.me/thumbnail/20250308/f915cd0101195.png')",
          backgroundPosition: '50% 50%',
        }}
      >
        <img
          className="hidden"
          src="https://cdn.imweb.me/thumbnail/20250308/f915cd0101195.png"
          alt="mobile background"
          loading="lazy"
        />
      </div>

      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        }}
      />

      {/* Content */}
      <main className="relative z-10">
        <div className="px-3 mx-auto" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Side - 5 columns */}
          <div className="lg:col-span-5">
            <div className="animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-5xl font-bold text-white text-left leading-tight">
                "저는 <span style={{ color: '#ff7800' }}>담보</span>가 없는데
              </h2>
              <h2 className="text-5xl font-bold text-white text-left leading-tight">
                가능한가요...?"
              </h2>
            </div>
          </div>

          {/* Right Side - 7 columns */}
          <div className="lg:col-span-7">
            <div className="animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
              <p className="text-xl text-white leading-loose" style={{ lineHeight: '2.2' }}>
                <strong>네 가능합니다!</strong> 정부 정책자금이란 담보가 없거나 신용점수가 좋지 않은 중소기업, 소상공인 대표님들을 위해 정부가 직접 나서서 업종별 분야별 자금을 지원해주는 제도입니다.
              </p>
            </div>
          </div>
        </div>
        </div>
      </main>
    </section>
  );
}

export default ServiceSection2;