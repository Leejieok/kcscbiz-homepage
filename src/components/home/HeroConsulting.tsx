import { consultingCardsData } from '@/data/consultingCardsData';

function HeroConsulting() {
  return (
    <>
      {/* 모바일 버전 - 그라데이션 배경 */}
      <section
        className="w-full py-8 sm:py-10 md:hidden relative"
        style={{ background: 'linear-gradient(135deg, #199BA9, #104989, #0C1038)' }}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          {/* 메인 제목 - 모바일 */}
          <div className="mb-4 sm:mb-6 text-center animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
            <h2 className="text-2xl sm:text-3xl font-bold pb-2 sm:pb-4">
              <span className="text-white">{consultingCardsData.mobileTitle.highlight}</span>
            </h2>
            <h2 className="text-gray-200 sm:text-3xl mt-1 sm:mt-2 whitespace-pre-line leading-relaxed">
              {consultingCardsData.mobileTitle.normal}
            </h2>
          </div>

          {/* 버튼 */}
          <div className="mb-6 sm:mb-8 text-center">
            <a
              href={consultingCardsData.buttonLink}
              className="inline-block px-2 sm:px-6 sm:py-3 bg-white font-black rounded-full transition-colors text-2xl relative"
            >
              <span
                style={{
                  backgroundImage: 'linear-gradient(135deg, #199BA9, #104989, #0C1038)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {consultingCardsData.buttonText}
              </span>
            </a>
          </div>

          {/* 컨설팅 카드 그리드 - 모바일 */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {consultingCardsData.cards.map((card, index) => (
              <div
                key={index}
                className="block animate-fadeInUp"
                style={{ animationDelay: '0.5s' }}
              >
                <div
                  className="relative h-[180px] sm:h-[280px] rounded-lg overflow-hidden group
                             transition-all duration-300 ease-in-out
                             hover:-translate-y-2 hover:shadow-2xl border"
                >
                  {/* 컨텐츠 */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-gray-800 text-center p-3 sm:p-6">
                    {/* 아이콘 */}
                    <div className="mb-2 sm:mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                      <img src={card.icon} alt={card.title} className="w-10 h-10 sm:w-16 sm:h-16" loading="lazy" />
                    </div>
                    <p className="text-[10px] sm:text-sm text-white mb-1 sm:mb-3 transition-opacity duration-300">
                      {card.title}
                    </p>
                    <p className="text-xs sm:text-lg text-white font-extralight whitespace-pre-line transition-transform duration-300 group-hover:scale-105">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 데스크톱 버전 - 원래 디자인 */}
      <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16 relative bg-[#f9f9f9] hidden md:block">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          {/* 메인 제목 - 데스크톱 */}
          <div className="mb-4 sm:mb-6 text-center animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pb-2 sm:pb-4">
              <span className="text-blue-500">{consultingCardsData.mainTitle.highlight}</span>
            </h2>
            <h2 className="sm:text-3xl md:text-4xl mt-1 sm:mt-2 whitespace-pre-line leading-relaxed">
              {consultingCardsData.mainTitle.normal}
            </h2>
          </div>

          {/* 버튼 */}
          <div className="mb-6 sm:mb-8 md:mb-12 text-center">
            <a
              href={consultingCardsData.buttonLink}
              className="inline-block px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors text-sm sm:text-base"
            >
              {consultingCardsData.buttonText}
            </a>
          </div>

          {/* 컨설팅 카드 그리드 - 데스크톱 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {consultingCardsData.cards.map((card, index) => (
              <div
                key={index}
                className="block animate-fadeInUp"
                style={{ animationDelay: '0.5s' }}
              >
                <div
                  className="relative h-[280px] md:h-[300px] rounded-lg overflow-hidden group
                             transition-all duration-300 ease-in-out
                             hover:-translate-y-2 hover:shadow-2xl border"
                  style={{
                    background: 'linear-gradient(135deg, #D2D7FF, #5468FF, #DADFFF)'
                  }}
                >
                  {/* 컨텐츠 */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-gray-800 text-center p-6">
                    {/* 아이콘 */}
                    <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                      <img src={card.icon} alt={card.title} className="w-16 h-16 md:w-20 md:h-20" loading="lazy" />
                    </div>
                    <p className="text-sm md:text-base text-white mb-3 transition-opacity duration-300">
                      {card.title}
                    </p>
                    <p className="text-lg md:text-xl text-white font-bold whitespace-pre-line transition-transform duration-300 group-hover:scale-105">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroConsulting;
