import { useState } from 'react';

interface ReviewCardProps {
  username: string;
  rating: number;
  date: string;
  title: string;
  content: string;
}

function ReviewCard({ username, rating, date, title, content }: ReviewCardProps) {
  const [helpfulStatus, setHelpfulStatus] = useState<'helpful' | 'not-helpful' | null>(null);

  return (
    <div className="border-2 border-gray-200 rounded-2xl p-8 hover:border-gray-300 transition-all">
      {/* Review Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          <span className="text-xl font-bold text-gray-900">{username}</span>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
            <span className="text-lg font-semibold">{rating}</span>
          </div>
          <span className="text-gray-500">{date}</span>
        </div>
      </div>

      {/* Review Title */}
      <h4 className="lg:text-lg font-semibold text-gray-900 mb-3">
        {title}
      </h4>

      {/* Review Content */}
      <p className="text-sm text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
        {content}
      </p>


      {/* Action Buttons */}
      <div className="flex gap-2 md:gap-3">
        <button
          type="button"
          onClick={() => setHelpfulStatus(helpfulStatus === 'helpful' ? null : 'helpful')}
          className={`px-3 py-1.5 md:px-6 md:py-2 border-2 rounded-full text-sm md:text-base font-medium transition-all ${helpfulStatus === 'helpful'
              ? 'border-green-500 bg-green-500 text-white hover:bg-green-600 hover:border-green-600'
              : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
            }`}
        >
          도움이 돼요
        </button>
        <button
          type="button"
          onClick={() => setHelpfulStatus(helpfulStatus === 'not-helpful' ? null : 'not-helpful')}
          className={`px-3 py-1.5 md:px-6 md:py-2 border-2 rounded-full text-sm md:text-base font-medium transition-all ${helpfulStatus === 'not-helpful'
              ? 'border-red-500 bg-red-500 text-white hover:bg-red-600 hover:border-red-600'
              : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
            }`}
        >
          도움이 안 돼요
        </button>
      </div>
    </div>
  );
}

export default ReviewCard;
