import { FIREBASE_IMAGES } from '@/constants/firebaseImages';

function HeroHmm() {
  return (
    <section
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-black/60 overflow-hidden"
      id="s2025030717fce04b66c7b"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url(${FIREBASE_IMAGES.backgrounds.forestWay})`,
          backgroundPosition: '50% 50%'
        }}
      >
        <img
          className="hidden"
          src={FIREBASE_IMAGES.backgrounds.forestWay}
          alt="mobile background"
          loading="lazy"
        />
      </div>

      {/* Background Color Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <main className="relative z-10">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="animate-fadeInUp" style={{ animationDuration: '1s', animationDelay: '0.5s' }}>
            <div className="text-center space-y-1 sm:space-y-2">
              <h6 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#FF7800]">
                정책자금, 혼자 고민하지 마세요.
              </h6>
              <h6 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white">
                한국중소기업지원센터와
              </h6>
              <h6 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white">
                함께라면 길이 보입니다.
              </h6>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default HeroHmm;