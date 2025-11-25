function BannerSection() {
  return (
    <section
      className="w-full py-[100px] relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://cdn.imweb.me/thumbnail/20250121/35c4b16a75df8.jpg')",
        backgroundPosition: '50% 50%'
      }}
    >
      {/* 배경 오버레이 */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 컨텐츠 */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="lg:text-4xl text-2xl font-bold text-white mb-2">
              자주묻는 질문
            </h1>
            <h2 className="lg:text-lg text-sm text-gray-300 tracking-[5px]">
              FAQ
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerSection;