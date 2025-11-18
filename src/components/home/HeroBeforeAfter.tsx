import { beforeAfterData } from '@/data/beforeAfterData';
import BeforeAfterSlider from '../common/card/BeforeAfterSlider';

function HeroBeforeAfter() {
  return (
    <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        {/* 메인 제목 */}
        <div className="mb-4 sm:mb-6 animate-fadeInUp">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold whitespace-pre-line md:whitespace-normal">
            {beforeAfterData.mainTitle.text}
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold whitespace-pre-line md:whitespace-normal">
            <span className="text-blue-700">{beforeAfterData.mainTitle.highlight}</span>{' '}
            {beforeAfterData.mainTitle.subText}
          </h2>
        </div>

        {/* 설명 텍스트 */}
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 animate-fadeInUp">
          <div className="space-y-1.5 sm:space-y-1 leading-relaxed">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-orange-500 font-bold whitespace-pre-line md:whitespace-normal">
              {beforeAfterData.description[0]}
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#544d4d] font-bold whitespace-pre-line md:whitespace-normal">
              {beforeAfterData.description[1]}
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-orange-500 font-bold whitespace-pre-line md:whitespace-normal">
              {beforeAfterData.description[2]}
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#544d4d] whitespace-pre-line md:whitespace-normal">
              {beforeAfterData.description[3]}
            </p>
          </div>
        </div>

        {/* Before/After 슬라이더 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {beforeAfterData.images.map((item, index) => (
            <div
              key={item.id}
              className="animate-fadeInUp rounded-lg overflow-hidden shadow-lg"
              style={{
                animationDelay: `${0.5 + index * 0.2}s`
              }}
            >
              <BeforeAfterSlider
                beforeImage={item.beforeImage}
                afterImage={item.afterImage}
                alt={item.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroBeforeAfter;