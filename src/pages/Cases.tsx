import { Helmet } from 'react-helmet-async';
import BannerSection from "@/components/cases/BannerSection";
import CautionSection from "@/components/cases/CautionSection";
import QnASection from "@/components/cases/QnASection";
import QnATitleSection from "@/components/cases/QnATitleSection";

function Cases() {
  const currentUrl = window.location.href;
  const siteName = "한국중소기업지원센터";

  return (
    <>
      <Helmet>
        {/* 기본 메타 태그 */}
        <title>자주 묻는 질문 | 정책자금 신청 Q&A</title>
        <meta
          name="description"
          content="정책자금 신청에 대해 자주 묻는 질문과 답변을 확인하세요. 대표님들의 궁금증을 시원하게 해결해드립니다."
        />
        <meta
          name="keywords"
          content="정책자금 FAQ, 정책자금 질문, 정책자금 신청방법, 자주 묻는 질문, 정책자금 안내, 정책자금 Q&A"
        />

        {/* Open Graph (Facebook, 카카오톡 등) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content="자주 묻는 질문 | 정책자금 신청 Q&A" />
        <meta
          property="og:description"
          content="정책자금 신청에 대한 궁금증을 한 번에 해결하세요. 실제 사례 기반 Q&A 제공"
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
        <BannerSection/>
        <CautionSection/>
        <QnATitleSection/>
        <QnASection/>
      </div>
    </>
  )
}

export default Cases;