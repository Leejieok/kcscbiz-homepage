import { Helmet } from 'react-helmet-async';
import CertNecessity from "@/components/service/certification/CertNecessity";
import CertHelpSection from "../../components/service/certification/CertHelpSection";
import CertIntroSection from "../../components/service/certification/CertIntroSection";
import ProblemSection from "../../components/service/certification/ProblemSection";
import SupportIntro from "../../components/service/certification/SupportIntro";
import GallerySection from "@/components/service/certification/GallerySection";
import ApplicationForm from "@/components/form/ApplicationForm";


//기업인증 컨설팅 페이지
function Service3() {
  const currentUrl = window.location.href;
  const siteName = "한국중소기업지원센터";

  return (
    <>

      <Helmet>
        {/* 기본 메타 태그 */}
        <title>기업인증 컨설팅 | 벤처기업, ISO 인증 지원</title>
        <meta
          name="description"
          content="벤처기업 인증, ISO 인증, 이노비즈 등 각종 기업 인증 취득을 위한 전문 컨설팅 서비스를 제공합니다."
        />
        <meta
          name="keywords"
          content="기업인증, 벤처기업 인증, ISO 인증, 이노비즈, 메인비즈, 기업 인증 컨설팅, 중소기업 인증"
        />

        {/* Open Graph (Facebook, 카카오톡 등) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content="기업인증 컨설팅 | 벤처기업, ISO 인증 지원" />
        <meta
          property="og:description"
          content="기업 경쟁력 강화를 위한 각종 인증 취득 컨설팅. 전문가가 함께합니다."
        />
        <meta property="og:image" content="/images/certification-og-image.png" />
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

      <div>
        <ProblemSection />
        <SupportIntro />
        <CertIntroSection />
        <CertHelpSection />
        <CertNecessity />
        <GallerySection />
        <ApplicationForm
          title={{
            highlight: '대표님 상황에 꼭 맞춘',
            main: '기업인증 솔루션 신청하기'
          }}
        />
      </div>
    </>
  )
}

export default Service3;