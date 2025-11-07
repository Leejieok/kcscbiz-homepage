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
    <section className="w-full py-20 relative bg-white">
      <main className="relative z-10">
        <div className="px-3 mx-auto" style={{ maxWidth: '1280px' }}>
          {/* Header */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
            <h2 className="text-5xl text-center leading-tight mb-2">
              이런 대표님들에겐
            </h2>
            <h2 className="text-5xl text-center leading-tight">
              <span className="text-blue-700">정책자금 컨설팅</span>이 꼭 필요합니다!
            </h2>
          </div>

          {/* Spacing */}
          <div className="h-12"></div>

          {/* Grid of Reasons */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {reasons.map((reason) => (
              <div
                key={reason.id}
                className="animate-fadeInUp p-6 rounded-lg"
                style={{
                  backgroundColor: '#f5f7fd',
                  animationDelay: '0.5s',
                }}
              >
                <p className="text-xl flex items-start">
                  <img
                    src={iconUrl}
                    alt=""
                    className="w-5 h-5 mr-2 mt-1"
                    style={{ padding: 0 }}
                    aria-hidden="true"
                  />
                  <span>
                    {reason.id === 4 ? (
                      <>
                        {reason.text}
                        <strong>{reason.boldPart}</strong>
                        {reason.text2}
                      </>
                    ) : (
                      <>
                        <strong>{reason.text}</strong>
                        {reason.text2}
                      </>
                    )}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}

export default ServiceSection3;