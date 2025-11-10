import { cautionData } from '@/data/cautionData';

function CautionSection() {
  return (
    <section className="w-full py-[80px] bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-4">
        {/* 제목 */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#110d0d] mb-2">
            이 <span className="text-blue-700">3가지</span>를 지킬 수 없으면
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-[#110d0d]">
            문의하지 마세요.
          </h2>
        </div>

        {/* 카드들 */}
        <div className="space-y-6">
          {cautionData.map((item, index) => (
            <div
              key={index}
              className="bg-white/75 rounded-lg p-8 md:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 ">
                {/* 왼쪽: 번호와 제목 */}
                <div className="lg:col-span-5 border-r border-[#dddddd] pr-8">
                  <p className="text-base font-bold text-blue-700 mb-2">
                    {item.number}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#110d0d] leading-tight">
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
                </div>

                {/* 오른쪽: 설명 */}
                <div className="lg:col-span-7">
                  <div className="text-lg text-[#110d0d] space-y-2" style={{ lineHeight: '1.5' }}>
                    {item.description.map((text, idx) => (
                      <p
                        key={idx}
                        className={idx === item.highlightIndex ? 'font-bold text-orange-500' : ''}
                      >
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CautionSection;