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
            loading="lazy"
          />
        </div>
      </a>
    </div>
  );
}

export default ReviewCard;
