import CheckIcon from '@/components/common/icon/CheckIcon';

interface MainHeading {
  highlight: string;
  text: string;
}

interface ContentSection {
  necessity: string;
  title: string;
  titleHighlight: string;
  points: string[];
}

interface ConsultingSectionProps {
  mainHeading: MainHeading;
  subHeading: string;
  sections: ContentSection[];
  backgroundImages: string[];
  backgroundColor?: string;
  showCheckIcon?: boolean;
}

function ConsultingSection({
  mainHeading,
  subHeading,
  sections,
  backgroundImages,
  backgroundColor = '#f5f7fd',
  showCheckIcon = true
}: ConsultingSectionProps) {
  return (
    <section className="w-full py-[80px] relative" style={{ backgroundColor }}>
      <div className="max-w-7xl mx-auto px-4">
        {/* 메인 제목 */}
        <div className="mb-6 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-blue-700">{mainHeading.highlight}</span>
          </h2>
          <p className="text-4xl md:text-5xl font-bold text-[#0d0f11] mt-2">
            {mainHeading.text}
          </p>
        </div>

        {/* 서브 제목 */}
        <div className="mb-12 animate-fadeInUp">
          <p className="text-lg md:text-xl text-[#544d4d]" style={{ lineHeight: '2.2' }}>
            {subHeading}
          </p>
        </div>

        {/* 필요성 카드들 */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="animate-fadeInUp rounded-lg overflow-hidden shadow-md"
              style={{
                animationDelay: `${0.5 + index * 0.2}s`
              }}
            >
              <div
                className="relative bg-cover bg-no-repeat bg-center p-8 md:p-12"
                style={{
                  backgroundImage: `url(${backgroundImages[index]})`
                }}
              >
                {/* 반투명 오버레이 */}
                <div className="absolute inset-0 bg-white/0"></div>

                {/* 컨텐츠 */}
                <div className="relative z-10">
                  <div className="mb-6">
                    <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-2">
                      {section.necessity}
                    </h3>
                    <h4 className="text-2xl md:text-3xl font-bold">
                      {section.title}
                      <span className="text-blue-700">{section.titleHighlight}</span>
                    </h4>
                  </div>

                  <ul className="list-disc list-inside">
                    {section.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="text-[#544d4d] text-base md:text-lg flex items-start gap-3"
                        style={{ lineHeight: '2' }}
                      >
                        {showCheckIcon && <CheckIcon />}
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ConsultingSection;
