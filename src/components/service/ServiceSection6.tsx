function ServiceSection6() {
  const factChecks = [
    {
      id: 1,
      number: '01',
      title: '맞춤형 1:1 컨설팅',
      description: '기업 맞춤형 1:1 컨설팅으로 빠르고 정확한 정책자금 실행을 지원합니다.',
      delay: '0.1s'
    },
    {
      id: 2,
      number: '02',
      title: '전반적 경영 컨설팅',
      description: '정책자금은 물론, 지원사업, 절세, 인사·노무, 신용관리까지 1년간 제공합니다.',
      delay: '0.2s'
    },
    {
      id: 3,
      number: '03',
      title: '원스톱 솔루션',
      description: '창업, 시설, 공장/기계 매입, 수출 바우처, 인증 등 모든 분야를 해결합니다.',
      delay: '0.3s'
    },
    {
      id: 4,
      number: '04',
      title: '지속적 관리',
      description: '최신 정책자금 정보를 매달 업데이트하며, 유선 상담부터 방문까지 지원합니다.',
      delay: '0.4s'
    },
    {
      id: 5,
      number: '05',
      title: '검증된 성공 사례',
      description: '다양한 채널에서 후기와 성공 사례를 확인하세요. 24시간 피드백을 드립니다.',
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