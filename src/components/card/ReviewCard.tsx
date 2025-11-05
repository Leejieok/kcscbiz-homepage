import type { ReviewData } from '@/data/reviews';

interface ReviewCardProps {
  review: ReviewData;
}

function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="flex-shrink-0 w-full max-w-[600px] overflow-hidden">
      <a href={review.link}>
        <div className="overflow-hidden max-h-[567px]">
          <img
            src={review.image}
            alt="project-thumb"
            className="w-full h-full object-cover"
            style={{
              opacity: 1,
              visibility: 'inherit'
            }}
          />
        </div>
      </a>
      <div className="mt-4">
        <h5 className="line-clamp-1 text-3xl font-semibold mb-2">
          <a href={review.link} className="hover:text-blue-600 transition-colors">
            {review.title}
          </a>
        </h5>
        <span className="text-lg flex items-center gap-2">
          {review.categoryEn}
          <i className="bi bi-dash">-</i>
          {review.categoryKr}
        </span>
      </div>
    </div>
  );
}

export default ReviewCard;
