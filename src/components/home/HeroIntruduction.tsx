import ReviewCarousel from '@/components/common/card/ReviewCarousel';

function HeroIntroduction() {
  return (
    <section className="w-full pt-20 pb-2 bg-[#f6f6f6]" aria-label="고객 후기 섹션">
      <div className="max-w-full mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-blue-700 text-5xl md:text-6xl font-bold mb-3 tracking-tight">
            과장 하나도 없는
          </h1>
          <h2 className="text-gray-900 text-5xl md:text-6xl font-bold tracking-tight">
            대표님들 100% 실제 후기
          </h2>
        </header>
        
        {/* 리뷰 캐러셀 */}
        <ReviewCarousel />
      </div>
    </section>
  );
}

export default HeroIntroduction;