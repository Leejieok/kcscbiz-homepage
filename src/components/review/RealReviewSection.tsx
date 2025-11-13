import { useState } from 'react';

interface Review {
  id: string;
  username: string;
  rating: number;
  date: string;
  title: string;
  content: string;
}

function RealReviewSection() {
  const [activeFilter, setActiveFilter] = useState<string>('전체');

  const filters = ['저신용자', '소상공인', '정부지원금', '대환'];

  const reviews: Review[] = [
    {
      id: '1',
      username: 'f2k9**1',
      rating: 10.0,
      date: '2025.01.23',
      title: '미소금융 창업·운영자금 KCB 700점 또는 NICE 749점 이하 고객님',
      content: `아이고… 제가 이런 글을 쓰게 될 줄은 정말 몰랐어요.
        솔직히 신용점수도 700점도 안 되고, 500점대 후반에서 계속 머물러 있어서 희망도 많이 놓고 있었거든요. \n은행도 몇 번이나 문전박대 당하고… 혼자 끙끙 앓다가 상담 신청했는데, 이렇게 미소금융에서 운영자금 5천만원이나 승인될 줄은 정말 상상도 못 했어요.

        상담해주신 분들이 하나부터 열까지 천천히 설명해주시고, 제가 부족한 서류나 준비해야 할 것들도 다 챙겨주셔서 덕분에 큰 어려움 없이 진행됐습니다.
        정말 ‘이 나이에 뭘 또 해보겠나…’ 싶었는데, 이렇게 다시 숨 좀 돌릴 수 있게 도와주셔서 얼마나 감사한지 몰라요.

        사업하면서 힘든 날이 많았는데, 이번엔 정말 한 줄기 빛을 본 것 같아요.
        다시 한번 감사드리고, 주변에도 꼭 소개해 드릴게요. 고맙습니다 정말.`,
    },
  ];

  const stats = [
    { label: '진척도', percentage: 97 },
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

        {/* Keyword Search Section */}
        <div className="mb-12">
          <div className="flex items-center gap-4">
            <h3 className="text-2xl font-bold text-gray-900 whitespace-nowrap">키워드 검색</h3>
            <div className="flex-1 h-px bg-gray-300"></div>
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-full border-2 text-lg font-medium transition-all ${
                    activeFilter === filter
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
          <span className="text-gray-500">총 1,062개</span>
          <button type="button" className="text-gray-700 font-medium">최신순</button>
        </div>

        {/* Review Cards */}
        <div className="space-y-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="border-2 border-gray-200 rounded-2xl p-8 hover:border-gray-300 transition-all"
            >
              {/* Review Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <span className="text-xl font-bold text-gray-900">{review.username}</span>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">★</span>
                      ))}
                    </div>
                    <span className="text-lg font-semibold">{review.rating}</span>
                  </div>
                </div>
                <span className="text-gray-500">{review.date}</span>
              </div>

              {/* Review Title */}
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                {review.title}
              </h4>

              {/* Review Content */}
              <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
                {review.content}
              </p>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button type="button" className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-all">
                  도움이 돼요
                </button>
                <button type="button" className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-all">
                  도움이 안 돼요
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RealReviewSection;