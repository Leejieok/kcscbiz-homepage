import { beforeAfterData } from '@/data/beforeAfterData';
import BeforeAfterSlider from '../card/BeforeAfterSlider';

function HeroBeforeAfter() {
  return (
    <section className="w-full py-[60px] bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* 메인 제목 */}
        <div className=" mb-6 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold">
            {beforeAfterData.mainTitle.text}
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-blue-700">{beforeAfterData.mainTitle.highlight}</span>{' '}
            {beforeAfterData.mainTitle.subText}
          </h2>
        </div>

        {/* 설명 텍스트 */}
        <div className=" mb-12 animate-fadeInUp">
          <div className="space-y-1" style={{ lineHeight: '2.2' }}>
            <p className="text-lg md:text-xl text-[#544d4d] font-bold">
              {beforeAfterData.description[0]}
            </p>
            <p className="text-lg md:text-xl text-[#544d4d] font-bold">
              {beforeAfterData.description[1]}
            </p>
            <p className="text-lg md:text-xl text-orange-500 font-bold">
              {beforeAfterData.description[2]}
            </p>
            <p className="text-lg md:text-xl text-[#544d4d]">
              {beforeAfterData.description[3]}
            </p>
          </div>
        </div>

        {/* Before/After 슬라이더 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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