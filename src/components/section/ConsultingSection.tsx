import ArrowIcon from '@/components/common/icon/ArrowIcon';

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
  images?: string[];
  backgroundColor?: string;
  showCheckIcon?: boolean;
}

function ConsultingSection({
  mainHeading,
  subHeading,
  sections,
  images,
  backgroundColor = '#f5f7fd',
  showCheckIcon = true
}: ConsultingSectionProps) {
  return (
    <section id="consulting" className="w-full py-10 sm:py-12 md:py-16 lg:py-20 relative" style={{ backgroundColor }}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        {/* 메인 제목 */}
        <div className="lg:mb-4 animate-fadeInUp">
          <h2 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-blue-700">{mainHeading.highlight}</span>
          </h2>
          <p className=" sm:text-xl md:text-4xl lg:text-5xl font-bold text-[#0d0f11] lg:mt-1">
            {mainHeading.text}
          </p>
        </div>

        {/* 서브 제목 */}
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 animate-fadeInUp">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#544d4d] leading-relaxed">
            {subHeading}
          </p>
        </div>

        {/* Mac 브라우저 창 스타일 카드들 */}
        <div className="space-y-4 sm:space-y-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="animate-fadeInUp rounded-lg sm:rounded-xl overflow-hidden shadow-lg sm:shadow-2xl bg-white border border-gray-200"
              style={{
                animationDelay: `${0.5 + index * 0.2}s`
              }}
            >
              {/* Mac 창 상단바 */}
              <div className="bg-gradient-to-b from-gray-100 to-gray-200 px-2 sm:px-4 py-2 sm:py-3 border-b border-gray-300">
                <div className="flex items-center gap-1 sm:gap-2">
                  {/* 트래픽 라이트 버튼 */}
                  <div className="flex gap-1 sm:gap-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                  </div>
                  {/* 타이틀 */}
                  <div className="flex-1 text-center">
                    <span className="text-[10px] sm:text-xs text-gray-600 font-medium">{section.necessity}</span>
                  </div>
                </div>
              </div>

              {/* 스크롤 가능한 컨텐츠 영역 */}
              <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-12 max-h-[400px] sm:max-h-[500px] overflow-y-auto flex flex-col md:flex-row gap-4 sm:gap-6">
                {/* 왼쪽 텍스트 영역 */}
                <div className="flex-1">
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-700 mb-1 sm:mb-2">
                      {section.necessity}
                    </h3>
                    <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
                      {section.title}
                      <span className="text-blue-700">{section.titleHighlight}</span>
                    </h4>
                  </div>

                  <ul className="space-y-2 sm:space-y-3">
                    {section.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="text-[#544d4d] text-xs sm:text-sm md:text-base lg:text-lg flex items-start gap-2 sm:gap-3 leading-relaxed"
                      >
                        {showCheckIcon && <ArrowIcon />}
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 오른쪽 이미지 영역 - 모바일에서 숨김 */}
                {images && images[index] && (
                  <div className="hidden md:block md:w-48 lg:w-64 flex-shrink-0">
                    <img
                      src={images[index]}
                      alt={section.necessity}
                      className="w-full h-auto rounded-lg object-cover shadow-md"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ConsultingSection;
