import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase/config';

interface ApplicationFormProps {
  title?: {
    highlight: string;
    main: string;
  };
}

function ApplicationForm({ title }: ApplicationFormProps) {
  const defaultTitle = {
    highlight: '단 10명만 받는',
    main: '[소수정예] 컨설팅'
  };

  const displayTitle = title || defaultTitle;

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

  const [isSubmitting, setIsSubmitting] = useState(false);

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

  // 전화번호 포맷팅 함수
  const formatPhoneNumber = (value: string) => {
    // 숫자만 추출
    const numbers = value.replace(/[^\d]/g, '');

    // 길이에 따라 포맷팅
    if (numbers.length <= 3) {
      return numbers;
    } else if (numbers.length <= 7) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    } else if (numbers.length <= 11) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7)}`;
    } else {
      // 최대 11자리까지만 허용
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
    }
  };

  // 전화번호 유효성 검증 함수
  const validatePhoneNumber = (phone: string) => {
    const numbers = phone.replace(/[^\d]/g, '');
    return numbers.length === 10 || numbers.length === 11;
  };

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return; // 중복 제출 방지
    setIsSubmitting(true);

    // 필수 항목 검증
    if (!formData.privacyAgreed) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      setIsSubmitting(false);
      return;
    }
    if (!formData.companyName) {
      alert('회사명을 입력해주세요.');
      setIsSubmitting(false);
      return;
    }
    if (!formData.contact) {
      alert('연락처를 입력해주세요.');
      setIsSubmitting(false);
      return;
    }
    if (!validatePhoneNumber(formData.contact)) {
      alert('올바른 전화번호 형식이 아닙니다. (예: 010-1234-5678)');
      setIsSubmitting(false);
      return;
    }
    if (!formData.industry) {
      alert('업종을 선택해주세요.');
      setIsSubmitting(false);
      return;
    }
    if (!formData.location) {
      alert('사업장 소재지를 입력해주세요.');
      setIsSubmitting(false);
      return;
    }
    if (formData.consultingServices.length === 0) {
      alert('필요한 컨설팅 서비스를 선택해주세요.');
      setIsSubmitting(false);
      return;
    }
    if (formData.referralSource.length === 0) {
      alert('문의 경로를 선택해주세요.');
      setIsSubmitting(false);
      return;
    }
    if (!formData.requests) {
      alert('상담 시 요청사항을 입력해주세요.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Firestore의 consultations 컬렉션에 저장
      // ConsultationForm과 필드명을 맞추기 위해 매핑
      const docRef = await addDoc(collection(db, 'consultations'), {
        companyName: formData.companyName,
        phone: formData.contact, // contact -> phone으로 매핑
        industry: formData.industry,
        location: formData.location,
        services: formData.consultingServices, // consultingServices -> services로 매핑
        referralSource: formData.referralSource,
        requests: formData.requests,
        privacyAgreed: formData.privacyAgreed,
        createdAt: serverTimestamp(),
        status: 'pending'
      });

      console.log('✅ Firestore 저장 완료! Document ID: ', docRef.id);
      alert('상담 신청이 완료되었습니다!');

      // 폼 초기화
      setFormData({
        companyName: '',
        contact: '',
        industry: '',
        location: '',
        consultingServices: [],
        consultingServicesEtc: '',
        referralSource: [],
        requests: '',
        privacyAgreed: false
      });

    } catch (error) {
      console.error('❌ Form submission error:', error);
      alert('상담 신청 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
      <main className="container mx-auto px-2 sm:px-4 max-w-4xl">
        {/* 제목 */}
        <div className="animate-fadeInUp mb-6 sm:mb-8" style={{ animationDelay: '0.5s', animationDuration: '1s' }}>
          <h2 className="text-center">
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#214bab] mb-1 sm:mb-2">{displayTitle.highlight}</span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">{displayTitle.main}</span>
          </h2>
        </div>

        <div className="h-2 sm:h-3"></div>

        {/* 폼 */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* 개인정보 수집 및 이용 동의 */}
          <div className="form-group">
            <label className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
              개인정보 수집 및 이용 동의
              <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="border border-gray-300 rounded-lg p-3 sm:p-4 max-h-48 sm:max-h-64 overflow-y-auto bg-gray-50 text-xs sm:text-sm leading-relaxed">
              <p className="mb-3">
                한국중소기업지원센터는 개인정보 보호법에 따라 정보 주체의 개인정보를 보호하고 있습니다.
              </p>

              <p className="font-semibold mb-1">1. 수집 목적</p>
              <p className="mb-3">
                상담 신청 접수 및 처리, 컨설팅 서비스 제공, 고객 문의 응대 및 상담 내용 관리
              </p>

              <p className="font-semibold mb-1">2. 수집 항목</p>
              <p className="mb-3">
                회사명, 연락처, 업종, 사업장 소재지, 필요한 컨설팅 서비스, 문의 경로, 상담 요청사항
              </p>

              <p className="font-semibold mb-1">3. 보유 및 이용 기간</p>
              <p className="mb-3">
                상담 완료 후 3년간 보관하며, 보유 기간이 경과하면 지체 없이 파기합니다.
              </p>

              <p className="font-semibold mb-1">4. 동의 거부 시 불이익</p>
              <p className="mb-2">
                개인정보 수집 및 이용 동의를 거부하실 수 있으며, 거부 시 상담 신청 서비스 이용이 제한됩니다.
              </p>
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
            <label htmlFor="companyName" className="block text-base sm:text-lg md:text-xl font-medium text-gray-700 mb-2">
              회사명
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              id="companyName"
              value={formData.companyName}
              onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              autoComplete="off"
            />
          </div>

          {/* 연락처 */}
          <div className="form-group">
            <label htmlFor="contact" className="block text-base sm:text-lg md:text-xl font-medium text-gray-700 mb-2">
              연락처
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="tel"
              id="contact"
              value={formData.contact}
              onChange={(e) => setFormData(prev => ({ ...prev, contact: formatPhoneNumber(e.target.value) }))}
              placeholder="010-1234-5678"
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              autoComplete="off"
            />
          </div>

          {/* 업종 선택 */}
          <div className="form-group">
            <label htmlFor="industry" className="block text-base sm:text-lg md:text-xl font-medium text-gray-700 mb-2">
              업종을 선택해주세요.
              <span className="text-red-500 ml-1">*</span>
            </label>
            <select
              id="industry"
              value={formData.industry}
              onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm sm:text-base"
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
            <label htmlFor="location" className="block text-base sm:text-lg md:text-xl font-medium text-gray-700 mb-2">
              사업장 소재지
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              id="location"
              value={formData.location}
              onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              autoComplete="off"
            />
          </div>

          {/* 필요한 컨설팅 서비스 */}
          <div className="form-group">
            <label className="block text-base sm:text-lg md:text-xl font-medium text-gray-700 mb-2">
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
            <label className="block text-base sm:text-lg md:text-xl font-medium text-gray-700 mb-2">
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
            <label htmlFor="requests" className="block text-base sm:text-lg md:text-xl font-medium text-gray-700 mb-2">
              상담 시 요청사항
              <span className="text-red-500 ml-1">*</span>
            </label>
            <textarea
              id="requests"
              value={formData.requests}
              onChange={(e) => setFormData(prev => ({ ...prev, requests: e.target.value }))}
              rows={3}
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm sm:text-base"
              autoComplete="off"
            />
          </div>

          {/* 제출 버튼 */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="px-8 sm:px-10 md:px-12 py-2 sm:py-2.5 md:py-3 bg-blue-600 text-white text-base sm:text-lg font-medium rounded-lg hover:bg-blue-700 transition-colors"
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