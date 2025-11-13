import { heroSecretData } from '../../data/heroSecretData';
import SecretCard from '../common/card/SecretCard';

function HeroSecret() {
  const { title, secrets } = heroSecretData;

  return (
    <section
      className="relative py-[60px] bg-[#f6f6f6] hidden md:block"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#f6f6f6]" />

      <main className="relative z-10">
        <div className="px-3 mx-auto w-full" style={{ maxWidth: '1280px' }}>
          {/* Title Section */}
          <div className="text-left mb-8 animate-fadeInUp" style={{ animationDuration: '1s', animationDelay: '0.5s' }}>
            <h6 className="text-[48px] font-bold">
              <span className="text-blue-500 tracking-tight">{title.highlight}</span>
            </h6>
            <h6 className="text-[48px] text-black tracking-tight">
              {title.normal}
            </h6>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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