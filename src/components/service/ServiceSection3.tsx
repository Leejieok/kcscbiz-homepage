import { useEffect, useState, useRef } from 'react';

function ServiceSection3() {
  const reasons = [
    { id: 1, text: '거래처에게 결제', bold: true, text2: '를 못 받고 있어요.' },
    { id: 2, text: '7% 이상의 높은 금리', bold: true, text2: '를 대환하고 싶어요.' },
    { id: 3, text: '정책자금 신청 후 부결', bold: true, text2: '을 받았어요.' },
    { id: 4, text: '원자재, 식자재를 ', bold: false, boldPart: '대량 매입', text2: '하고 싶어요.' },
    { id: 5, text: '자금 사용 계획', bold: true, text2: '을 명확히 안내 받고 싶어요.' },
    { id: 6, text: '빠른 정책 자금 조달', bold: true, text2: '이 필요해요.' },
  ];

  const iconUrl = 'https://cdn.imweb.me/upload/S20231213aa2eeb2497234/31d4e85ad386e.png';

  const desktopRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Determine which container to use based on window width
      const isMobile = window.innerWidth < 1024; // lg breakpoint
      const container = isMobile ? mobileRef.current : desktopRef.current;

      if (!container) return;

      const rect = container.getBoundingClientRect();
      const containerTop = rect.top;
      const containerHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress through the container
      const scrollStart = 0;
      const scrollEnd = containerHeight - windowHeight;
      const currentScroll = -containerTop;

      const progress = Math.max(0, Math.min(1, (currentScroll - scrollStart) / scrollEnd));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Only show fixed content when section is in viewport
  const isInViewport = scrollProgress > 0 && scrollProgress < 1;

  // Shared animation logic
  const renderAnimatedReasons = (isMobile = false) => {
    return reasons.map((reason, index) => {
      // Calculate individual card progress
      const cardStart = index / reasons.length;
      const cardEnd = (index + 1) / reasons.length;
      const cardProgress = (scrollProgress - cardStart) / (cardEnd - cardStart);

      // Opacity: fade in and out
      let opacity = 0;
      if (cardProgress >= 0 && cardProgress <= 1) {
        opacity = Math.sin(cardProgress * Math.PI); // Smooth fade in/out
      }

      // Transform: slight movement
      const translateY = (1 - cardProgress) * (isMobile ? 20 : 30);

      return (
        <div
          key={reason.id}
          className="absolute inset-0 flex items-center justify-center"
          style={{
            opacity,
            transform: `translateY(${translateY}px)`,
            transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
          }}
        >
          <div className={`bg-white/90 backdrop-blur-sm ${isMobile ? 'rounded-2xl p-6' : 'rounded-3xl p-12'} shadow-2xl border border-blue-100 ${isMobile ? 'w-full' : ''}`}>
            <p className={`${isMobile ? 'text-lg' : 'text-4xl'} leading-relaxed flex ${isMobile ? 'items-start' : 'items-center justify-center'}`}>
              <img
                src={iconUrl}
                alt=""
                className={`${isMobile ? 'w-6 h-6 mr-3 mt-1' : 'w-8 h-8 mr-4'} ${isMobile ? 'flex-shrink-0' : ''}`}
                aria-hidden="true"
                loading="lazy"
              />
              <span>
                {reason.id === 4 ? (
                  <>
                    {reason.text}
                    <strong className="text-blue-600 font-bold">{reason.boldPart}</strong>
                    {reason.text2}
                  </>
                ) : (
                  <>
                    <strong className="text-blue-600 font-bold">{reason.text}</strong>
                    {reason.text2}
                  </>
                )}
              </span>
            </p>
          </div>
        </div>
      );
    });
  };

  return (
    <section className="w-full relative bg-white">
      <main className="relative z-10">
        <div className="px-3 mx-auto" style={{ maxWidth: '1280px' }}>

          {/* 데스크톱 레이아웃 (lg 이상) - Scroll Animation */}
          <div
            ref={desktopRef}
            className="hidden lg:block relative"
            style={{
              minHeight: `${reasons.length * 100}vh`,
              paddingTop: '100px',
              paddingBottom: '100px'
            }}
          >
            {/* Fixed content container - only show when section is in viewport */}
            {isInViewport && (
              <div
                className="fixed top-0 left-0 right-0 h-screen flex items-center justify-center pointer-events-none"
                style={{
                  zIndex: 10,
                }}
              >
                <div className="max-w-4xl mx-auto px-8 w-full pointer-events-auto">
                  {/* Background image */}
                  <div
                    className="absolute inset-0 -z-10 bg-cover bg-center"
                  ></div>

                  {/* Header */}
                  <div className="text-center mb-16">
                    <h2 className="text-3xl text-gray-600 mb-4">
                      이런 대표님들에겐
                    </h2>
                    <h2 className="text-5xl font-bold">
                      <span className="text-blue-600">정책자금 컨설팅</span>이 꼭 필요합니다!
                    </h2>
                  </div>

                  {/* Animated reasons - overlapping */}
                  <div className="relative h-64">
                    {renderAnimatedReasons(false)}
                  </div>

                  {/* Progress indicator */}
                  <div className="mt-16 flex justify-center gap-2">
                    {reasons.map((_, index) => {
                      const isActive = scrollProgress >= index / reasons.length &&
                        scrollProgress < (index + 1) / reasons.length;
                      return (
                        <div
                          key={index}
                          className="h-2 rounded-full transition-all duration-300"
                          style={{
                            width: isActive ? '32px' : '8px',
                            backgroundColor: isActive ? '#2563eb' : '#cbd5e1',
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 모바일 레이아웃 (lg 미만) - Scroll Animation */}
          <div
            ref={mobileRef}
            className="lg:hidden relative"
            style={{
              minHeight: `${reasons.length * 100}vh`,
              paddingTop: '50px',
              paddingBottom: '50px'
            }}
          >
            {/* Fixed content container - only show when section is in viewport */}
            {isInViewport && (
              <div
                className="fixed top-0 left-0 right-0 h-screen flex items-center justify-center pointer-events-none px-4"
                style={{
                  zIndex: 10,
                }}
              >
                <div className="w-full max-w-md pointer-events-auto">
                  {/* Background image */}
                  <div
                    className="absolute inset-0 -z-10 bg-cover bg-center"
                  ></div>

                  {/* Header */}
                  <div className="text-center mb-12">
                    <h2 className="text-xl text-gray-600 mb-3">
                      이런 대표님들에겐
                    </h2>
                    <h2 className="text-2xl font-bold">
                      <span className="text-blue-600">정책자금 컨설팅</span>이<br />꼭 필요합니다!
                    </h2>
                  </div>

                  {/* Animated reasons - overlapping */}
                  <div className="relative h-48">
                    {renderAnimatedReasons(true)}
                  </div>

                  {/* Progress indicator */}
                  <div className="mt-12 flex justify-center gap-2">
                    {reasons.map((_, index) => {
                      const isActive = scrollProgress >= index / reasons.length &&
                        scrollProgress < (index + 1) / reasons.length;
                      return (
                        <div
                          key={index}
                          className="h-1.5 rounded-full transition-all duration-300"
                          style={{
                            width: isActive ? '24px' : '6px',
                            backgroundColor: isActive ? '#2563eb' : '#cbd5e1',
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </main>
    </section>
  );
}

export default ServiceSection3;