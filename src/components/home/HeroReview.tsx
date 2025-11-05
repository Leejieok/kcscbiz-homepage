import { reviewsData } from '@/data/reviews';
import ReviewCard from '@/components/card/ReviewCard';
import { useEffect, useRef } from 'react';
import ContactButton from '../button/ContactButton';

function HeroReview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !scrollContainerRef.current) return;

      const container = containerRef.current;
      const scrollContainer = scrollContainerRef.current;
      const rect = container.getBoundingClientRect();

      // 컨테이너가 viewport에 들어왔을 때
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        // 스크롤 진행도 계산 (0 ~ 1)
        const scrollProgress = Math.abs(rect.top) / (container.offsetHeight - window.innerHeight);

        // 전체 스크롤할 거리 계산
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.offsetWidth;

        // translateX 적용
        const translateX = -scrollProgress * maxScroll;
        scrollContainer.style.transform = `translateX(${translateX}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 스크롤 공간 확보를 위한 높이 계산 (카드 너비 * 개수 + gap)
  const scrollHeight = `${600 * reviewsData.length + 40 * (reviewsData.length - 1)}px`;

  return (
    <div ref={containerRef} className="w-full relative" style={{ height: scrollHeight }}>
      <div className="sticky top-0 flex flex-col justify-between">
        <div>
          <h1 className="text-7xl text-center font-bold mb-[90px]">
            승인 성공사례 4,145건!
          </h1>
          <div className="overflow-hidden">
            <div
              ref={scrollContainerRef}
              className="flex flex-nowrap justify-start gap-10 relative transition-transform duration-100 ease-out px-10"
            >
              {reviewsData.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center py-20">
          <ContactButton text='승인사례 더 둘러보기'/>
        </div>
      </div>
    </div>
  )
}

export default HeroReview;