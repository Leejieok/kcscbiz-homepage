function AboutSection() {
  return (
    <div className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
         style={{
           backgroundImage: 'url(https://cdn.imweb.me/thumbnail/20250307/48c451b392c64.png)',
           backgroundColor: '#dddddd'
         }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-20">
        {/* Main Title */}
        <div className="text-center mb-8">
          <span 
            className="block text-3xl text-white md:text-4xl lg:text-5xl mb-6"
            style={{ fontFamily: 'InkLiquid, sans-serif' }}
          >
            정책자금 컨설팅, 믿을 수 있는 전문가
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 block">한국중소기업지원센터와</h1>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 block">함께라면 가능합니다.</h2>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-12">
          <p className="text-xl md:text-2xl lg:text-3xl text-white">
            <span className="font-semibold">대표님의 도약</span>
            <span className="text-lg md:text-xl lg:text-2xl">을 기대할 수 있도록 힘껏 밀어드리겠습니다.</span>
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {/* Card 1 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center">
            <div className="mb-4">
              <img
                src="https://cdn.imweb.me/upload/S20231213aa2eeb2497234/b37be23b8a3fd.png"
                alt="check icon"
                className="w-9 h-9 mx-auto"
              />
            </div>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-900">
              <strong>매 달 50억원 이상</strong> 정책자금 조달 성공
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center">
            <div className="mb-4">
              <img
                src="https://cdn.imweb.me/upload/S20231213aa2eeb2497234/b37be23b8a3fd.png"
                alt="check icon"
                className="w-9 h-9 mx-auto"
              />
            </div>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-900">
              <strong>연 간 1,000곳 이상 기업</strong>과 함께 한 신뢰
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection;