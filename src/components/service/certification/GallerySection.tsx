import { useState } from 'react';
import { galleryImages } from '@/data/galleryImages';

function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section className="w-full py-[80px] bg-[#f5f7fd]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative">
          {/* 갤러리 컨테이너 */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / 4)}%)`
              }}
            >
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-[5px]"
                  style={{ width: '25%' }}
                >
                  <div
                    className="bg-cover bg-center bg-no-repeat rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                    style={{
                      backgroundImage: `url(${image.thumbnail})`,
                      minHeight: '404px',
                      height: '404px'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 네비게이션 버튼 */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white/80 hover:bg-white rounded shadow-lg flex items-center justify-center transition-all"
            aria-label="Previous"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white/80 hover:bg-white rounded shadow-lg flex items-center justify-center transition-all"
            aria-label="Next"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default GallerySection;