import { useEffect, useRef, useState } from 'react';

function HeroReview() {
  const [counters, setCounters] = useState([
    { label: '정책자금 승인 건수', targetValue: 3000, suffix: '+', currentValue: 0 },
    { label: '정책자금 승인률', targetValue: 97, suffix: '%', currentValue: 0 },
    { label: '누적 상담 기업 수', targetValue: 4000, suffix: '명+', currentValue: 0 }
  ]);

  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    counters.forEach((counter, index) => {
      let currentStep = 0;
      const increment = counter.targetValue / steps;

      const timer = setInterval(() => {
        currentStep++;
        const newValue = Math.min(
          Math.round(increment * currentStep),
          counter.targetValue
        );

        setCounters((prev) =>
          prev.map((c, i) =>
            i === index ? { ...c, currentValue: newValue } : c
          )
        );

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, interval);
    });
  };

  return (
    <div ref={sectionRef} className="w-full py-[120px] px-10">
      <main className="max-w-7xl mx-auto">
        {/* 메인 제목 */}
        <div className="text-center mb-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            한국중소기업지원센터는
          </h2>
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="text-blue-700">경험을 숫자로 증명</span>합니다.
          </h2>
        </div>

        {/* 서브 텍스트 */}
        <div className="text-center mb-16 text-xl space-y-2">
          <p>3개월 미만 새로 생긴 회사들 다 전문가라고 이야기합니다.</p>
          <p className="font-bold text-orange-500">
            지금부터 딱 100초만 끝까지 집중하세요.
          </p>
          <p>어떤 곳이 진짜 경험과 능력 있는 회사인지 알게 될겁니다.</p>
        </div>

        {/* 통계 카운터 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {counters.map((counter, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h6 className="text-lg md:text-xl font-semibold mb-4 text-gray-800">
                {counter.label}
              </h6>
              <div className="text-5xl md:text-6xl font-bold text-blue-600">
                {counter.currentValue.toLocaleString()}
                <span className="text-4xl md:text-5xl">{counter.suffix}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default HeroReview;