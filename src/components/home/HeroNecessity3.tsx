import { promiseData } from '@/data/promiseData';
import { useState } from 'react';

function HeroNecessity3() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? promiseData.promises.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === promiseData.promises.length - 1 ? 0 : prev + 1));
  };

  const currentPromise = promiseData.promises[currentIndex];

  return (
    <section className="w-full py-10 sm:py-12 md:py-16 lg:py-20 relative bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        {/* 메인 제목 */}
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center animate-fadeInUp">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-1 sm:mb-2">
            {promiseData.title.normal}
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500">
            {promiseData.title.highlight}
          </h2>
        </div>

        {/* 책 넘기기 스타일 카드 */}
        <div className="relative max-w-5xl mx-auto px-8 sm:px-12 md:px-0">
          <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-300 overflow-hidden transition-all duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[400px] sm:min-h-[450px] md:min-h-[500px]">
              {/* 왼쪽: 이미지 */}
              <div
                className="relative bg-cover bg-center bg-no-repeat transition-all duration-500 min-h-[200px] sm:min-h-[250px] md:min-h-0"
                style={{
                  backgroundImage: `url(${currentPromise.backgroundImage})`
                }}
              ></div>

              {/* 오른쪽: 텍스트 */}
              <div className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#214bab] mb-2 sm:mb-4">
                    {currentPromise.number}
                  </h3>
                  <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-6">
                    {currentPromise.title} <br />
                    {currentPromise.titleHighlight.length > 0 && (
                      <span className="text-[#214bab]">{currentPromise.titleHighlight[0]}</span>
                    )}
                  </h4>
                </div>

                <div className="text-[#544d4d] text-sm sm:text-base md:text-lg whitespace-pre-line leading-relaxed">
                  {currentPromise.description}
                  {currentPromise.descriptionHighlight && (
                    <strong className="text-[#ff7800]">{currentPromise.descriptionHighlight}</strong>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* 네비게이션 버튼 */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-8 md:-translate-x-12 lg:-translate-x-16 bg-white rounded-full p-2 sm:p-3 border border-gray-300 hover:bg-blue-700 hover:text-white transition-colors"
            aria-label="이전"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-8 md:translate-x-12 lg:translate-x-16 bg-white rounded-full p-2 sm:p-3 border border-gray-300 hover:bg-blue-700 hover:text-white transition-colors"
            aria-label="다음"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* 페이지네이션 */}
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
            {promiseData.promises.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`h-2 sm:h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-blue-700 w-6 sm:w-8' : 'bg-gray-300 w-2 sm:w-3'
                }`}
                aria-label={`${index + 1}번째 약속으로 이동`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroNecessity3;