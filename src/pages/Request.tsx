import { Helmet } from 'react-helmet-async';
import ConsultationForm from '../components/contact/ConsultationForm';

function Request() {
  const currentUrl = window.location.href;
  const siteName = "한국중소기업지원센터";

  return (
    <>
      <Helmet>
        {/* 기본 메타 태그 */}
        <title>상담 신청하기 | 정책자금 무료 컨설팅</title>
        <meta
          name="description"
          content="정책자금 신청을 위한 무료 상담을 신청하세요. 전문 컨설턴트가 대표님의 사업에 맞는 최적의 정책자금을 찾아드립니다."
        />
        <meta
          name="keywords"
          content="상담 신청, 정책자금 신청, 무료 상담, 정책자금 컨설팅, 사업자금 신청, 중소기업 지원, 정책자금 문의"
        />

        {/* Open Graph (Facebook, 카카오톡 등) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content="상담 신청하기 | 정책자금 무료 컨설팅" />
        <meta
          property="og:description"
          content="지금 바로 무료 상담을 신청하고 맞춤형 정책자금 솔루션을 받아보세요."
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
        <ConsultationForm />
      </div>
    </>
  );
}

export default Request;
