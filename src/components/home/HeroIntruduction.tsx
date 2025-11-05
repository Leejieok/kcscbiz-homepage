import ReviewCarousel from '@/components/card/ReviewCarousel';

function HeroIntroduction() {
  return (
    <div className="w-full py-20 px-10">
      <main className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="text-blue-700">과장 하나도 없는 </span>
          </h2>
          <h2 className="text-5xl md:text-6xl font-bold">
            대표님들 <span className="text-gray-900">100% 실제 후기</span>
          </h2>
        </div>

        {/* 리뷰 캐러셀 */}
        <ReviewCarousel />
      </main>
    </div>
  )
}

export default HeroIntroduction;