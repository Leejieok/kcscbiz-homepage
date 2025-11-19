import { Helmet } from 'react-helmet-async';
import AboutIntroduce from "@/components/about/AboutIntroduce";
import AboutSection from "@/components/about/AboutSection";
// import AboutPromises from "@/components/about/AboutPromises";
import HeroNecessity3 from '@/components/home/HeroNecessity3';

function About() {
  const currentUrl = window.location.href;
  const siteName = "한국중소기업지원센터";

  return (
    <>
      <Helmet>
        {/* 기본 메타 태그 */}
        <title>회사소개 | 한국중소기업지원센터</title>
        <meta
          name="description"
          content="한국중소기업지원센터는 중소기업과 소상공인의 성장을 돕는 정책자금 전문 기관입니다. 신뢰할 수 있는 자금 지원 서비스를 제공합니다."
        />
        <meta
          name="keywords"
          content="한국중소기업지원센터, 회사소개, 중소기업 지원, 정책자금 전문기관, 소상공인 지원, 기업 소개"
        />

        {/* Open Graph (Facebook, 카카오톡 등) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content="회사소개 | 한국중소기업지원센터" />
        <meta
          property="og:description"
          content="중소기업과 소상공인의 든든한 파트너, 한국중소기업지원센터를 소개합니다."
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

      <div className="w-full">
        <AboutSection/>
        <AboutIntroduce/>
        <HeroNecessity3/>
        {/* <AboutPromises/> */}
      </div>
    </>
  )
}

export default About;