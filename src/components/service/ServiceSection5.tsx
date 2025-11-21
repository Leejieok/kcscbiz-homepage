function ServiceSection5() {
  const steps = [
    {
      id: 1,
      title: '1:1 전문 상담사 배정',
      bgImage: 'https://cdn.imweb.me/thumbnail/20250308/3d40db93c6a06.png',
      delay: '0.5s'
    },
    {
      id: 2,
      title: '정책자금 컨설팅 진행',
      bgImage: 'https://cdn.imweb.me/thumbnail/20250308/0dfce1dc62968.png',
      delay: '0.7s'
    },
    {
      id: 3,
      title: '정책자금 승인 및 대출 실행',
      bgImage: 'https://cdn.imweb.me/thumbnail/20250308/2157286fec7b3.png',
      delay: '0.9s'
    }
  ];

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
            <h2 className="lg:text-5xl text-md text-center mb-1 lg:mb-4">
              정책자금, 전문 컨설턴트와 함께라면
            </h2>
            <h2 className="lg:text-5xl text-md text-center">
              대표님도 <span className="text-blue-700">문제없이 지원 가능</span>합니다!
            </h2>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="animate-fadeInUp rounded-3xl overflow-hidden relative flex items-end justify-start"
              style={{
                animationDelay: step.delay,
                animationDuration: '1s',
                backgroundImage: `url(${step.bgImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                minHeight: '450px',
                padding: '32px',
                wordBreak: 'normal',
                wordWrap: 'break-word'
              }}
            >
              <h6 className="text-3xl text-white font-semibold">
                {step.title}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceSection5;