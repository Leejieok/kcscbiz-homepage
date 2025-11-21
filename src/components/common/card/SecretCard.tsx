import type { SecretItem } from '@/data/heroSecretData';

interface SecretCardProps {
  secret: SecretItem;
}

function SecretCard({ secret }: SecretCardProps) {
  return (
    <div
      className="animate-fadeInUp"
      style={{
        animationDuration: '1s',
        animationDelay: '0.5s',
      }}
    >
      <div className="bg-blue-500 p-5 md:p-8 rounded-xl w-full min-h-[160px] md:min-h-[250px]">
        {/* Circle Number */}
        <div className="mb-2 md:mb-4 flex justify-between pb-2 md:pb-4">
          {/* Title */}
          <h6 className="text-white text-base md:text-[26px] font-semibold mb-0 md:mb-4 leading-tight whitespace-pre-line">
            {secret.title}
          </h6>
          <span className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white text-blue-500 font-bold text-sm md:text-lg flex-shrink-0">
            {secret.number}
          </span>
        </div>

        {/* Description */}
        <p className="text-white text-sm md:text-[18px] leading-relaxed md:leading-[2]">
          {secret.description}
        </p>
      </div>
    </div>
  );
}

export default SecretCard;
