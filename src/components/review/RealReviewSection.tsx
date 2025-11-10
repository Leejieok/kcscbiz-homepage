interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  thumbnailUrl: string;
}

function RealReviewSection() {
  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      title: '제조업 김용* 대표님',
      description: '1억 승인!',
      imageUrl: 'https://cdn.imweb.me/thumbnail/20250828/d82db1ae96785.jpg',
      thumbnailUrl: 'https://cdn.imweb.me/thumbnail/20250828/9eaa3fec1ccce.jpg',
    },
    {
      id: '2',
      title: '건설업 현찬* 대표님',
      description: '1억 승인!',
      imageUrl: 'https://cdn.imweb.me/thumbnail/20250828/17c502e6de146.jpg',
      thumbnailUrl: 'https://cdn.imweb.me/thumbnail/20250828/40650aca18ecd.jpg',
    },
    {
      id: '3',
      title: '제조업 유수* 대표님',
      description: '6,000만원 승인!',
      imageUrl: 'https://cdn.imweb.me/thumbnail/20250828/19a8a4ea8c536.jpg',
      thumbnailUrl: 'https://cdn.imweb.me/thumbnail/20250828/3951c90193267.jpg',
    },
    {
      id: '4',
      title: '도소매업 김철* 대표님',
      description: '4,000만원 승인!',
      imageUrl: 'https://cdn.imweb.me/thumbnail/20250828/ca43c2f7f53de.jpg',
      thumbnailUrl: 'https://cdn.imweb.me/thumbnail/20250828/231210c5a7d80.jpg',
    },
    {
      id: '5',
      title: '건설업 박노* 대표님',
      description: '1억 승인!',
      imageUrl: 'https://cdn.imweb.me/thumbnail/20250828/926965b8a2ff7.jpg',
      thumbnailUrl: 'https://cdn.imweb.me/thumbnail/20250828/455628d7d1973.jpg',
    },
    {
      id: '6',
      title: '운수업 최호* 대표님',
      description: '8,000만원 승인!',
      imageUrl: 'https://cdn.imweb.me/thumbnail/20250828/05ba36526225d.jpg',
      thumbnailUrl: 'https://cdn.imweb.me/thumbnail/20250828/27272d75a5378.jpg',
    },
    {
      id: '7',
      title: '건설업 이재* 대표님',
      description: '2억 승인!',
      imageUrl: 'https://cdn.imweb.me/thumbnail/20250828/6f7bf5c4dc861.jpg',
      thumbnailUrl: 'https://cdn.imweb.me/thumbnail/20250828/9506d5b91edc4.jpg',
    },
    {
      id: '8',
      title: '건설업 심이* 대표님',
      description: '1억 승인!',
      imageUrl: 'https://cdn.imweb.me/thumbnail/20250828/1a0688c8bb617.jpg',
      thumbnailUrl: 'https://cdn.imweb.me/thumbnail/20250828/6e19e01a75b2e.jpg',
    },
    {
      id: '9',
      title: '운수업 조무* 대표님',
      description: '7,000만원 승인!',
      imageUrl: 'https://cdn.imweb.me/thumbnail/20250828/75a647a8f957f.jpg',
      thumbnailUrl: 'https://cdn.imweb.me/thumbnail/20250828/169623354f497.jpg',
    },
    {
      id: '10',
      title: '제조업 전수* 대표님',
      description: '8,000만원 승인!',
      imageUrl: 'https://cdn.imweb.me/thumbnail/20250828/346330e67ef58.jpg',
      thumbnailUrl: 'https://cdn.imweb.me/thumbnail/20250828/9e5d0b99ecf75.jpg',
    },
  ];

  return (
    <div className="relative py-16 px-5 bg-white bg-cover bg-no-repeat">
      <div className="max-w-[1400px] mx-auto">
        {/* Title Section */}
        <h1 className="text-center m-0 p-0 mb-6 md:mb-8 lg:mb-12">
          <strong className="text-[#ff6d00] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            실제 성공사례!
          </strong>
        </h1>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mx-[-15px] md:mx-0">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative p-3 md:p-4 cursor-pointer group"
            >
              <div className="relative overflow-hidden">
                {/* Image */}
                <div
                  className="w-full min-h-[150px] md:min-h-[200px] lg:min-h-[214px] bg-cover bg-center bg-no-repeat rounded-lg transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.thumbnailUrl})` }}
                ></div>

                {/* Text Overlay */}
                <div className="mt-3 md:mt-4">
                  <p className="text-sm md:text-base lg:text-lg font-semibold text-gray-800 mb-1">
                    {item.title}
                  </p>
                  <p className="text-xs md:text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-lg"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Spacing */}
        <div className="w-full h-[90px]"></div>
      </div>
    </div>
  );
}

export default RealReviewSection;