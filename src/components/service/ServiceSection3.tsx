function ServiceSection3() {
  const reasons = [
    { id: 1, text: '거래처에게 결제', bold: true, text2: '를 못 받고 있어요.' },
    { id: 2, text: '7% 이상의 높은 금리', bold: true, text2: '를 대환하고 싶어요.' },
    { id: 3, text: '정책자금 신청 후 부결', bold: true, text2: '을 받았어요.' },
    { id: 4, text: '원자재, 식자재를 ', bold: false, boldPart: '대량 매입', text2: '하고 싶어요.' },
    { id: 5, text: '자금 사용 계획', bold: true, text2: '을 명확히 안내 받고 싶어요.' },
    { id: 6, text: '빠른 정책 자금 조달', bold: true, text2: '이 필요해요.' },
  ];

  const iconUrl = 'https://cdn.imweb.me/upload/S20231213aa2eeb2497234/31d4e85ad386e.png';

  return (
    <section className="w-full relative bg-white py-20 md:py-32">
      <main className="relative z-10">
        <div className="px-4 mx-auto" style={{ maxWidth: '1280px' }}>

          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-4 md:mb-6">
              이런 대표님들에겐
            </h2>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-blue-600">정책자금 컨설팅</span>이 <br className="md:hidden" />
              꼭 필요합니다!
            </h2>
          </div>

          {/* Desktop Grid Layout (lg 이상) */}
          <div className="hidden lg:grid grid-cols-2 gap-6 max-w-5xl mx-auto">
            {reasons.map((reason) => (
              <div
                key={reason.id}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <img
                      src={iconUrl}
                      alt=""
                      className="w-7 h-7"
                      aria-hidden="true"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-xl leading-relaxed">
                      {reason.id === 4 ? (
                        <>
                          {reason.text}
                          <strong className="text-blue-600 font-bold">{reason.boldPart}</strong>
                          {reason.text2}
                        </>
                      ) : (
                        <>
                          <strong className="text-blue-600 font-bold">{reason.text}</strong>
                          {reason.text2}
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tablet Layout (md ~ lg) */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-5 max-w-4xl mx-auto">
            {reasons.map((reason) => (
              <div
                key={reason.id}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <img
                      src={iconUrl}
                      alt=""
                      className="w-6 h-6"
                      aria-hidden="true"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-base leading-relaxed">
                      {reason.id === 4 ? (
                        <>
                          {reason.text}
                          <strong className="text-blue-600 font-bold">{reason.boldPart}</strong>
                          {reason.text2}
                        </>
                      ) : (
                        <>
                          <strong className="text-blue-600 font-bold">{reason.text}</strong>
                          {reason.text2}
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Layout (md 미만) */}
          <div className="md:hidden space-y-4 max-w-md mx-auto">
            {reasons.map((reason) => (
              <div
                key={reason.id}
                className="bg-white rounded-xl p-5 shadow-md border border-gray-100"
              >
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0 w-7 h-7 bg-blue-50 rounded-full flex items-center justify-center">
                    <img
                      src={iconUrl}
                      alt=""
                      className="w-4 h-4"
                      aria-hidden="true"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 pt-0.5">
                    <p className="text-sm leading-relaxed">
                      {reason.id === 4 ? (
                        <>
                          {reason.text}
                          <strong className="text-blue-600 font-bold">{reason.boldPart}</strong>
                          {reason.text2}
                        </>
                      ) : (
                        <>
                          <strong className="text-blue-600 font-bold">{reason.text}</strong>
                          {reason.text2}
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </section>
  );
}

export default ServiceSection3;