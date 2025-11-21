import { useState } from 'react';

function ApplicationForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    contact: '',
    industry: '',
    location: '',
    consultingServices: [] as string[],
    consultingServicesEtc: '',
    referralSource: [] as string[],
    requests: '',
    privacyAgreed: false
  });

  const industries = [
    '제조업',
    '도소매업',
    '서비스업(교육서비스,기술서비스 포함)',
    '요식업(음식점업)',
    '건설업(건설기계 대여 포함)',
    '운수업',
    '그 외 기타'
  ];

  const consultingOptions = [
    '정부 정책자금 컨설팅',
    '세금 환급 컨설팅',
    '법인 사업자 컨설팅',
    '기업 인증 컨설팅',
    '1년 종합 컨설팅(노무, 세무, 마케팅, 정부 지원사업)'
  ];

  const referralOptions = [
    '네이버 검색 광고',
    '네이버 블로그',
    '지인 추천(소개)',
    '인스타그램 및 페이스북',
    '스레드 및 당근',
    '유튜브 및 릴스',
    '기타'
  ];

  const handleCheckboxChange = (field: 'consultingServices' | 'referralSource', value: string) => {
    setFormData(prev => {
      const currentValues = prev[field];
      const newValues = currentValues.includes(value)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value];

      // 문의 경로는 최대 2개까지만
      if (field === 'referralSource' && newValues.length > 2) {
        return prev;
      }

      return { ...prev, [field]: newValues };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 필수 항목 검증
    if (!formData.privacyAgreed) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }
    if (!formData.companyName) {
      alert('회사명을 입력해주세요.');
      return;
    }
    if (!formData.contact) {
      alert('연락처를 입력해주세요.');
      return;
    }
    if (!formData.industry) {
      alert('업종을 선택해주세요.');
      return;
    }
    if (!formData.location) {
      alert('사업장 소재지를 입력해주세요.');
      return;
    }
    if (formData.consultingServices.length === 0) {
      alert('필요한 컨설팅 서비스를 선택해주세요.');
      return;
    }
    if (formData.referralSource.length === 0) {
      alert('문의 경로를 선택해주세요.');
      return;
    }
    if (!formData.requests) {
      alert('상담 시 요청사항을 입력해주세요.');
      return;
    }

    console.log('Form submitted:', formData);
    alert('상담 신청이 완료되었습니다!');
  };

  return (
    <section className="py-16 bg-white hidden md:block">
      <main className="container mx-auto px-4 max-w-4xl">
        {/* 제목 */}
        <div className="animate-fadeInUp mb-8" style={{ animationDelay: '0.5s', animationDuration: '1s' }}>
          <h2 className="text-center">
            <span className="block text-5xl text-[#214bab] mb-2">선착순 10명</span>
            <span className="block text-5xl text-gray-900">무료 상담 신청하기</span>
          </h2>
        </div>

        <div className="h-3"></div>

        {/* 폼 */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 개인정보 수집 및 이용 동의 */}
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              개인정보 수집 및 이용 동의
              <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="border border-gray-300 rounded-lg p-4 max-h-64 overflow-y-auto bg-gray-50 text-sm leading-relaxed">
              <p className="mb-4">한국중소기업지원센터(이하 '회사'라 한다)는 개인정보 보호법 제30조에 따라 정보 주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립, 공개합니다.</p>

              <p className="font-bold mb-2">제1조 (개인정보의 처리목적)</p>
              <p className="mb-4">한국중소기업지원센터는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>

              <p className="mb-2">1. 홈페이지 회원 가입 및 관리</p>
              <p className="mb-4">회원 가입 의사 확인, 회원제 서비스 제공에 따른 본인 식별․인증, 회원자격 유지․관리, 제한적 본인확인제 시행에 따른 본인확인, 서비스 부정 이용 방지, 만 14세 미만 아동의 개인정보처리 시 법정대리인의 동의 여부 확인, 각종 고지․통지, 고충 처리 등을 목적으로 개인정보를 처리합니다.</p>

              <p className="mb-2">2. 재화 또는 서비스 제공</p>
              <p className="mb-4">물품 배송, 서비스 제공, 계약서 및 청구서 발송, 콘텐츠 제공, 맞춤서비스 제공, 본인인증, 연령인증, 요금 결제 및 정산, 채권추심 등을 목적으로 개인정보를 처리합니다.</p>

              <p className="mb-2">3. 고충 처리</p>
              <p className="mb-4">민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락․통지, 처리 결과 통보 등의 목적으로 개인정보를 처리합니다.</p>
            </div>
            <div className="mt-3">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.privacyAgreed}
                  onChange={(e) => setFormData(prev => ({ ...prev, privacyAgreed: e.target.checked }))}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">개인정보 수집 및 이용에 동의합니다.</span>
              </label>
            </div>
          </div>

          {/* 회사명 */}
          <div className="form-group">
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
              회사명
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              id="companyName"
              value={formData.companyName}
              onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              autoComplete="off"
            />
          </div>

          {/* 연락처 */}
          <div className="form-group">
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">
              연락처
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              id="contact"
              value={formData.contact}
              onChange={(e) => setFormData(prev => ({ ...prev, contact: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              autoComplete="off"
            />
          </div>

          {/* 업종 선택 */}
          <div className="form-group">
            <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
              업종을 선택해주세요.
              <span className="text-red-500 ml-1">*</span>
            </label>
            <select
              id="industry"
              value={formData.industry}
              onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              autoComplete="off"
            >
              <option value="">(선택)</option>
              {industries.map((industry) => (
                <option key={industry} value={industry}>{industry}</option>
              ))}
            </select>
          </div>

          {/* 사업장 소재지 */}
          <div className="form-group">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
              사업장 소재지
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              id="location"
              value={formData.location}
              onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              autoComplete="off"
            />
          </div>

          {/* 필요한 컨설팅 서비스 */}
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              필요한 컨설팅 서비스
              <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="space-y-2">
              {consultingOptions.map((option) => (
                <label key={option} className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consultingServices.includes(option)}
                    onChange={() => handleCheckboxChange('consultingServices', option)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    autoComplete="off"
                  />
                  <span className="ml-2 text-sm text-gray-700">{option}</span>
                </label>
              ))}
              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.consultingServices.includes('기타')}
                  onChange={() => handleCheckboxChange('consultingServices', '기타')}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
                  autoComplete="off"
                />
                <span className="ml-2 text-sm text-gray-700 flex items-center gap-2">
                  <span>기타:</span>
                  <input
                    type="text"
                    value={formData.consultingServicesEtc}
                    onChange={(e) => setFormData(prev => ({ ...prev, consultingServicesEtc: e.target.value }))}
                    placeholder="직접입력"
                    className="px-3 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    disabled={!formData.consultingServices.includes('기타')}
                    autoComplete="off"
                  />
                </span>
              </label>
            </div>
          </div>

          {/* 문의 경로 */}
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              어떤 경로로 문의를 하게 되었나요?
              <span className="text-red-500 ml-1">*</span>
              <span className="text-gray-500 text-xs ml-2">(최대 2개)</span>
            </label>
            <div className="space-y-2">
              {referralOptions.map((option) => (
                <label key={option} className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.referralSource.includes(option)}
                    onChange={() => handleCheckboxChange('referralSource', option)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    autoComplete="off"
                  />
                  <span className="ml-2 text-sm text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 상담 시 요청사항 */}
          <div className="form-group">
            <label htmlFor="requests" className="block text-sm font-medium text-gray-700 mb-2">
              상담 시 요청사항
              <span className="text-red-500 ml-1">*</span>
            </label>
            <textarea
              id="requests"
              value={formData.requests}
              onChange={(e) => setFormData(prev => ({ ...prev, requests: e.target.value }))}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              autoComplete="off"
            />
          </div>

          {/* 제출 버튼 */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="px-12 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              작성
            </button>
          </div>
        </form>
      </main>
    </section>
  )
}

export default ApplicationForm;