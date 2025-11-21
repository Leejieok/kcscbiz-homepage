import CheckIcon from '@/components/common/icon/CheckIcon';
import { certificationDetails } from '@/data/certificationDetails';

function CertIntroSection() {
  return(
    <section className="w-full px-4 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* 타이틀 */}
        <div className="mb-12 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center tracking-tight mb-4">
            우리 회사에 딱 맞는
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center tracking-tight">
            <span className="text-blue-700">기업 인증</span>은 어떤걸까?
          </h2>
        </div>

        {/* 인증 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationDetails.map((cert, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden animate-fadeInUp min-h-[400px]"
              style={{
                backgroundImage: `url(${cert.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                animationDelay: '0.5s'
              }}
            >
              {/* 오버레이 */}
              <div className="absolute inset-0 bg-white/75"></div>

              {/* 콘텐츠 */}
              <div className="relative z-10 p-6">
                {/* 타이틀 */}
                <h3 className="text-2xl font-bold text-[#110d0d] mb-4">
                  {cert.title}
                </h3>

                {/* 혜택 리스트 */}
                <ul className="space-y-2">
                  {cert.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-2">
                      <CheckIcon/>
                      <span className="text-lg text-[#544d4d] leading-relaxed">
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