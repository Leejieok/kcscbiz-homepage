import { useEffect, useRef, useState } from 'react';
import { FIREBASE_IMAGES } from '../../constants/firebaseImages';

interface PolicyCard {
  title: string;
  description: string;
  bgColor: 'white' | 'dark';
  icon: string;
}

const policyCards: PolicyCard[] = [
  {
    title: '담보가 없어도 가능합니다',
    description: '정부 정책자금은 담보가 없거나 신용점수가 낮은 중소기업, 소상공인을 위한 제도입니다. 정부가 직접 나서서 업종별, 분야별로 자금을 지원합니다.',
    bgColor: 'white',
    icon: FIREBASE_IMAGES.assets.icon01
  },
  {
    title: '낮은 금리로 부담 없이',
    description: '시중 금융기관보다 훨씬 낮은 금리로 자금을 지원받을 수 있습니다. 정부 보증으로 안정적인 자금 조달이 가능합니다.',
    bgColor: 'dark',
    icon: FIREBASE_IMAGES.assets.icon02
  },
  {
    title: '다양한 지원 프로그램',
    description: '창업자금, 운영자금, 시설자금 등 기업의 성장 단계와 필요에 맞는 다양한 정책자금 프로그램을 제공합니다.',
    bgColor: 'dark',
    icon: FIREBASE_IMAGES.assets.icon03
  },
  {
    title: '전문가의 맞춤 컨설팅',
    description: 'KC세무컨설팅은 20년 경력의 전문가가 귀사에 가장 적합한 정책자금을 찾아드리고, 신청부터 수령까지 전 과정을 함께합니다.',
    bgColor: 'white',
    icon: FIREBASE_IMAGES.assets.icon04
  }
];

const policyMobileCards: PolicyCard[] = [
  {
    title: '담보가 없어도\n 가능합니다',
    description: '정부 정책자금은 담보가 없거나 신용점수가 낮은 중소기업, 소상공인을 위한 제도입니다. 정부가 직접 나서서 업종별, 분야별로 자금을 지원합니다.',
    bgColor: 'white',
    icon: FIREBASE_IMAGES.assets.icon01
  },
  {
    title: '낮은 금리로\n 부담 없이',
    description: '시중 금융기관보다 훨씬 낮은 금리로 자금을 지원받을 수 있습니다. 정부 보증으로 안정적인 자금 조달이 가능합니다.',
    bgColor: 'dark',
    icon: FIREBASE_IMAGES.assets.icon02
  },
  {
    title: '다양한 지원\n 프로그램',
    description: '창업자금, 운영자금, 시설자금 등 기업의 성장 단계와 필요에 맞는 다양한 정책자금 프로그램을 제공합니다.',
    bgColor: 'dark',
    icon: FIREBASE_IMAGES.assets.icon03
  },
  {
    title: '전문가의\n 맞춤 컨설팅',
    description: 'KC세무컨설팅은 20년 경력의 전문가가 귀사에 가장 적합한 정책자금을 찾아드리고, 신청부터 수령까지 전 과정을 함께합니다.',
    bgColor: 'white',
    icon: FIREBASE_IMAGES.assets.icon04
  }
];

function ServiceSection4() {
  const desktopRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInViewport, setIsInViewport] = useState(false);

  // Desktop Scroll Logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1024) return; // Skip for mobile

      const containerRef = desktopRef.current;
      if (!containerRef) return;

      const rect = containerRef.getBoundingClientRect();
      const containerHeight = containerRef.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrollStart = rect.top + window.scrollY - viewportHeight;
      const scrollEnd = scrollStart + containerHeight;
      const scrollDistance = scrollEnd - scrollStart;
      const currentScroll = window.scrollY;

      const progress = Math.max(0, Math.min(1, (currentScroll - scrollStart) / scrollDistance));
      setScrollProgress(progress);
      setIsInViewport(progress > 0 && progress < 1);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const renderDesktopCards = () => {
    const totalScreens = policyCards.length;

    return policyCards.map((card, index) => {
      const cardProgress = Math.max(0, Math.min(1, scrollProgress * totalScreens - index));
      const opacity = Math.sin(cardProgress * Math.PI);
      const translateY = (1 - cardProgress) * 120;

      return (
        <div
          key={index}
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 px-4"
          style={{
            opacity: opacity,
            transform: `translateY(${translateY}px)`,
            pointerEvents: cardProgress > 0.3 && cardProgress < 0.7 ? 'auto' : 'none'
          }}
        >
          <div
            className={`w-full max-w-md rounded-2xl ${card.bgColor === 'white'
              ? 'bg-white/95 backdrop-blur-sm'
              : 'bg-gray-900/95 backdrop-blur-sm'
              }`}
            style={{
              aspectRatio: '3 / 4',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              display: 'flex',
              flexDirection: 'column',
              padding: '2.5rem'
            }}
          >
            {/* Icon */}
            <div className="mb-6 flex justify-center">
              <img
                src={card.icon}
                alt=""
                className="w-48 h-48 object-contain"
              />
            </div>

            {/* Title */}
            <h2
              className={`text-3xl font-bold mb-4 whitespace-pre-line ${card.bgColor === 'white' ? 'text-gray-900' : 'text-white'
                }`}
            >
              {card.title}
            </h2>

            {/* Description */}
            <p
              className={`text-lg leading-relaxed ${card.bgColor === 'white' ? 'text-gray-700' : 'text-gray-300'
                }`}
            >
              {card.description}
            </p>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      {/* Desktop Layout (Scroll Animation) */}
      <div className="hidden lg:block">
        <div
          ref={desktopRef}
          style={{
            minHeight: `${policyCards.length * 100}vh`,
            position: 'relative'
          }}
        >
          {isInViewport && (
            <div
              className="fixed top-0 left-0 right-0 h-screen flex items-center justify-center"
              style={{
                backgroundImage: `url(${FIREBASE_IMAGES.backgrounds.brandBG})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
              }}
            >
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative w-full h-full">
                {renderDesktopCards()}
              </div>

              {/* Progress Indicator */}
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3">
                {policyCards.map((_, index) => {
                  const isActive = scrollProgress * policyCards.length >= index &&
                    scrollProgress * policyCards.length < index + 1;
                  return (
                    <div
                      key={index}
                      className={`h-2 rounded-full transition-all duration-300 ${isActive ? 'w-12 bg-[#ff7800]' : 'w-2 bg-white/40'
                        }`}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Layout (Vertical List) */}
      <div className="lg:hidden relative w-full py-16 px-4"
        style={{
          backgroundImage: `url(${FIREBASE_IMAGES.backgrounds.brandBG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col gap-8">
          {policyMobileCards.map((card, index) => (
            <div
              key={index}
              className={`w-full rounded-2xl p-8 shadow-xl ${card.bgColor === 'white' ? 'bg-white/95 backdrop-blur-sm' : 'bg-gray-900/95 backdrop-blur-sm'
                }`}
            >
              <div className="mb-6 flex justify-center">
                <img
                  src={card.icon}
                  alt=""
                  className="w-32 h-32 object-contain"
                />
              </div>
              <h2 className={`text-2xl font-bold mb-4 whitespace-pre-line text-center ${card.bgColor === 'white' ? 'text-gray-900' : 'text-white'
                }`}>
                {card.title}
              </h2>
              <p className={`text-base leading-relaxed text-center ${card.bgColor === 'white' ? 'text-gray-700' : 'text-gray-300'
                }`}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ServiceSection4;