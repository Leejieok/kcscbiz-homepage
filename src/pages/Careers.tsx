import { Helmet } from 'react-helmet-async';

function Careers() {
  const currentUrl = window.location.href;
  const siteName = "한국중소기업지원센터";

  return (
    <>
      <Helmet>
        {/* 기본 메타 태그 */}
        <title>인재채용 | 한국중소기업지원센터와 함께 성장하세요</title>
        <meta
          name="description"
          content="한국중소기업지원센터와 함께 성장할 인재를 모집합니다. 중소기업을 지원하는 보람찬 일에 동참하세요."
        />
        <meta
          name="keywords"
          content="인재채용, 채용공고, 한국중소기업지원센터 채용, 구인구직, 취업, 채용정보, 입사지원"
        />

        {/* Open Graph (Facebook, 카카오톡 등) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content="인재채용 | 한국중소기업지원센터와 함께 성장하세요" />
        <meta
          property="og:description"
          content="중소기업 지원의 최전선에서 함께할 인재를 찾습니다."
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

      <div className="min-h-screen bg-dark-bg text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-12">
            인재채용
          </h1>
          <div className="text-center text-gray-300">
            <p className="text-xl mb-6">
              한국중소기업지원센터와 함께 성장할 인재를 모집합니다.
            </p>
            <p className="text-lg">
              채용 공고를 준비중입니다.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Careers;
