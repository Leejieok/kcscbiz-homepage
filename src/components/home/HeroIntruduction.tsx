import { useState, useMemo, useEffect } from 'react';
import { reviews } from '@/data/reviewData';
import { FIREBASE_IMAGES } from '@/constants/firebaseImages';

// 리뷰 이미지 매핑
const reviewImages = [
  FIREBASE_IMAGES.images.review01,
  FIREBASE_IMAGES.images.review02,
  FIREBASE_IMAGES.images.review03,
  FIREBASE_IMAGES.images.review04,
  FIREBASE_IMAGES.images.review05,
  FIREBASE_IMAGES.images.review06,
  FIREBASE_IMAGES.images.review07,
  FIREBASE_IMAGES.images.review08,
  FIREBASE_IMAGES.images.review09,
  FIREBASE_IMAGES.images.review10,
  FIREBASE_IMAGES.images.reviews11,
  FIREBASE_IMAGES.images.reviews12,
];

function HeroIntroduction() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 모달 열렸을 때 body 스크롤 방지
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // 평균 평점 계산 (10점 만점을 5점 만점으로 변환)
  const averageRating = useMemo(() => {
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    const avg10 = sum / reviews.length;
    const avg5 = avg10 / 2; // 10점 만점을 5점 만점으로 변환
    return avg5.toFixed(1);
  }, []);

  // 처음 3개 리뷰만 표시
  const displayedReviews = reviews.slice(0, 3);

  // 별점 렌더링 (10점 만점을 5점 만점으로 변환)
  const renderStars = (rating: number) => {
    // 10점 만점을 5점 만점으로 변환
    const rating5 = rating / 2;
    const fullStars = Math.floor(rating5);
    const hasHalfStar = rating5 % 1 >= 0.5;
    
    return (
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return (
              <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            );
          } else if (i === fullStars && hasHalfStar) {
            return (
              <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <defs>
                  <linearGradient id={`half-${i}`}>
                    <stop offset="50%" stopColor="currentColor" />
                    <stop offset="50%" stopColor="transparent" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <path fill={`url(#half-${i})`} d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            );
          } else {
            return (
              <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-gray-300 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            );
          }
        })}
      </div>
    );
  };

  return (
    <>
      <section className="w-full pt-8 md:pt-20 pb-12 bg-white" aria-label="고객 후기 섹션">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* 리뷰 요약 섹션 */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div className="flex flex-col gap-4 mb-4 md:mb-0">
              <div className="flex items-center gap-4">
                <span className="text-lg md:text-xl font-semibold text-gray-700">
                  리뷰 {reviews.length.toLocaleString()}
                </span>
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-orange-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <span className="text-lg md:text-xl font-bold text-gray-900">
                    {averageRating} / 5
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 self-start md:self-auto"
            >
              전체보기
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* 리뷰 카드 가로 스크롤 */}
          <div className="relative -mx-4 md:-mx-6 lg:-mx-8">
            <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory" style={{ scrollBehavior: 'smooth' }}>
              <div className="flex gap-4 px-4 md:px-6 lg:px-8 pb-4">
                {displayedReviews.map((review, index) => (
                  <div
                    key={review.id}
                    className="flex-shrink-0 w-[85vw] md:w-[400px] lg:w-[450px] bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow snap-center"
                  >
                    {/* 리뷰 이미지 */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={reviewImages[index] || FIREBASE_IMAGES.images.review01}
                        alt={review.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* 리뷰 내용 */}
                    <div className="p-4">
                      <p className="text-sm text-gray-700 line-clamp-3 mb-2">
                        {review.content.split('\n')[0]}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{review.username}</span>
                        <span>{review.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 전체 리뷰 모달 */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[1000] overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsModalOpen(false);
            }
          }}
        >
          {/* 오버레이 */}
          <div className="fixed inset-0 bg-black bg-opacity-50" />
          
          {/* 모달 컨텐츠 */}
          <div
            className="relative min-h-screen bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 모달 헤더 */}
            <div className="sticky top-0 bg-white border-b border-gray-200 z-10 px-4 py-4 flex items-center justify-center shadow-sm">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute left-4 p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-700 hover:text-gray-900"
                aria-label="닫기"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h2 className="text-lg font-bold text-gray-900">리뷰</h2>
            </div>

            {/* 리뷰 리스트 */}
            <div className="max-w-4xl mx-auto px-4 py-6 pb-20">
              {reviews.map((review, index) => (
                <div
                  key={review.id}
                  className="border-b border-gray-200 pb-6 mb-6 last:border-b-0 last:mb-0"
                >
                  {/* 리뷰어 정보 */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">
                      {review.username.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-gray-900">{review.username}</span>
                        {index < 3 && (
                          <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                            상위 {index + 1}%
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        {renderStars(review.rating)}
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* 리뷰 이미지 */}
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img
                      src={reviewImages[index] || FIREBASE_IMAGES.images.review01}
                      alt={review.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  {/* 리뷰 제목 */}
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    {review.title}
                  </h3>

                  {/* 리뷰 내용 */}
                  <p className="text-sm text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
                    {review.content}
                  </p>

                  {/* 키워드 태그 */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {review.keywords.map((keyword, keyIndex) => (
                      <span
                        key={keyIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>

                  {/* 액션 버튼 */}
                  <div className="flex gap-3">
                    <button className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      도움이 돼요
                    </button>
                    <button className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      댓글달기
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HeroIntroduction;
