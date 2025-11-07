import { Helmet } from 'react-helmet-async';
import ApplicationForm from "@/components/form/ApplicationForm";
import ChechlistSection from "../../components/service/tax-refund/ChecklistSection";
import HookSection from "../../components/service/tax-refund/HookSection";
import ProblemSection from "../../components/service/tax-refund/ProblemSection";
import SolutionSection from "../../components/service/tax-refund/SolutionSection";

//세금환급 컨설팅 페이지
function Service1() {
  const currentUrl = window.location.href;
  const siteName = "한국중소기업지원센터";

  return (
    <>
      <Helmet>
        {/* 기본 메타 태그 */}
        <title>세금환급 컨설팅 | 과납한 세금 5년치 환급 받기</title>
        <meta
          name="description"
          content="사업자 70%가 세금을 과납하고 있습니다. 지난 5년간 과납한 세금을 지금 확인하고 환급 받으세요. 무료 조회 서비스 제공."
        />
        <meta
          name="keywords"
          content="세금환급, 세금환급 컨설팅, 과납세금 환급, 중소기업 세금환급, 소상공인 세금환급, 세금 돌려받기, 5년치 세금환급, 세금 절세"
        />

        {/* Open Graph (Facebook, 카카오톡 등) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content="세금환급 컨설팅 | 과납한 세금 5년치 환급 받기" />
        <meta
          property="og:description"
          content="지난 5년간 과납한 세금을 무료로 조회하고 환급 받으세요. 놓치면 국고에 귀속됩니다."
        />
        <meta property="og:image" content="/images/tax-refund-og-image.png" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="ko_KR" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content="세금환급 컨설팅 | 과납한 세금 5년치 환급 받기" />
        <meta
          name="twitter:description"
          content="사업자 70%가 세금을 과납하고 있습니다. 지금 바로 환급 받으세요."
        />
        <meta name="twitter:image" content="/images/tax-refund-twitter-image.jpg" />

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
        <ProblemSection/>
        <ChechlistSection/>
        <HookSection/>
        <SolutionSection/>
        <ApplicationForm/>
      </div>
    </>
  )
}

export default Service1;