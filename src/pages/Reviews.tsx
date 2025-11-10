import HelpSection from "@/components/review/HelpSection";
import RealReviewSection from "@/components/review/RealReviewSection";
import ReviewSection from "@/components/review/ReviewSection";

function Reviews() {
  return (
    <div className="min-h-screen text-white py-20">
      <ReviewSection/>
      <RealReviewSection/>
      <HelpSection/>
    </div>
  );
}

export default Reviews;
