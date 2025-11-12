import { promiseData } from '@/data/promiseData';

function HeroNecessity3() {
  return (
    <section className="w-full py-[80px] relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* 메인 제목 */}
        <div className="mb-12 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            {promiseData.title.normal}
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-[#214bab]">
            {promiseData.title.highlight}
          </h2>
        </div>

        {/* 약속 카드들 */}
        <div className="space-y-6 tracking-tight">
          {promiseData.promises.map((promise, index) => (
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
                  backgroundImage: `url(${promise.backgroundImage})`
                }}
              >
                {/* 컨텐츠 */}
                <div className="relative z-10">
                  <div className="mb-6">
                    <h3 className="text-xl md:text-2xl font-semibold text-[#214bab] mb-2">
                      {promise.number}
                    </h3>
                    <h4 className="text-2xl md:text-3xl font-bold">
                      {promise.titleHighlight.length > 0 ? (
                        <>
                          {promise.title}
                          <span className="text-[#214bab]">{promise.titleHighlight[0]}</span>
                        </>
                      ) : (
                        promise.title
                      )}
                    </h4>
                  </div>

                  <div className="text-[#544d4d] text-base md:text-lg whitespace-pre-line" style={{ lineHeight: '2' }}>
                    {promise.description}
                    {promise.descriptionHighlight && (
                      <strong className="text-[#ff7800]">{promise.descriptionHighlight}</strong>
                    )}
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

export default HeroNecessity3;