import { processSteps } from '@/data/processSteps';

function ProcessSection() {
  return(
    <section className="w-full px-4 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* 타이틀 */}
        <div className="mb-12 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center tracking-tight mb-8">
            기업의 시작부터 안정적인 성장을
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-blue-700 tracking-tight">
            끝까지 함께 합니다.
          </h2>
        </div>

        {/* 프로세스 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {processSteps.slice(0, 3).map((step, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden animate-fadeInUp min-h-[320px] max-h-[440px] h-[440px] flex flex-col justify-between"
              style={{
                backgroundImage: `url(${step.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                animationDelay: '0.5s'
              }}
            >
              {/* 오버레이 */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* 콘텐츠 */}
              <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                {/* 번호 */}
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center mb-4">
                  <span className="text-white text-2xl font-bold">{step.number}</span>
                </div>

                {/* 타이틀 */}
                <h3 className="text-white text-2xl font-semibold mb-4">
                  {step.title}
                </h3>

                {/* 설명 */}
                <p className="text-white text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 2개 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {processSteps.slice(3, 5).map((step, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden animate-fadeInUp min-h-[320px] flex flex-col justify-between"
              style={{
                backgroundImage: `url(${step.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                animationDelay: '0.5s'
              }}
            >
              {/* 오버레이 */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* 콘텐츠 */}
              <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                {/* 번호 */}
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center mb-4">
                  <span className="text-white text-2xl font-bold">{step.number}</span>
                </div>

                {/* 타이틀 */}
                <h3 className="text-white text-2xl font-semibold mb-4">
                  {step.title}
                </h3>

                {/* 설명 */}
                <p className="text-white text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection;