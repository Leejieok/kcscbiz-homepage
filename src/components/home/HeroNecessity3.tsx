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
    <section className="w-full py-[80px] relative bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* 메인 제목 */}
        <div className="mb-12 text-center animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-light mb-2">
            {promiseData.title.normal}
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-500">
            {promiseData.title.highlight}
          </h2>
        </div>

        {/* 책 넘기기 스타일 카드 */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-300 overflow-hidden transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-0 min-h-[500px]">
              {/* 왼쪽: 이미지 */}
              <div
                className="relative bg-cover bg-center bg-no-repeat transition-all duration-500"
                style={{
                  backgroundImage: `url(${currentPromise.backgroundImage})`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
              </div>

              {/* 오른쪽: 텍스트 */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#214bab] mb-4">
                    {currentPromise.number}
                  </h3>
                  <h4 className="text-2xl md:text-3xl font-bold mb-6">
                    {currentPromise.title}
                    {currentPromise.titleHighlight.length > 0 && (
                      <span className="text-[#214bab]">{currentPromise.titleHighlight[0]}</span>
                    )}
                  </h4>
                </div>

                <div className="text-[#544d4d] text-base md:text-lg whitespace-pre-line leading-relaxed">
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
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 bg-white rounded-full p-3 border border-gray-300 hover:bg-blue-700 hover:text-white transition-colors"
            aria-label="이전"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 bg-white rounded-full p-3 border border-gray-300 hover:bg-blue-700 hover:text-white transition-colors"
            aria-label="다음"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* 페이지네이션 */}
          <div className="flex justify-center gap-2 mt-8">
            {promiseData.promises.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-blue-700 w-8' : 'bg-gray-300'
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