import { Helmet } from 'react-helmet-async';
import ServiceSection from "@/components/service/ServiceSection";
import ServiceSection2 from '@/components/service/ServiceSection2';
import ServiceSection3 from '@/components/service/ServiceSection3';
import ServiceSection4 from '@/components/service/ServiceSection4';
import ServiceSection5 from '@/components/service/ServiceSection5';
import ServiceSection6 from '@/components/service/ServiceSection6';
import ApplicationForm from '@/components/form/ApplicationForm';

function ServiceMain() {
  const currentUrl = window.location.href;
  const siteName = "한국중소기업지원센터";

  return (
    <>
      <Helmet>
        {/* 기본 메타 태그 */}
        <title>정책자금 서비스 안내 | 업종별 맞춤 자금 지원</title>
        <meta
          name="description"
          content="간이과세자도 최대 1억 원까지 지원! 업종별 맞춤 정책자금 한도를 확인하고 놓치고 있는 자금을 바로 알아보세요."
        />
        <meta
          name="keywords"
          content="정책자금 서비스, 업종별 정책자금, 간이과세 자금지원, 정책자금 한도, 소상공인 자금, 중소기업 자금지원, 업종별 자금한도"
        />

        {/* Open Graph (Facebook, 카카오톡 등) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content="정책자금 서비스 안내 | 업종별 맞춤 자금 지원" />
        <meta
          property="og:description"
          content="간이과세자도 최대 1억 원까지! 대표님의 업종에 맞는 정책자금 한도를 지금 확인하세요."
        />
        <meta property="og:image" content="/images/service-og-image.png" />
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
        <ServiceSection />
        <ServiceSection3 />
        <ServiceSection4 />
        <ServiceSection2 />
        <ServiceSection5 />
        <ServiceSection6 />
        <ApplicationForm
          title={{
            highlight: '대표님 상황에 꼭 맞춘',
            main: '정책자금 솔루션 신청하기'
          }}
        />
      </div>
    </>
  )
}

export default ServiceMain;