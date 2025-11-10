import { Helmet } from 'react-helmet-async';
import BannerSection from "@/components/location/BannerSection";
import BoardSection from "@/components/location/BoardSection";

function Location() {
  const currentUrl = window.location.href;
  const siteName = "한국중소기업지원센터";

  return (
    <>
      <Helmet>
        {/* 기본 메타 태그 */}
        <title>오시는 길 | 한국중소기업지원센터 위치 안내</title>
        <meta
          name="description"
          content="한국중소기업지원센터 오시는 길을 안내합니다. 상담 및 방문을 위한 위치 정보와 찾아오시는 방법을 확인하세요."
        />
        <meta
          name="keywords"
          content="오시는 길, 한국중소기업지원센터 위치, 센터 주소, 찾아오는 길, 센터 방문, 상담 위치"
        />

        {/* Open Graph (Facebook, 카카오톡 등) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content="오시는 길 | 한국중소기업지원센터 위치 안내" />
        <meta
          property="og:description"
          content="한국중소기업지원센터로 오시는 길과 위치 정보를 확인하세요."
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
        <BoardSection/>
      </div>
    </>
  )
}

export default Location;