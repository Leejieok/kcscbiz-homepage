import CheckIcon from '@/components/common/icon/CheckIcon';

interface SolutionCardProps {
  title: string;
  items: string[];
  backgroundImage: string;
  delay?: string;
}

function SolutionCard({ title, items, backgroundImage, delay = '0s' }: SolutionCardProps) {
  return (
    <div
      className="relative p-8 rounded-2xl overflow-hidden bg-cover bg-center min-h-[400px] flex flex-col justify-end animate-fadeInUp"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        animationDelay: delay
      }}
    >
      {/* 다크 오버레이 */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* 콘텐츠 */}
      <div className="relative z-10 text-white">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckIcon />
              <span className="text-base md:text-lg leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SolutionCard;
