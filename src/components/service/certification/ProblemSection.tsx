import { certifications } from '@/data/certifications';
import { Link } from 'react-router-dom';

function ProblemSection() {
  return (
    <section className="relative w-full px-4 py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Animated wave-like background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-violet-200 to-fuchsia-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* 왼쪽 텍스트 영역 (7/12) */}
          <div className="lg:col-span-7">
            {/* 메인 타이틀 */}
            <div className="lg:mb-6 mb-2 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
              <p className="text-sm md:text-4xl lg:text-5xl mb-2 lg:mb-4">
                기업 인증이 있다면, 절세는 기본!
              </p>
              <h2 className="text-xl md:text-5xl lg:text-6xl font-bold leading-tight">
                세금 부담을 줄이고
              </h2>
              <h2 className="text-xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-blue-700">정책자금 지원</span>까지
              </h2>
              <h2 className="text-xl md:text-5xl lg:text-6xl font-bold leading-tight">
                받을 수 있는 비결
              </h2>
            </div>

            {/* 서브 텍스트 */}
            <div className="lg:mb-8 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
              <p className="text-sm md:text-2xl text-[#544d4d] lg:mb-2">
                대표님, 기업 인증 언제까지 미룰 예정인가요?
              </p>
              <p className="text-sm md:text-2xl text-[#544d4d]">
                지금 바로 취득하세요!
              </p>
            </div>

            {/* 여백 */}
            <div className="h-[30px]"></div>

            {/* 버튼 */}
            <div className="flex justify-center lg:justify-start animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5"
              >
                지금 바로 신청하기
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* 오른쪽 인증 카드 영역 (5/12) */}
          <div className="lg:col-span-5">
            <div className="space-y-4">
              {certifications.map((cert, index) => {
                // 각 카드마다 다른 채도의 파란색 그라데이션 적용
                const gradientColors = [
                  'from-blue-400 to-blue-500',
                  'from-blue-500 to-blue-600',
                  'from-blue-600 to-blue-700',
                  'from-indigo-500 to-indigo-600',
                  'from-indigo-600 to-indigo-700'
                ];
                const gradientClass = gradientColors[index % gradientColors.length];

                return (
                  <div
                    key={index}
                    className="group bg-white p-5 lg:p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 animate-fadeInUp cursor-default"
                    style={{ animationDelay: cert.delay }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br ${gradientClass} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-lg lg:text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                        {cert.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSection;