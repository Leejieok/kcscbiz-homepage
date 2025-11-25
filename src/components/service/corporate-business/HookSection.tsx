import { Link } from "react-router-dom";

function HookSection() {
  return (
    <section
      className="relative w-full px-4 py-12 lg:py-24 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: 'url(https://cdn.imweb.me/thumbnail/20250308/968de10275fec.png)',
        backgroundPosition: '50% 50%'
      }}
    >
      {/* 다크 오버레이: 가독성을 위해 투명도 살짝 조절 (15% -> 50% 추천) */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* 콘텐츠 */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* 메인 타이틀 */}
        <div className="mb-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center tracking-tight mb-6 leading-tight">
            <span className="text-white">대표님이 놓친 <br className="md:hidden" />
            </span>
            <span className="text-orange-400">'숨은 정부지원금'</span>
            <span className="text-white">,<br className="md:hidden" /> 경쟁사는 <br className="md:hidden" />
              이미 받고 있습니다.</span>
          </h2>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-medium text-gray-200 text-center tracking-tight">
            세금은 줄이고, 자금은 늘리는 것.<br className="md:hidden" /> 그게 진짜 <span className="text-white font-bold border-b-2 border-orange-500">돈 버는 경영</span>입니다.
          </h2>
        </div>

        {/* 서브 텍스트 */}
        <div className="mb-10 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-2">
            열심히 일해서 번 돈, <br className="md:hidden" />
            세금으로 다 내시겠습니까?
          </p>
          <p className="text-lg md:text-xl text-white font-semibold leading-relaxed">
            지금 우리 회사에 <br className="md:hidden" />
            딱 맞는 자금과 절세 전략, <br className="md:hidden" />
            <span className="text-orange-400">골든타임</span>을 놓치면 다시는 기회가 오지 않습니다.
          </p>
        </div>

        {/* 버튼 */}
        <div className="animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <Link
            to="/contact"
            className="inline-block lg:px-10 px-8 lg:py-4 py-2 bg-orange-600 hover:bg-orange-500 text-white lg:text-lg font-bold transition-all duration-300 rounded-full shadow-lg transform hover:-translate-y-1"
          >
            내 숨은 자금 한도 확인하기
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HookSection;