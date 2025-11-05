import { useState, useEffect, useRef } from 'react';
import { testimonialsData } from '@/data/testimonials';

function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // 무한 루프를 위한 복제된 슬라이드 배열
  const extendedData = [
    ...testimonialsData.slice(-3), // 마지막 3개를 앞에 추가
    ...testimonialsData,
    ...testimonialsData.slice(0, 3) // 처음 3개를 뒤에 추가
  ];

  const slidesPerView = 3; // 한 번에 보여줄 슬라이드 수
  const slideWidth = 100 / slidesPerView; // 각 슬라이드의 너비 (%)

  // 자동 슬라이드
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // 트랜지션 종료 후 무한 루프 처리
  useEffect(() => {
    if (!isTransitioning) return;

    const timer = setTimeout(() => {
      setIsTransitioning(false);

      // 마지막 실제 슬라이드를 넘어가면 처음으로
      if (currentIndex >= testimonialsData.length + 3) {
        setCurrentIndex(3);
      }
      // 첫 실제 슬라이드 이전으로 가면 마지막으로
      else if (currentIndex < 3) {
        setCurrentIndex(testimonialsData.length + 2);
      }
    }, 700); // transition duration과 동일

    return () => clearTimeout(timer);
  }, [currentIndex, isTransitioning]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index + 3); // offset 고려
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative w-full mx-auto py-10">
      {/* 캐러셀 컨테이너 */}
      <div className="relative overflow-hidden px-4">
        {/* 슬라이드 래퍼 */}
        <div
          ref={carouselRef}
          className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
          style={{
            transform: `translateX(-${currentIndex * slideWidth}%)`
          }}
        >
          {extendedData.map((testimonial, idx) => (
            <div
              key={`${testimonial.id}-${idx}`}
              className="flex-shrink-0 px-2"
              style={{ width: `${slideWidth}%` }}
            >
              {/* 후기 카드 */}
              <div className="relative h-[500px] md:h-[600px] lg:h-[750px] rounded-lg overflow-hidden shadow-lg group">
                {/* 배경 이미지 */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${testimonial.image})`
                  }}
                />

                {/* 오버레이 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* 텍스트 콘텐츠 */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-center text-white">
                  <p className="text-base md:text-lg lg:text-xl font-semibold mb-2 text-gray-200">
                    {testimonial.description}
                  </p>
                  <p className="text-lg md:text-xl lg:text-2xl font-bold text-blue-400">
                    {testimonial.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 이전 버튼 */}
        <button
          onClick={handlePrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
          aria-label="Previous slide"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* 다음 버튼 */}
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
          aria-label="Next slide"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* 인디케이터 */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonialsData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              Math.floor((currentIndex - 3 + testimonialsData.length) % testimonialsData.length) === index
                ? 'bg-blue-600 w-8 h-3'
                : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ReviewCarousel;
