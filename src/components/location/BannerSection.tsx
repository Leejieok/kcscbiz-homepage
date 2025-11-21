function BannerSection() {
  return (
    <section
      className="w-full py-[100px] relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://cdn.imweb.me/thumbnail/20240513/120452c33ac9a.jpg')",
        backgroundPosition: '50% 50%'
      }}
    >
      {/* 배경 오버레이 */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* 컨텐츠 */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-2">
              고객센터
            </h1>
            <h2 className="text-lg text-gray-300 tracking-[5px]">
              Customer Center
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerSection;