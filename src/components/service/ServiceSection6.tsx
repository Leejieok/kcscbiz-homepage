function ServiceSection6() {
  const factChecks = [
    {
      id: 1,
      number: '01',
      description: '기업 맞춤형 1:1 컨설팅으로 빠르고 정확한 정책자금 실행을 지원합니다.',
      delay: '0.5s'
    },
    {
      id: 2,
      number: '02',
      description: '정책자금은 물론, 지원사업 안내, 절세 전략, 인사·노무, 신용관리까지 전반적인 경영 컨설팅을 1년간 제공합니다.',
      delay: '0.7s'
    },
    {
      id: 3,
      number: '03',
      description: '창업자금, 시설자금, 공장매입, 기계 매입, 수출 바우처, 인증 취득 등 모든 분야를 원스톱 컨설팅으로 해결합니다.',
      delay: '0.9s'
    },
    {
      id: 4,
      number: '04',
      description: '최신 지역별 정책자금 정보를 매달 업데이트하며, 유선 상담부터 사업장 방문까지 세심하게 지원합니다.',
      delay: '1.1s'
    },
    {
      id: 5,
      number: '05',
      description: '홈페이지, 블로그, 각종 채널에서 후기와 성공 사례 및 영상을 확인하실 수 있으며, 카카오톡을 통해 24시간 피드백을 드립니다.',
      delay: '1.3s'
    }
  ];

  const iconUrl = 'https://cdn.imweb.me/upload/S20231213aa2eeb2497234/31d4e85ad386e.png';

  return (
    <section
      className="w-full relative"
      style={{
        paddingTop: '80px',
        paddingBottom: '80px',
        backgroundColor: '#fff'
      }}
    >
      <div className="px-3 mx-auto w-full" style={{ maxWidth: '1280px' }}>
        {/* Header */}
        <div className="mb-12">
          <div className="animate-fadeInUp font-extrabold" style={{ animationDelay: '0.5s' }}>
            <h2 className="text-5xl mb-2">
              지금 바로 5분만 비교해보세요!
            </h2>
            <h2 className="text-5xl">
              왜 <span className="text-blue-700">우리가 최고인지</span> 알게 될겁니다.
            </h2>
          </div>
        </div>

        {/* Fact Checks */}
        <div className="space-y-4">
          {factChecks.map((fact) => (
            <div
              key={fact.id}
              className="animate-fadeInUp rounded-lg p-8"
              style={{
                animationDelay: fact.delay,
                animationDuration: '1s',
                backgroundColor: '#f5f7fd'
              }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={iconUrl}
                  alt=""
                  className="mr-2"
                  style={{ width: '22px' }}
                  aria-hidden="true"
                />
                <h6 className="text-2xl font-semibold" style={{ color: '#214BAB' }}>
                  Fact Check {fact.number}
                </h6>
              </div>
              <p
                className="text-lg"
                style={{
                  color: '#544d4d',
                  lineHeight: '2'
                }}
              >
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