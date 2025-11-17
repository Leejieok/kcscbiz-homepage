import { consultingCardsData } from '@/data/consultingCardsData';

function HeroConsulting() {
  return (
    <section className="w-full py-[60px] relative" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="max-w-7xl mx-auto px-4">
        {/* 메인 제목 */}
        <div className="mb-6 text-center animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-4xl md:text-5xl font-bold pb-4">
            <span className="text-blue-500">{consultingCardsData.mainTitle.highlight}</span> 
          </h2>
          <h2 className="text-4xl mt-2 whitespace-pre-line leading-relaxed">
            {consultingCardsData.mainTitle.normal}
          </h2>
        </div>

        {/* 서브 텍스트 */}
        {/* <div className="mb-8 text-center animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          {consultingCardsData.subTexts.map((subText, index) => (
            <p
              key={index}
              className={`text-lg md:text-xl ${
                subText.highlight ? 'text-[#ff7800] font-bold' : 'text-[#544d4d]'
              }`}
              style={{ lineHeight: '2.2' }}
            >
              {subText.text}
            </p>
          ))}
        </div> */}

        {/* 버튼 */}
        <div className="mb-12 text-center">
          <a
            href={consultingCardsData.buttonLink}
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors"
          >
            {consultingCardsData.buttonText}
          </a>
        </div>

        {/* 컨설팅 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {consultingCardsData.cards.map((card, index) => (
            <div
              key={index}
              className="block animate-fadeInUp"
              style={{ animationDelay: '0.5s' }}
            >
              <div
                className="relative h-[300px] rounded-lg overflow-hidden group
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
  );
}

export default HeroConsulting;