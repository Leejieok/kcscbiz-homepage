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
      <div className="bg-blue-500 p-8 rounded-xl w-[396px] h-[250px]">
        {/* Circle Number */}
        <div className="mb-4 flex justify-between pb-4">
          {/* Title */}
          <h6 className="text-white text-[26px] font-semibold mb-4 leading-tight whitespace-pre-line">
            {secret.title}
          </h6>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-blue-500 font-bold text-lg">
            {secret.number}
          </span>
        </div>


        {/* Description */}
        <p className="text-[#ffffff] text-[18px] leading-[2]">
          {secret.description}
        </p>
      </div>
    </div>
  );
}

export default SecretCard;
