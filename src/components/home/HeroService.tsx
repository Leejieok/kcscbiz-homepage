function HeroService() {
  const worries = [
    { id: 1, text: '계약금을 줬는데', bold: '돈만 받고 사라질까봐', end: '너무 걱정 돼요...' },
    { id: 2, text: '', bold: '돈과 시간만 낭비', end: '하게 되는 건 아닐지 너무 불안해요...' },
    { id: 3, text: '이런 컨설팅 회사가 많아서', bold: '어디가 정답인지', end: '모르겠어요..' },
  ];

  return (
    <section className="w-full py-[120px] bg-brand-lightBg relative">
      <div
        className="px-3 mx-auto"
        style={{
          maxWidth: '1280px'
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          {/* Left Side - Speech Bubbles */}
          <div className="lg:col-span-5 space-y-5">
            {worries.map((worry, index) => (
              <div
                key={worry.id}
                className={`
                  ${index === 1 ? 'bg-blue-800' : 'bg-white'} p-6 rounded-2xl shadow-md
                  animate-fadeInUp
                  ${index === 0 ? 'ml-0' : index === 1 ? 'ml-8' : 'ml-0'}
                `}
                style={{
                  animationDelay: `${0.2 + index * 0.15}s`,
                  position: 'relative'
                }}
              >
                <p className={`text-lg leading-relaxed ${index === 1 ? 'text-white' : 'text-gray-700'}`}>
                  {worry.text && <>{worry.text} </>}
                  <strong className={index === 1 ? 'text-white' : 'text-gray-900'}>{worry.bold}</strong>
                  {worry.end && <> {worry.end}</>}
                </p>
                {/* Speech bubble tail */}
                {index === 1 ? (
                  <div
                    className="absolute -right-3 top-6 w-0 h-0"
                    style={{
                      borderTop: '10px solid transparent',
                      borderBottom: '10px solid transparent',
                      borderLeft: '15px solid #1e40af', // blue-800
                    }}
                  ></div>
                ) : (
                  <div
                    className="absolute -left-3 top-6 w-0 h-0"
                    style={{
                      borderTop: '10px solid transparent',
                      borderBottom: '10px solid transparent',
                      borderRight: '15px solid white',
                    }}
                  ></div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side - Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-4xl lg:text-5xl font-bold">
                <span className="text-blue-700 block text-brand-blue mb-4">정책자금 컨설팅,</span>
                <span className="block text-gray-900">정말 믿을 수 있을까요?</span>
              </h2>
            </div>

            <div className="animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
              <p className="text-xl text-gray-700 leading-normal">
                아직 금리 1~2% SNS 광고에 현혹되고 계신가요?
              </p>
              <p className="text-xl text-gray-700 leading-normal">
                정부 정책자금, 어디서부터 시작해야 할지 막막했다면
              </p>
              <p className="text-xl text-gray-700 ">
                '한국중소기업지원센터' 에서 모든 과정을 확인하세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroService;