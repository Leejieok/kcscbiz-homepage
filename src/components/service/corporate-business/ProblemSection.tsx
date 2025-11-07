function ProblemSection() {
  return(
    <section className="w-full px-4 py-28 bg-[#f5f7fd] flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* 왼쪽 텍스트 영역 (7/12) */}
          <div className="lg:col-span-7">
            <div className="mb-8">
              {/* 여백 */}
              <div className="h-[30px]"></div>

              {/* 메인 타이틀 */}
              <div className="mb-6 animate-fadeInUp">
                <p className="text-3xl md:text-4xl lg:text-5xl mb-4" style={{ fontFamily: 'InkLiquid, sans-serif', lineHeight: '1.5' }}>
                  지금 대표님 회사는 얼마나 안전하신가요?
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  답을 확신하지 못한다면,
                </h2>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-blue-700">리스크를 방어할 준비</span>가
                </h2>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  필요한 순간입니다.
                </h2>
              </div>

              {/* 여백 */}
              <div className="h-[30px]"></div>

              {/* 버튼 */}
              <div className="animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                <a
                  href="/contact"
                  className="inline-block px-8 py-4 border-2 border-blue-700 text-blue-700 hover:text-white text-lg font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                  전문가에게 문의하기
                </a>
              </div>
            </div>
          </div>

          {/* 오른쪽 말풍선 영역 (5/12) */}
          <div className="lg:col-span-5 flex items-center">
            {/* 여백 */}
            <div className="h-[77px]"></div>

            <div className="space-y-5 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
              {/* 말풍선 1 - 왼쪽 꼬리 */}
              <div className="relative bg-white p-6 rounded-2xl shadow-lg mr-5">
                <p className="text-lg md:text-xl leading-relaxed">
                  <strong>대표님의 회사의 주식 가치</strong>는 오를 가능성이 높습니까? 낮습니까?
                </p>
                {/* 말풍선 꼬리 - 왼쪽 */}
                <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-r-[15px] border-r-white"></div>
              </div>

              {/* 말풍선 2 - 오른쪽 꼬리 */}
              <div className="relative bg-blue-700 p-6 rounded-2xl shadow-lg ml-5">
                <p className="text-lg md:text-xl leading-relaxed text-white">
                  갑작스러운 위기 상황이 닥쳤을 때 <strong>대처할 준비</strong>가 되어 있습니까?
                </p>
                {/* 말풍선 꼬리 - 오른쪽 */}
                <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-l-[15px] border-l-blue-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSection;