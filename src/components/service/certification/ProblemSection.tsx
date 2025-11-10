import { certifications } from '@/data/certifications';

function ProblemSection() {
  return(
    <section className="w-full px-4 py-20 bg-[#f5f7fd]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* 왼쪽 텍스트 영역 (7/12) */}
          <div className="lg:col-span-7">
            {/* 메인 타이틀 */}
            <div className="mb-6 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
              <p className="text-3xl md:text-4xl lg:text-5xl mb-4" style={{ fontFamily: 'InkLiquid, sans-serif', lineHeight: '1.5' }}>
                기업 인증이 있다면, 절세는 기본!
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                세금 부담을 줄이고
              </h2>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-blue-700">정책자금 지원</span>까지
              </h2>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                받을 수 있는 비결
              </h2>
            </div>

            {/* 서브 텍스트 */}
            <div className="mb-8 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
              <p className="text-xl md:text-2xl text-[#544d4d] leading-relaxed mb-2">
                대표님, 기업 인증 언제까지 미룰 예정인가요?
              </p>
              <p className="text-xl md:text-2xl text-[#544d4d] leading-relaxed">
                지금 바로 취득하세요!
              </p>
            </div>

            {/* 여백 */}
            <div className="h-[30px]"></div>

            {/* 버튼 */}
            <div className="animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
              <a
                href="/contact"
                className="inline-block px-8 py-4 border-2 border-blue-700 text-blue-700 hover:text-white text-lg font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                지금 바로 신청하기
              </a>
            </div>
          </div>

          {/* 오른쪽 인증 카드 영역 (5/12) */}
          <div className="lg:col-span-5">
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`${cert.bgColor} p-6 rounded-lg shadow-md animate-fadeInUp`}
                  style={{ animationDelay: cert.delay }}
                >
                  <h3 className={`flex items-center gap-2 text-xl font-semibold ${cert.textColor}`}>
                    <img
                      src={cert.icon}
                      alt="icon"
                      className="w-5 h-5"
                      loading="lazy"
                    />
                    {cert.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSection;