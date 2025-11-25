function ServiceSection6() {
  const factChecks = [
    {
      id: 1,
      number: '01',
      // 변경: 단순 컨설팅 -> '분석'과 '전략' 강조
      title: '1:1 초정밀 기업 진단',
      description: '공장형 컨설팅은 거절됩니다. 기업의 재무 상태를 분석하여 승인 가능한 자금만 콕 집어냅니다.',
      delay: '0.1s'
    },
    {
      id: 2,
      number: '02',
      // 변경: 경영 컨설팅 -> '외부 임원' 역할 강조 (가치 상승)
      title: '1년간 무상 경영 케어',
      description: '자금은 시작일 뿐입니다. 세무, 노무, 신용 관리까지 든든한 외부 경영기획팀이 되어드립니다.',
      delay: '0.2s'
    },
    {
      id: 3,
      number: '03',
      // 변경: 나열식 -> '고민 해결' 강조
      title: '원스톱 All-in-One',
      description: '여기저기 발품 팔지 마세요. 창업부터 공장 매입, 수출 인증까지 한 곳에서 해결해 드립니다.',
      delay: '0.3s'
    },
    {
      id: 4,
      number: '04',
      // 변경: 지속적 관리 -> '정보력/속도' 강조 (놓치면 손해라는 느낌)
      title: '실시간 정책 알림',
      description: '예산 소진 1초 전까지 챙깁니다. 매달 바뀌는 정책 정보를 가장 먼저 대표님 책상에 올립니다.',
      delay: '0.4s'
    },
    {
      id: 5,
      number: '05',
      // 변경: 성공 사례 -> '데이터/증명' 강조 (신뢰도)
      title: '데이터가 증명하는 실력',
      description: '말뿐인 홍보는 하지 않습니다. 홈페이지에 공개된 실제 승인 사례와 후기로 직접 판단해 주세요.',
      delay: '0.5s'
    }
  ];

  const iconUrl = 'https://cdn.imweb.me/upload/S20231213aa2eeb2497234/31d4e85ad386e.png';

  return (
    <section className="w-full py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-16 animate-fadeInUp">
          <h2 className="text-xl md:text-5xl font-extrabold text-gray-900 lg:mb-4 leading-tight">
            지금 바로 <span className="text-blue-600">5분만 비교</span>해보세요!
          </h2>
          <p className="text-md md:text-2xl text-gray-600 font-medium">
            왜 <span className="text-blue-600 font-bold">우리가 최고인지</span> 알게 될 것입니다.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {factChecks.map((fact) => (
            <div
              key={fact.id}
              className="group bg-white border border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 animate-fadeInUp flex flex-col"
              style={{ animationDelay: fact.delay }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <img
                    src={iconUrl}
                    alt="Check"
                    className="w-6 h-6 object-contain"
                    aria-hidden="true"
                  />
                  <span className="text-blue-600 font-bold text-lg tracking-wide">
                    FACT {fact.number}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                {fact.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-md break-keep">
                {fact.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceSection6;