import { useState, useMemo } from 'react';
import ReviewCard from '../card/ReviewCard';
import { reviews } from '../../data/reviewData';

function RealReviewSection() {
  const [activeFilter, setActiveFilter] = useState<string>('전체');

  const filters = ['전체', '저신용자', '소상공인', '정부지원금', '대환'];

  // 키워드에 따라 리뷰 필터링 및 최신순 정렬
  const filteredReviews = useMemo(() => {
    let filtered = activeFilter === '전체'
      ? reviews
      : reviews.filter(review => review.keywords.includes(activeFilter));

    // 날짜 기준 내림차순 정렬 (최신순)
    return filtered.sort((a, b) => {
      const dateA = new Date(a.date.replace(/\./g, '-'));
      const dateB = new Date(b.date.replace(/\./g, '-'));
      return dateB.getTime() - dateA.getTime();
    });
  }, [activeFilter]);

  const stats = [
    { label: '친절도', percentage: 97 },
    { label: '상담 만족도', percentage: 95 },
    { label: '자금 컨설팅', percentage: 88 },
    { label: '대기시간', percentage: 84 },
  ];

  return (
    <div className="relative py-20 px-5 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Title */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-2">
            자금 성공 후기
            <span className="text-2xl">↓</span>
          </h2>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 pb-16 border-b">
          {/* Left: Rating */}
          <div className="flex flex-col items-center justify-center">
            <div className="text-7xl font-bold text-blue-500 mb-4">9.7</div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-3xl">★</span>
              ))}
            </div>
          </div>

          {/* Right: Progress Bars */}
          <div className="space-y-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600 text-lg">{stat.label}</span>
                  <span className="text-gray-900 font-semibold text-lg">{stat.percentage}%</span>
                </div>
                <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-emerald-400 rounded-full transition-all duration-500"
                    style={{ width: `${stat.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Keyword Search Section - Mobile Responsive */}
        <div className="mb-12">
          {/* Mobile: Stack vertically, Desktop: Horizontal layout */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-4">
            {/* Title and divider line */}
            <div className="flex items-center gap-4 lg:flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 whitespace-nowrap">키워드 검색</h3>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 md:gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-full border-2 text-sm md:text-lg font-medium transition-all ${activeFilter === filter
                    ? 'border-gray-900 bg-gray-900 text-white'
                    : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Review List Header */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-gray-500">총 {filteredReviews.length}개</span>
          <button type="button" className="text-gray-700 font-medium">최신순</button>
        </div>

        {/* Review Cards */}
        <div className="space-y-6">
          {filteredReviews.map((review) => (
            <ReviewCard
              key={review.id}
              username={review.username}
              rating={review.rating}
              date={review.date}
              title={review.title}
              content={review.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RealReviewSection;