import ImageCarousel from '../card/ImageCarousel';

function HeroBrand() {
  const images = [
    'https://cdn.imweb.me/thumbnail/20250119/ee7e5c3eca9f7.jpg',
    'https://cdn.imweb.me/thumbnail/20250119/4a8698dc382b7.jpg',
    'https://cdn.imweb.me/thumbnail/20250119/9617acc6120e3.jpg',
    'https://cdn.imweb.me/thumbnail/20250119/437f8c0f8528d.jpg',
    'https://cdn.imweb.me/thumbnail/20250119/83fdbe5522e14.jpg',
    'https://cdn.imweb.me/thumbnail/20250119/f845e6002470f.jpg'
  ];

  return (
    <section className="w-full py-[80px] bg-[#f6f6f6] relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* 왼쪽 갤러리 슬라이더 - 5/12 */}
          <div className="lg:col-span-5">
            <ImageCarousel images={images} autoPlayInterval={3000} height="503px" />
          </div>

          {/* 오른쪽 텍스트 콘텐츠 - 7/12 */}
          <div className="lg:col-span-7 ">
            <div className="space-y-6">
              {/* 여백 */}

              {/* 제목 */}
              <div className="animate-fadeInUp">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight pb-3">
                  인증도 안 된 회사에
                </h2>
                  <span className="text-blue-700 text-4xl md:text-5xl font-bold tracking-tight">골든 타임을 </span> <span className='text-4xl md:text-5xl font-bold leading-tight'>맡기시겠습니까?</span>
              </div>

              {/* 본문 */}
              <div className="animate-fadeInUp animation-delay-200">
                <p className="text-lg md:text-xl leading-relaxed" style={{ lineHeight: '2.2' }}>
                  딱 한번만 도와주고 연락 끊기는 회사들,<br />
                  <strong className="text-orange-500">대표님 성공엔 아무 관심 없습니다.</strong><br />
                  한비즈는 자금 실행이 끝이 아니라 시작입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBrand;