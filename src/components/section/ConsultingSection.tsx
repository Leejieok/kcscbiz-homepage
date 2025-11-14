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
    <section id="consulting" className="w-full py-[80px] relative" style={{ backgroundColor }}>
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

        {/* Mac 브라우저 창 스타일 카드들 */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="animate-fadeInUp rounded-xl overflow-hidden shadow-2xl bg-white border border-gray-200"
              style={{
                animationDelay: `${0.5 + index * 0.2}s`
              }}
            >
              {/* Mac 창 상단바 */}
              <div className="bg-gradient-to-b from-gray-100 to-gray-200 px-4 py-3 border-b border-gray-300">
                <div className="flex items-center gap-2">
                  {/* 트래픽 라이트 버튼 */}
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  {/* 타이틀 */}
                  <div className="flex-1 text-center">
                    <span className="text-xs text-gray-600 font-medium">{section.necessity}</span>
                  </div>
                </div>
              </div>

              {/* 스크롤 가능한 컨텐츠 영역 */}
              <div className="bg-white p-8 md:p-12 max-h-[500px] overflow-y-auto flex gap-6">
                {/* 왼쪽 텍스트 영역 */}
                <div className="flex-1">
                  <div className="mb-6">
                    <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-2">
                      {section.necessity}
                    </h3>
                    <h4 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {section.title}
                      <span className="text-blue-700">{section.titleHighlight}</span>
                    </h4>
                  </div>

                  <ul className="space-y-3">
                    {section.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="text-[#544d4d] text-base md:text-lg flex items-start gap-3"
                        style={{ lineHeight: '2' }}
                      >
                        {showCheckIcon && <ArrowIcon />}
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 오른쪽 이미지 영역 */}
                {images && images[index] && (
                  <div className="w-64 flex-shrink-0">
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
