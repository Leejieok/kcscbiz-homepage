import CheckIcon from '@/components/common/icon/CheckIcon';
import { certificationDetails } from '@/data/certificationDetails';

function CertIntroSection() {
  return (
    <section className="w-full px-4 lg:py-20 py-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* 타이틀 */}
        <div className="lg:mb-12 mb-8 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-center tracking-tight lg:mb-4">
            우리 회사에 딱 맞는
          </h2>
          <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-center tracking-tight">
            <span className="text-blue-700">기업 인증</span>은 어떤걸까?
          </h2>
        </div>

        {/* 인증 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {certificationDetails.map((cert, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 animate-fadeInUp"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              {/* 상단 이미지 영역 */}
              <div className="relative h-56 lg:h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${cert.backgroundImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white shadow-sm">
                    {cert.title}
                  </h3>
                </div>
              </div>

              {/* 하단 콘텐츠 영역 */}
              <div className="p-6 lg:p-8">
                <ul className="space-y-3">
                  {cert.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-1">
                      <div className="flex-shrink-0 mt-1">
                        <span>✔️</span>
                      </div>
                      <span className="text-sm lg:text-lg text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CertIntroSection;