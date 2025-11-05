import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/home/HeroSection';
import HeroService from '@/components/home/HeroService';


function Home() {
  return (
    <>
      <Helmet>
        <title>소상공인 정책자금 간편조회</title>
        <meta name="description" content="복잡한 정책자금 절차를 간편하게. 중소기업, 자영업자 대상 승인율 높은 자금조회 서비스" />
      </Helmet>

      <div className="w-full">
        <HeroSection />
        <HeroService/>
      </div>
    </>
  )
}

export default Home;