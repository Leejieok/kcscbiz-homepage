interface ReviewCardProps {
  username: string;
  rating: number;
  date: string;
  title: string;
  content: string;
}

function ReviewCard({ username, rating, date, title, content }: ReviewCardProps) {
  return (
    <div className="border-2 border-gray-200 rounded-2xl p-8 hover:border-gray-300 transition-all">
      {/* Review Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <span className="text-xl font-bold text-gray-900">{username}</span>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
            <span className="text-lg font-semibold">{rating}</span>
          </div>
        </div>
        <span className="text-gray-500">{date}</span>
      </div>

      {/* Review Title */}
      <h4 className="text-lg font-semibold text-gray-900 mb-3">
        {title}
      </h4>

      {/* Review Content */}
      <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
        {content}
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
  );
}

export default ReviewCard;
