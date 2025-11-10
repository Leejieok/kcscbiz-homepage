export interface FundingCardData {
  id: number;
  title: string;
  amount: string;
  delay: string;
  hidden?: boolean;
}

interface FundingCardProps {
  funding: FundingCardData;
}

function FundingCard({ funding }: FundingCardProps) {
  const iconUrl =
    'https://cdn.imweb.me/upload/S20231213aa2eeb2497234/31d4e85ad386e.png';

  return (
    <div
      className={`animate-fadeInUp bg-white rounded-2xl p-5 ${
        funding.hidden ? 'invisible' : ''
      }`}
      style={{
        animationDelay: funding.delay,
        animationDuration: '1s',
      }}
    >
      {/* 2행 구조 */}
      <div className="flex flex-col justify-between h-full">
        {/* 1행: 아이콘 + 제목 */}
        <div className="flex items-center">
          <img
            src={iconUrl}
            alt=""
            className="w-5 h-5 mr-2"
            aria-hidden="true"
            loading="lazy"
          />
          <h6 className="text-[15px] font-semibold text-gray-800">
            {funding.title}
          </h6>
        </div>

        {/* 2행: 오른쪽 정렬 금액 */}
        <div className="flex justify-end">
          <span className="text-2xl font-bold text-[#214BAB]">
            {funding.amount}
          </span>
        </div>
      </div>
    </div>
  );
}

export default FundingCard;
