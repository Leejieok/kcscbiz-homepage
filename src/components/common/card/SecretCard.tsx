import type { SecretItem } from '@/data/heroSecretData';

interface SecretCardProps {
  secret: SecretItem;
  index: number;
}

function SecretCard({ secret, index }: SecretCardProps) {
  return (
    <div
      className="animate-fadeInUp"
      style={{
        animationDuration: '1s',
        animationDelay: '0.5s',
        marginTop: index === 1 ? '15px' : index === 2 ? '30px' : '0'
      }}
    >
      <div className="bg-[#214bab] p-8 rounded-3xl w-[396px] h-[440px]">
        {/* Circle Number */}
        <div className="mb-4">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#214bab] font-bold text-lg">
            {secret.number}
          </span>
        </div>

        {/* Title */}
        <h6 className="text-white text-[26px] font-semibold mb-4 leading-tight whitespace-pre-line">
          {secret.title}
        </h6>

        {/* Description */}
        <p className="text-[#ffffff] text-[18px] leading-[2]">
          {secret.description}
        </p>
      </div>
    </div>
  );
}

export default SecretCard;
