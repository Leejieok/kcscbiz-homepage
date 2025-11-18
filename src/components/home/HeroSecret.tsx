import { heroSecretData } from '../../data/heroSecretData';
import SecretCard from '../common/card/SecretCard';

function HeroSecret() {
  const { title, secrets } = heroSecretData;

  return (
    <section
      className="relative py-8 sm:py-10 md:py-12 lg:py-16 bg-[#f6f6f6]"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#f6f6f6]" />

      <main className="relative z-10">
        <div className="px-2 sm:px-3 mx-auto w-full max-w-[1280px]">
          {/* Title Section */}
          <div className="text-left mb-6 sm:mb-8 animate-fadeInUp" style={{ animationDuration: '1s', animationDelay: '0.5s' }}>
            <h6 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="text-blue-500 tracking-tight">{title.highlight}</span>
            </h6>
            <h6 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black tracking-tight">
              {title.normal}
            </h6>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {secrets.map((secret) => (
              <SecretCard key={secret.number} secret={secret} />
            ))}
          </div>
        </div>
      </main>
    </section>
  )
}

export default HeroSecret;