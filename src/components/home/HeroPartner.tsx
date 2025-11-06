function HeroPartner() {
  const socialLinks = [
    {
      icon: 'https://cdn.imweb.me/upload/S20241225c40935505f030/e4fb8ef33a3ad.png',
      label: '전화문의',
      href: 'https://www.krbizinfo.co.kr/75'
    },
    {
      icon: 'https://cdn.imweb.me/upload/S20241225c40935505f030/2b844ef2166cb.png',
      label: '인스타그램',
      href: 'https://www.instagram.com/krbizinfo/'
    },
    {
      icon: 'https://cdn.imweb.me/upload/S20241225c40935505f030/732af2b876132.png',
      label: '블로그',
      href: 'https://blog.naver.com/kr_bizinfo1'
    },
    {
      icon: 'https://cdn.imweb.me/upload/S20241225c40935505f030/90e3946a3e31a.png',
      label: '유튜브',
      href: 'https://www.youtube.com/@krbizinfo_co_kr'
    },
    {
      icon: 'https://cdn.imweb.me/upload/S20241225c40935505f030/aee450a07b93b.png',
      label: '카카오톡',
      href: 'http://pf.kakao.com/_xlNxoVn'
    }
  ];

  return (
    <section className="relative py-[100px] bg-black/80 overflow-hidden hidden md:block">
      {/* 배경 이미지 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('https://cdn.imweb.me/thumbnail/20250119/36ecbe95067b7.jpg')" }}
      >
        <img
          className="hidden"
          src="https://cdn.imweb.me/thumbnail/20250119/36ecbe95067b7.jpg"
          alt="mobile background"
        />
      </div>

      {/* 배경 색상 오버레이 */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* 메인 콘텐츠 */}
      <main className="relative z-10 container mx-auto px-4">
        {/* 메인 제목 */}
        <div className="animate-fadeInUp" style={{ animationDelay: '0.5s', animationDuration: '1s' }}>
          <h2 className="text-center mb-8">
            <span className="block text-5xl text-white mb-2">
              이제는 전문가에게 맡기세요.
            </span>
            <span className="block text-5xl">
              <span className="text-[#ff7800]">든든한 비즈니스 파트너</span>
              <span className="text-white">가 되어드리겠습니다.</span>
            </span>
          </h2>
        </div>

        {/* 부제목 */}
        <div className="animate-fadeInUp mt-8" style={{ animationDelay: '0.5s', animationDuration: '1s' }}>
          <p className="text-center text-xl text-white leading-[2.2]">
            그동안의 고생은 저희가 덜어드리겠습니다.
          </p>
          <p className="text-center text-xl text-white leading-[2.2]">
            시간과 기회 비용을 절감시켜, 성공으로 이끌어 드리겠습니다.
          </p>
        </div>

        {/* 가로선 */}
        <div className="my-12">
          <hr className="border-t border-white/20" />
        </div>

        {/* 소셜 미디어 링크 */}
        <div className="animate-fadeInUp" style={{ animationDelay: '0.5s', animationDuration: '1s' }}>
          <div className="flex justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <img
                  src={link.icon}
                  alt={link.label}
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
                <span className="text-[#dddddd] text-lg md:text-xl whitespace-nowrap">
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