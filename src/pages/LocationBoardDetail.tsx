import { Helmet } from 'react-helmet-async';
import BoardDetail from "@/components/location/BoardDetail";

function LocationBoardDetail() {
    const currentUrl = window.location.href;
    const siteName = "한국중소기업지원센터";

    return (
        <>
            <Helmet>
                {/* 기본 메타 태그 */}
                <title>게시글 상세 | 한국중소기업지원센터 고객센터</title>
                <meta
                    name="description"
                    content="한국중소기업지원센터 고객센터 게시글을 확인하세요."
                />
                <meta
                    name="keywords"
                    content="고객센터, 게시판, 공지사항, 한국중소기업지원센터"
                />

                {/* Open Graph (Facebook, 카카오톡 등) */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content={currentUrl} />
                <meta property="og:title" content="게시글 상세 | 한국중소기업지원센터 고객센터" />
                <meta
                    property="og:description"
                    content="한국중소기업지원센터 고객센터 게시글을 확인하세요."
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
                <BoardDetail />
            </div>
        </>
    )
}

export default LocationBoardDetail;
