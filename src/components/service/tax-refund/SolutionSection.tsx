import SolutionCard from '@/components/common/card/SolutionCard';
import { solutionData } from '@/data/solutionData';

function SolutionSection() {
  return (
    <section className="w-full lg:py-20 py-4 px-4 bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* 타이틀 */}
        <div className="mb-4 lg:mb-24 animate-fadeInUp">
          <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-center tracking-tight">
            <span className="block lg:mb-4">세금환급, 엄청 간단합니다!</span>
            <span className="block">
              <span className="text-blue-700">놓치고 넘어간 당연한 권리</span>를 찾아드립니다.
            </span>
          </h2>
        </div>

        {/* 솔루션 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutionData.map((solution, index) => (
            <SolutionCard
              key={index}
              title={solution.title}
              items={solution.items}
              backgroundImage={solution.backgroundImage}
              delay={`${0.2 + index * 0.2}s`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolutionSection