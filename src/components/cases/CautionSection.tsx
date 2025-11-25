import { cautionData } from '@/data/cautionData';

function CautionSection() {
  return (
    <section className="w-full lg:py-[100px] py-[30px] bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-4">
        {/* 제목 */}
        <div className="text-center lg:mb-16 mb-8 animate-fadeInUp">
          <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-[#110d0d] mb-2 lg:mb-4 tracking-tight">
            이 <span className="text-blue-700 relative inline-block">
              3가지
              <span className="absolute bottom-1 left-0 w-full h-2 bg-blue-200/50 -z-10 rounded-full"></span>
            </span>를 지킬 수 없으면
          </h2>
          <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-[#110d0d] tracking-tight">
            문의하지 마세요.
          </h2>
        </div>

        {/* 카드들 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {cautionData.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-100 flex flex-col h-full animate-fadeInUp"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* 상단: 번호와 아이콘 */}
              <div className="flex items-center justify-between mb-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 font-bold text-sm lg:text-base">
                  {item.number}
                </span>
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-300">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
              </div>

              {/* 제목 */}
              <h3 className="text-xl lg:text-2xl font-bold text-[#110d0d] mb-6 leading-snug min-h-[3.5rem]">
                {Array.isArray(item.title) ? (
                  <>
                    {item.title.map((line, idx) => (
                      <span key={idx}>
                        {line}
                        {idx < item.title.length - 1 && <br />}
                      </span>
                    ))}
                  </>
                ) : (
                  item.title
                )}
              </h3>

              {/* 구분선 */}
              <div className="w-full h-px bg-gray-100 mb-6 group-hover:bg-blue-100 transition-colors duration-300"></div>

              {/* 설명 */}
              <div className="text-sm lg:text-base text-gray-600 space-y-3 flex-grow">
                {item.description.map((text, idx) => (
                  <p
                    key={idx}
                    className={`leading-relaxed ${idx === item.highlightIndex ? 'font-bold text-blue-600' : ''}`}
                  >
                    • {text}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CautionSection;