import { heroSecretData } from '../../data/heroSecretData';
import SecretCard from '../common/card/SecretCard';

function HeroSecret() {
  const { title, secrets } = heroSecretData;

  return (
    <section
      className="relative py-[60px] bg-[#f6f6f6] hidden md:block"
      id="s2025030791452e093e3a1"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#f6f6f6]" />

      <main className="relative z-10">
        <div className="container mx-auto px-4">
          {/* Title Section */}
          <div className="text-left mb-8 animate-fadeInUp" style={{ animationDuration: '1s', animationDelay: '0.5s' }}>
            <h6 className="text-[48px] font-extrabold">
              <span className="text-[#214bab]">{title.highlight}</span>
            </h6>
            <h6 className="text-[48px] font-black text-black">
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