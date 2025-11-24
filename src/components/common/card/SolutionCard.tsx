interface SolutionCardProps {
  title: string;
  items: string[];
  backgroundImage: string;
  delay?: string;
}

function SolutionCard({ title, items, backgroundImage, delay = '0s' }: SolutionCardProps) {
  return (
    <div
      className="group relative p-6 lg:p-8 rounded-3xl overflow-hidden bg-cover bg-center min-h-[350px] lg:min-h-[400px] flex flex-col justify-end animate-fadeInUp shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-300"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        animationDelay: delay
      }}
    >
      {/* 그라데이션 오버레이 - 더 부드럽게 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-all duration-300"></div>

      {/* 콘텐츠 */}
      <div className="relative z-10 text-white">
        <h3 className="text-xl lg:text-3xl font-bold mb-4 lg:mb-6 group-hover:text-blue-300 transition-colors duration-300">{title}</h3>
        <ul className="space-y-2 lg:space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 lg:w-6 lg:h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm lg:text-lg leading-relaxed text-white/90 group-hover:text-white transition-colors duration-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SolutionCard;
