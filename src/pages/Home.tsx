import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/home/HeroSection';
import HeroService from '@/components/home/HeroService';
import HeroReview from '@/components/home/HeroReview';
import HeroIntroduction from '@/components/home/HeroIntruduction';
import HeroBrand from '@/components/home/HeroBrand';
import HeroNecessity from '@/components/home/HeroNecessity';
import HeroBeforeAfter from '@/components/home/HeroBeforeAfter';
import HeroHmm from '@/components/home/HeroHmm';
import HeroSecret from '@/components/home/HeroSecret';
import HeroNecessity2 from '@/components/home/HeroNecessity2';
import HeroNecessity3 from '@/components/home/HeroNecessity3';
import HeroConsulting from '@/components/home/HeroConsulting';

function Home() {
  const currentUrl = window.location.href;
  const siteName = "한국중소기업지원센터"; // 실제 서비스명으로 변경하세요
  
  return (
    <>
      <Helmet>
        {/* 기본 메타 태그 */}
        <title>정책자금 신청부터 승인까지 A to Z | 소상공인 정책자금 간편조회</title>
        <meta 
          name="description" 
          content="정책자금 신청부터 승인까지 완벽 지원. 중소기업, 소상공인, 자영업자를 위한 맞춤형 정책자금 컨설팅. 100% 실제 고객 후기, 무료 상담 신청하세요." 
        />
        <meta 
          name="keywords" 
          content="정책자금, 정책자금 신청, 정책자금 컨설팅, 소상공인 자금, 중소기업 자금, 창업자금, 사업자금 대출, 정책자금 승인, 자영업자 지원금" 
        />
        
        {/* Open Graph (Facebook, 카카오톡 등) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content="정책자금 신청부터 승인까지 A to Z | 소상공인 정책자금 간편조회" />
        <meta 
          property="og:description" 
          content="복잡한 정책자금 절차를 간편하게. 대표님들의 100% 실제 후기로 증명하는 전문 컨설팅 서비스" 
        />
        <meta property="og:image" content="/images/og-image.png" /> {/* 실제 이미지 경로로 변경 */}
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="ko_KR" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content="정책자금 신청부터 승인까지 A to Z" />
        <meta 
          name="twitter:description" 
          content="소상공인, 중소기업을 위한 정책자금 컨설팅. 신청부터 승인까지 완벽 지원" 
        />
        <meta name="twitter:image" content="/images/twitter-image.jpg" /> {/* 실제 이미지 경로로 변경 */}
        
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
        <HeroSection/>
        <HeroService/>
        <HeroReview/>
        <HeroIntroduction/>
        <HeroBrand/>
        <HeroNecessity/>
        <HeroBeforeAfter/>
        <HeroHmm/>
        <HeroSecret/>
        <HeroNecessity2/>
        <HeroNecessity3/>
        <HeroConsulting/>
      </div>
    </>
  )
}

export default Home;