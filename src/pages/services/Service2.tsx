import { Helmet } from 'react-helmet-async';
import ProblemSection from "../../components/service/corporate-business/ProblemSection";
import GuideSection from '../../components/service/corporate-business/GuideSection';
import ProcessSection from '../../components/service/corporate-business/ProcessSection';
import HookSection from '../../components/service/corporate-business/HookSection';
import ApplicationForm from '@/components/form/ApplicationForm';


// 법인사업자 컨설팅 페이지
function Service2() {
  const currentUrl = window.location.href;
  const siteName = "한국중소기업지원센터";

  return (
    <>

      <Helmet>
        {/* 기본 메타 태그 */}
        <title>법인사업자 컨설팅 | 법인 설립부터 세무까지 원스톱 지원</title>
        <meta
          name="description"
          content="법인 설립, 세무 관리, 정책자금 신청까지 법인사업자를 위한 종합 컨설팅 서비스를 제공합니다. 전문가가 함께합니다."
        />
        <meta
          name="keywords"
          content="법인사업자, 법인설립, 법인사업자 컨설팅, 법인 세무관리, 법인 정책자금, 법인세무, 법인 절세, 중소기업 법인"
        />

        {/* Open Graph (Facebook, 카카오톡 등) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content="법인사업자 컨설팅 | 법인 설립부터 세무까지 원스톱 지원" />
        <meta
          property="og:description"
          content="법인 설립, 세무 관리, 정책자금까지 법인사업자를 위한 종합 컨설팅 서비스"
        />
        <meta property="og:image" content="/images/corporate-og-image.png" />
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
        <GuideSection />
        <ProcessSection />
        <HookSection />
        <ApplicationForm
          title={{
            highlight: '대표님 상황에 꼭 맞춘',
            main: '법인사업자 솔루션 신청하기'
          }}
        />
      </div>
    </>
  )
}

export default Service2;