import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase/config';
interface FormData {
  companyName: string;
  phone: string;
  industry: string;
  location: string;
  services: string[];
  referralSource: string[];
  requests: string;
  privacyAgreed: boolean;
}

function ConsultationForm() {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    phone: '',
    industry: '',
    location: '',
    services: [],
    referralSource: [],
    requests: '',
    privacyAgreed: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCheckboxChange = (field: 'services' | 'referralSource', value: string) => {
    setFormData((prev) => {
      const currentValues = prev[field];
      if (currentValues.includes(value)) {
        return {
          ...prev,
          [field]: currentValues.filter((v) => v !== value),
        };
      } else {
        return {
          ...prev,
          [field]: [...currentValues, value],
        };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      if (isSubmitting) return; // 중복 제출 방지
      setIsSubmitting(true);

      if (!formData.privacyAgreed) {
          alert('개인정보 수집 및 이용에 동의해주세요.');
          setIsSubmitting(false);
          return;
      }

      // ⚠️ 필수 필드 클라이언트 측 검증 추가 (Functions에서 하던 역할 보완)
      if (!formData.companyName || !formData.phone || !formData.industry || 
          !formData.location || formData.services.length === 0 || 
          formData.referralSource.length === 0 || !formData.requests) {
            alert('모든 필수 항목을 입력해주세요.');
            setIsSubmitting(false);
            return;
      }


      try {
          // 🚫 Firebase Functions HTTP 호출 로직 제거
          
          // ✅ Firestore에 직접 데이터 저장 (consultations 컬렉션)
          // Functions의 onFormCreated가 'consultations' 컬렉션을 바라보도록 수정 필요
          // (이전 응답에서 'formData'로 변경 제안했으나, 이 클라이언트 코드는 'consultations'의 원래 필드를 사용하므로, 
          // Functions 코드를 'consultations'로 유지하거나, 여기 컬렉션명을 'formData'로 변경하고 
          // 필드명도 맞추는 것이 좋습니다. 여기서는 원본 필드에 맞게 'consultations'에 저장합니다.)

          const docRef = await addDoc(collection(db, 'consultations'), {
              ...formData,
              createdAt: serverTimestamp(), // Firestore 서버 타임스탬프 사용
              status: "pending", // 초기 상태
          });
          
          console.log("✅ Firestore 저장 완료! Document ID: ", docRef.id);
          alert('상담 신청이 완료되었습니다.');

          // 폼 초기화
          setFormData({
              companyName: '',
              phone: '',
              industry: '',
              location: '',
              services: [],
              referralSource: [],
              requests: '',
              privacyAgreed: false,
          });

      } catch (error) {
          console.error('❌ Form submission error:', error);
          alert('상담 신청 중 오류가 발생했습니다. 다시 시도해주세요.');
      } finally {
          setIsSubmitting(false);
      }
  };
  return (
    <>
      {/* Title Section */}
      <section
        className="relative py-20 md:py-24 lg:py-28 px-5"
        id="consultation-section"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://cdn.imweb.me/thumbnail/20250121/b38d7ff0119e8.jpg')",
            backgroundPosition: '50% 50%',
          }}
        ></div>
        <div
          className="absolute inset-0 bg-black"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          }}
        ></div>
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
              상담 신청
            </h2>
            <h6 className="text-base md:text-lg lg:text-xl text-gray-400 tracking-[5px]">
              Contact us
            </h6>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 md:py-16 lg:py-20 px-5">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Side - Sticky Text */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-24">
                <h6 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-4 leading-tight">
                  <span className="text-[#214bab]">어떤 도움</span>
                  <span className="text-[#110d0d]">이</span>
                </h6>
                <h6 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#110d0d] mb-8">
                  필요하신가요?
                </h6>

                <p className="text-lg md:text-xl text-[#544d4d] leading-[2.2] mb-2">
                  한국중소기업지원센터는
                </p>
                <p className="text-lg md:text-xl text-[#544d4d] leading-[2.2] mb-2">
                  대표님의 사업의 성공을 진심으로 기원합니다.
                </p>
                <p className="text-lg md:text-xl text-[#ff7800] font-bold leading-[2.2]">
                  좋은 인연이 되기를 바랍니다.
                </p>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Privacy Agreement */}
                <div className="form-group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    개인정보 수집 및 이용 동의
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="border border-gray-300 rounded-lg p-4 max-h-40 overflow-y-auto bg-gray-50 text-sm text-gray-700 mb-3">
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
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="privacy"
                      checked={formData.privacyAgreed}
                      onChange={(e) =>
                        setFormData({ ...formData, privacyAgreed: e.target.checked })
                      }
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="privacy" className="ml-2 text-sm text-gray-700">
                      개인정보 수집 및 이용에 동의합니다.
                    </label>
                  </div>
                </div>

                {/* Company Name */}
                <div className="form-group">
                  <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700 mb-2">
                    회사명
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="form-group">
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    연락처
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Industry */}
                <div className="form-group">
                  <label htmlFor="industry" className="block text-sm font-semibold text-gray-700 mb-2">
                    업종을 선택해주세요.
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <select
                    id="industry"
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">(선택)</option>
                    <option value="제조업">제조업</option>
                    <option value="도소매업">도소매업</option>
                    <option value="서비스업(교육서비스,기술서비스 포함)">
                      서비스업(교육서비스,기술서비스 포함)
                    </option>
                    <option value="요식업(음식점업)">요식업(음식점업)</option>
                    <option value="건설업(건설기계 대여 포함)">건설업(건설기계 대여 포함)</option>
                    <option value="운수업">운수업</option>
                    <option value="그 외 기타">그 외 기타</option>
                  </select>
                </div>

                {/* Location */}
                <div className="form-group">
                  <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                    사업장 소재지
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Services */}
                <div className="form-group">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    필요한 컨설팅 서비스
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="space-y-2">
                    {[
                      '정부 정책자금 컨설팅',
                      '세금 환급 컨설팅',
                      '법인 사업자 컨설팅',
                      '기업 인증 컨설팅',
                      '1년 종합 컨설팅(노무, 세무, 마케팅, 정부 지원사업)',
                    ].map((service) => (
                      <div key={service} className="flex items-center">
                        <input
                          type="checkbox"
                          id={service}
                          checked={formData.services.includes(service)}
                          onChange={() => handleCheckboxChange('services', service)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor={service} className="ml-2 text-sm text-gray-700">
                          {service}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Referral Source */}
                <div className="form-group">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    어떤 경로로 문의를 하게 되었나요?
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="space-y-2">
                    {[
                      '네이버 검색 광고',
                      '네이버 블로그',
                      '지인 추천(소개)',
                      '인스타그램 및 페이스북',
                      '스레드 및 당근',
                      '유튜브 및 릴스',
                      '기타',
                    ].map((source) => (
                      <div key={source} className="flex items-center">
                        <input
                          type="checkbox"
                          id={source}
                          checked={formData.referralSource.includes(source)}
                          onChange={() => handleCheckboxChange('referralSource', source)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor={source} className="ml-2 text-sm text-gray-700">
                          {source}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Requests */}
                <div className="form-group">
                  <label htmlFor="requests" className="block text-sm font-semibold text-gray-700 mb-2">
                    상담 시 요청사항
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <textarea
                    id="requests"
                    rows={4}
                    value={formData.requests}
                    onChange={(e) => setFormData({ ...formData, requests: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="px-12 py-4 bg-[#4285f4] hover:bg-[#3367d6] text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    작성
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ConsultationForm;