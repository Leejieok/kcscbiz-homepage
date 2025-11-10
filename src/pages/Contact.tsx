import { Helmet } from 'react-helmet-async';
import ConsultationForm from "@/components/contact/ConsultationForm";

function Contact() {
  const currentUrl = window.location.href;
  const siteName = "한국중소기업지원센터";

  return (
    <>
      <Helmet>
        {/* 기본 메타 태그 */}
        <title>무료 상담 신청 | 정책자금 맞춤 컨설팅</title>
        <meta
          name="description"
          content="정책자금 전문가와 무료 상담을 신청하세요. 대표님의 사업 상황에 맞는 최적의 정책자금 솔루션을 제공합니다."
        />
        <meta
          name="keywords"
          content="무료 상담, 정책자금 상담, 정책자금 신청, 무료 컨설팅, 사업자금 상담, 정책자금 문의, 중소기업 상담"
        />

        {/* Open Graph (Facebook, 카카오톡 등) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content="무료 상담 신청 | 정책자금 맞춤 컨설팅" />
        <meta
          property="og:description"
          content="전문가와의 1:1 무료 상담으로 맞춤형 정책자금 솔루션을 받아보세요."
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

      <div>
        <ConsultationForm/>
      </div>
    </>
  )
}

export default Contact;