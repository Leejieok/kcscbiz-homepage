import ReviewCarousel from '@/components/common/card/ReviewCarousel';
import { testimonialsData } from '@/data/testimonials';

function HeroIntroduction() {
  return (
    <section className="w-full pt-8 md:pt-20 pb-2 bg-[#f6f6f6]" aria-label="고객 후기 섹션">
      {/* 모바일 버전: block md:hidden */}
      <div className="block md:hidden">
        <div className="max-w-full mx-auto px-4">
          <header className="text-center mb-6">
            <h1 className="text-blue-700 text-2xl font-bold mb-2 tracking-tight">
              생생한 만족도 후기
            </h1>
            {/* <h2 className="text-gray-900 text-2xl font-bold tracking-tight">
              대표님들 100% 실제 후기
            </h2> */}
          </header>

          {/* 모바일 리뷰 카드 - 가로 스크롤 */}
          <div className="relative -mx-4">
            <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory" style={{ scrollBehavior: 'smooth' }}>
              <div className="flex gap-3 pb-4">
                {testimonialsData.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`flex-shrink-0 w-[85vw] relative rounded-lg overflow-hidden shadow-lg snap-center ${
                      index === 0 ? 'ml-4' : ''
                    } ${
                      index === testimonialsData.length - 1 ? 'mr-4' : ''
                    }`}
                  >
                    {/* 배경 이미지 */}
                    <div
                      className="relative"
                      style={{
                        minHeight: '500px',
                        height: '500px',
                        backgroundImage: `url(${testimonial.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      {/* 텍스트 콘텐츠 - 하단 */}
                      <div className="absolute bottom-0 left-0 right-0 bg-white p-5 text-center">
                        <p className="text-sm font-semibold text-gray-600 mb-2 leading-tight">
                          {testimonial.description}
                        </p>
                        <p className="text-base font-bold text-blue-600">
                          {testimonial.result}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 웹 버전: hidden md:block */}
      <div className="hidden md:block">
        <div className="max-w-full mx-auto px-2 sm:px-4">
          <header className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h1 className="text-blue-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 tracking-tight">
              생생한 만족도 후기
            </h1>
            {/* <h2 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
              대표님들 100% 실제 후기
            </h2> */}
          </header>

          {/* 리뷰 캐러셀 */}
          <ReviewCarousel />
        </div>
      </div>
    </section>
  );
}

export default HeroIntroduction;