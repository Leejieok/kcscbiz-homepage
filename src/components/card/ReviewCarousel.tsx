import { useState, useEffect, useRef } from 'react';
import { testimonialsData } from '@/data/testimonials';

function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // 무한 루프를 위한 복제된 슬라이드 배열
  const extendedData = [
    ...testimonialsData.slice(-4), // 마지막 4개를 앞에 추가
    ...testimonialsData,
    ...testimonialsData.slice(0, 4) // 처음 4개를 뒤에 추가
  ];

  const slidesPerView = 4; // 한 번에 보여줄 슬라이드 수
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
      if (currentIndex >= testimonialsData.length + 4) {
        setCurrentIndex(4);
      }
      // 첫 실제 슬라이드 이전으로 가면 마지막으로
      else if (currentIndex < 4) {
        setCurrentIndex(testimonialsData.length + 3);
      }
    }, 700);

    return () => clearTimeout(timer);
  }, [currentIndex, isTransitioning]);

  // const goToSlide = (index: number) => {
  //   setCurrentIndex(index + 4); // offset 고려
  //   setIsAutoPlaying(false);
  // };

  return (
    <div className="relative w-full mx-auto bg-white overflow-hidden">

      {/* 캐러셀 컨테이너 */}
      <div className="relative">
        {/* 슬라이드 래퍼 */}
        <div
          ref={carouselRef}
          className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
          style={{
            transform: `translateX(-${currentIndex * slideWidth}%)`,
            // paddingLeft: '100px',
            // paddingRight: '100px'
          }}
        >
          {extendedData.map((testimonial, idx) => (
            <div
              key={`${testimonial.id}-${idx}`}
              className="flex-shrink-0"
              style={{ 
                width: `${slideWidth}%`,
                padding: '2.5px'
              }}
            >
              {/* 후기 카드 */}
              <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg">
                {/* 배경 이미지 */}
                <div
                  className="relative"
                  style={{
                    minHeight: '750px',
                    height: '750px',
                    backgroundImage: `url(${testimonial.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* 텍스트 콘텐츠 - 하단에만 표시 */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-6 text-center">
                    <p className="text-base font-semibold text-gray-600 mb-2">
                      {testimonial.description}
                    </p>
                    <p className="text-lg font-bold text-blue-600">
                      {testimonial.result}
                    </p>
                  </div>

                  {/* 호버 시 전체 살짝 어둡게 */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 이전 버튼 */}
        <button
          onClick={handlePrevious}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 md:p-4 rounded-full shadow-xl transition-all hover:scale-110 z-10"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6 md:w-7 md:h-7 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* 다음 버튼 */}
        <button
          onClick={handleNext}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 md:p-4 rounded-full shadow-xl transition-all hover:scale-110 z-10"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6 md:w-7 md:h-7 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* 인디케이터 */}
      {/* <div className="flex justify-center gap-2 mt-10">
        {testimonialsData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              Math.floor((currentIndex - 4 + testimonialsData.length) % testimonialsData.length) === index
                ? 'bg-blue-600 w-10 h-2 rounded-full'
                : 'bg-gray-300 w-2 h-2 rounded-full hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
    </div>
  );
}

export default ReviewCarousel;