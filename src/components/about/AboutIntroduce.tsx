function AboutIntroduce() {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* 메인 타이틀 */}
        <div className="mb-8 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-blue-600">대표님들의 든든한 동반자,</span>
            <br />
            <span className="text-gray-900">한국중소기업지원센터 입니다.</span>
          </h2>
        </div>

        {/* 이미지 */}
        <div className="mb-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <div className="relative w-full overflow-hidden rounded-lg" style={{ height: '476px' }}>
            <img
              src="https://cdn.imweb.me/thumbnail/20250307/6c08502dcceb2.png"
              alt="한국중소기업지원센터"
              className="w-full h-auto object-cover"
              style={{
                imageRendering: '-webkit-optimize-contrast',
                display: 'block'
              }}
              loading="lazy"
            />
          </div>
        </div>

        {/* 미션 텍스트 */}
        <div className="mb-6 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl md:text-2xl leading-relaxed mb-4">
            <strong className="text-orange-500">
              COMPANY MISSION : 정보를 몰라 손해보는 기업이 없는 세상을 만든다.
            </strong>
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            한국중소기업비즈니스센터는 중소기업과 소상공인들이 겪는 정책자금, 세금 문제, 인증 취득 등 복잡하고 까다로운 과정을 함께 해결
            하기 위해 설립되었습니다. 대표님이 마주하는 어려움이 곧 우리의 과제이며, 그 해결을 돕는 것이 우리의 사명입니다.
          </p>
        </div>

        {/* 추가 설명 텍스트 1 */}
        <div className="mb-6 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            <strong>대표님의 성공이 곧 우리의 성공입니다.</strong> 저희는 단순한 컨설팅을 넘어, 대표님의 상황을 깊이 이해하고 가장 적합한 솔루션을 제시하며,
            어려운 순간에는 끝까지 곁을 지키는 든든한 조력자가 되겠습니다. 성장의 기회가 찾아올 때, 대표님이 더 높이 도약할 수 있도록 전략적
            이고 실질적인 지원을 아끼지 않겠습니다.
          </p>
        </div>

        {/* 추가 설명 텍스트 2 */}
        <div className="mb-24 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            저희는 수많은 성공 사례와 고객들의 신뢰를 바탕으로, 중소기업의 성장과 발전을 이끄는 데 앞장서고 있습니다. 이제, 혼자 고민하지 마세요. 한국중소기업비즈니스센터가 대표님의 영원한 동반자로 함께하겠습니다.
          </p>
        </div>

        {/* 서명 */}
        <div className="text-right animate-fadeInUp" style={{ animationDelay: '1s' }}>
          <p className="text-2xl md:text-3xl lg:text-4xl text-gray-700 leading-relaxed" style={{ fontFamily: 'InkLiquid, sans-serif' }}>
            한국중소기업지원센터 임직원 일동
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutIntroduce;