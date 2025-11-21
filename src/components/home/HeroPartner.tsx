import { FIREBASE_IMAGES } from '@/constants/firebaseImages';

function HeroPartner() {
  const socialLinks = [
    {
      icon: FIREBASE_IMAGES.assets.call,
      label: '전화문의',
      href: '/contact'
    },
    {
      icon: FIREBASE_IMAGES.assets.insta,
      label: '인스타그램',
      href: 'https://www.instagram.com/0kcsc0?igsh=MWtjeTBpNG52enRvMg=='
    },
    {
      icon: FIREBASE_IMAGES.assets.blog,
      label: '블로그',
      href: 'https://blog.naver.com/kcsc0'
    },
    {
      icon: FIREBASE_IMAGES.assets.youtube,
      label: '유튜브',
      href: 'https://www.youtube.com/channel/UCknU7UgElU6KrCR2EOYMUyQ'
    },
    {
      icon: FIREBASE_IMAGES.assets.kakao,
      label: '카카오톡',
      href: 'http://pf.kakao.com/_brxbTn'
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-black/80 overflow-hidden">
      {/* 배경 이미지 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('https://cdn.imweb.me/thumbnail/20250119/36ecbe95067b7.jpg')" }}
      >
        <img
          className="hidden"
          src="https://cdn.imweb.me/thumbnail/20250119/36ecbe95067b7.jpg"
          alt="mobile background"
          loading="lazy"
        />
      </div>

      {/* 배경 색상 오버레이 */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* 메인 콘텐츠 */}
      <main className="relative z-10 container mx-auto px-2 sm:px-4">
        {/* 메인 제목 */}
        <div className="animate-fadeInUp" style={{ animationDelay: '0.5s', animationDuration: '1s' }}>
          <h2 className="text-center mb-6 sm:mb-8 leading-relaxed">
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-2 sm:mb-4">
              이제 혼자 해결하려 애쓰지 마세요.
            </span>
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              <p className="text-[#ff7800] mb-1 sm:mb-2">맡기면 속도가 달라집니다.</p>
              <p className="text-white mb-1 sm:mb-2">대표님의 시간을 아껴</p>
              <p className="text-white">성과로 바꾸는 팀, 여기에 있습니다.</p>
            </span>
          </h2>
        </div>

        {/* 부제목 */}
        {/* <div className="animate-fadeInUp mt-8" style={{ animationDelay: '0.5s', animationDuration: '1s' }}>
          <p className="text-center text-xl text-white leading-[2.2]">
            그동안의 고생은 저희가 덜어드리겠습니다.
          </p>
          <p className="text-center text-xl text-white leading-[2.2]">
            시간과 기회 비용을 절감시켜, 성공으로 이끌어 드리겠습니다.
          </p>
        </div> */}

        {/* 가로선 */}
        <div className="my-8 sm:my-12">
          <hr className="border-t border-white/20" />
        </div>

        {/* 소셜 미디어 링크 */}
        <div className="animate-fadeInUp" style={{ animationDelay: '0.5s', animationDuration: '1s' }}>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 sm:gap-2 hover:opacity-80 transition-opacity"
              >
                <img
                  src={link.icon}
                  alt={link.label}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain"
                  loading="lazy"
                />
                <span className="text-[#dddddd] text-sm sm:text-base md:text-lg lg:text-xl whitespace-nowrap">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </main>
    </section>
  )
}

export default HeroPartner;