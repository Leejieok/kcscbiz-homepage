import { Helmet } from 'react-helmet-async';
import HelpSection from "@/components/review/HelpSection";
import RealReviewSection from "@/components/review/RealReviewSection";
import ReviewSection from "@/components/review/ReviewSection";
import Navbar from "@/components/Navbar";

function Reviews() {
  const currentUrl = window.location.href;
  const siteName = "한국중소기업지원센터";

  return (
    <>
      <Navbar />
      <Helmet>
        {/* 기본 메타 태그 */}
        <title>고객 후기 | 100% 실제 대표님들의 정책자금 승인 후기</title>
        <meta
          name="description"
          content="실제 대표님들이 직접 남긴 100% 진짜 후기를 확인하세요. 정책자금 신청부터 승인까지의 생생한 경험담을 공유합니다."
        />
        <meta
          name="keywords"
          content="정책자금 후기, 고객 후기, 정책자금 승인 사례, 실제 후기, 중소기업 후기, 소상공인 리뷰, 정책자금 성공사례"
        />

        {/* Open Graph (Facebook, 카카오톡 등) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content="고객 후기 | 100% 실제 대표님들의 정책자금 승인 후기" />
        <meta
          property="og:description"
          content="가짜 없는 진짜 후기! 대표님들이 직접 남긴 정책자금 신청 성공 사례를 확인하세요."
        />
        <meta property="og:image" content="/images/og-image.png" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="ko_KR" />

        {/* 추가 SEO 메타 태그 */}
        <meta name="author" content={siteName} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Korean" />
        <meta name="revisit-after" content="7 days" />

        {/* Canonical URL (중복 콘텐츠 방지) */}
        <link rel="canonical" href={currentUrl} />

        {/* 추가 링크 태그 */}
        <link rel="alternate" hrefLang="ko" href={currentUrl} />
      </Helmet>

      <div className="min-h-screen text-white">
        <ReviewSection/>
        <RealReviewSection/>
        <HelpSection/>
      </div>
    </>
  );
}

export default Reviews;
