import { useState } from 'react';
import { qnaData } from '@/data/qnaData';

function QnASection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full lg:py-[50px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-4">
          {qnaData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              {/* 질문 헤더 */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
              >
                <h4 className="lg:text-lg text-sm font-medium text-[#0d0f11] pr-4">
                  {item.question}
                </h4>
                <span className="flex-shrink-0">
                  {openIndex === index ? (
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" strokeWidth="2" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12l4-4 4 4"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" strokeWidth="2" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 12l-4 4-4-4"
                      />
                    </svg>
                  )}
                </span>
              </button>

              {/* 답변 내용 */}
              <div
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <div className="space-y-3">
                    {item.answer.map((paragraph, idx) => (
                      <p key={idx} className="text-base text-[#544d4d]">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QnASection;