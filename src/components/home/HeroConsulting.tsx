import { consultingCardsData } from '@/data/consultingCardsData';

function HeroConsulting() {
  return (
    <section className="w-full py-[60px] relative" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="max-w-7xl mx-auto px-4">
        {/* 메인 제목 */}
        <div className="mb-6 text-center animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-[#214bab]">{consultingCardsData.mainTitle.highlight}</span> 때문에
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            {consultingCardsData.mainTitle.normal}
          </h2>
        </div>

        {/* 서브 텍스트 */}
        <div className="mb-8 text-center animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
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
        </div>

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
            <a
              key={index}
              href={card.link}
              className="block animate-fadeInUp"
              style={{ animationDelay: '0.5s' }}
            >
              <div
                className="relative h-[300px] rounded-lg overflow-hidden group cursor-pointer
                           transition-all duration-300 ease-in-out
                           hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  backgroundImage: `url(${card.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* 반투명 오버레이 */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>

                {/* 컨텐츠 */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center p-6">
                  {/* 아이콘 */}
                  <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                    <img src={card.icon} alt={card.title} className="w-16 h-16 md:w-20 md:h-20" loading="lazy" />
                  </div>
                  <p className="text-sm md:text-base mb-3 opacity-90 transition-opacity duration-300 group-hover:opacity-100">
                    {card.title}
                  </p>
                  <p className="text-lg md:text-xl font-bold whitespace-pre-line transition-transform duration-300 group-hover:scale-105">
                    {card.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroConsulting;