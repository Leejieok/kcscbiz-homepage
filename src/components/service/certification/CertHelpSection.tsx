function CertHelpSection()  {
  const concerns = [
    "우리 회사는 어떤 인증이 유리한 지 잘 모르겠어요.",
    "이노비즈와 메인비즈, 둘 다 받아야 하나요? 어떻게 다른가요?",
    "이 많은 걸 어떻게 다 외워요? 어떻게 하죠? 알아봐도 모르겠어요."
  ];

  return (
    <section className="w-full px-4 py-28 bg-[#f5f7fd]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* 왼쪽 말풍선 영역 (5/12) */}
          <div className="lg:col-span-5">
            <div className="space-y-5 mr-5 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
              {concerns.map((concern, index) => {
                const isSecond = index === 1;
                return (
                  <div
                    key={index}
                    className={`relative ${isSecond ? 'bg-blue-700' : 'bg-white'} p-6 rounded-2xl shadow-lg`}
                  >
                    <p className={`text-lg md:text-xl leading-relaxed ${isSecond ? 'text-white' : 'text-black'}`}>
                      {concern.split('**').map((part, i) =>
                        i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                      )}
                    </p>
                    {/* 말풍선 꼬리 - 왼쪽 */}
                    <div
                      className={`absolute top-1/2 -left-3 -translate-y-1/2 w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-r-[15px] ${isSecond ? 'border-r-blue-700' : 'border-r-white'}`}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 오른쪽 텍스트 영역 (7/12) */}
          <div className="lg:col-span-7">
            {/* 여백 */}
            <div className="h-[11px]"></div>

            {/* 메인 타이틀 */}
            <div className="mb-6 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2">
                혹시 막막하다고
              </h2>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                생각 하고 계신가요?
              </h2>
            </div>

            {/* 서브 텍스트 */}
            <div className="animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
              <p className="text-lg md:text-xl text-[#544d4d] leading-relaxed mb-2">
                복잡하고 까다로운 인증 과정, 더 이상 주저하지 마세요.
              </p>
              <p className="text-lg md:text-xl text-[#544d4d] leading-relaxed">
                전문가와 함께라면 모든 과정을 빠르고 간단하게 해결해드립니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CertHelpSection;