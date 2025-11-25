import { FIREBASE_IMAGES } from '../../constants/firebaseImages';

function ServiceSection5() {
  const steps = [
    {
      id: 1,
      title: '1:1 전문 상담사 배정',
      bgImage: FIREBASE_IMAGES.images.onebyone,
      delay: '0.5s',
    },
    {
      id: 2,
      title: '정책자금 컨설팅 진행',
      bgImage: FIREBASE_IMAGES.images.seconds,
      delay: '0.7s',
    },
    {
      id: 3,
      title: '정책자금 승인 대출 실행',
      bgImage: FIREBASE_IMAGES.images.tree,
      delay: '0.9s',
    },
  ];

  return (
    <section
      className="w-full relative"
      style={{
        paddingTop: '80px',
        paddingBottom: '80px',
        backgroundColor: '#fff',
      }}
    >
      <div className="px-3 mx-auto w-full" style={{ maxWidth: '1280px' }}>
        {/* Header */}
        <div className="mb-12">
          <div className="animate-fadeInUp font-extrabold" style={{ animationDelay: '0.5s' }}>
            <h2 className="lg:text-5xl text-md text-center mb-1 lg:mb-4">
              정책자금, 전문 컨설턴트와 함께라면
            </h2>
            <h2 className="lg:text-5xl text-md text-center">
              대표님도 <span className="text-blue-700">문제없이 지원 가능</span>합니다!
            </h2>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="animate-fadeInUp rounded-3xl overflow-hidden relative flex items-end justify-start min-h-[300px] md:min-h-[450px]"
              style={{
                animationDelay: step.delay,
                animationDuration: '1s',
                backgroundImage: `url(${step.bgImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                padding: '32px',
                wordBreak: 'normal',
                wordWrap: 'break-word',
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/55" />
              {/* Content */}
              <h6 className="text-xl lg:text-3xl text-white font-semibold relative z-10">
                {step.title}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceSection5;