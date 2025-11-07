import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBoardPosts, BoardPost } from '@/data/boardData';

function BoardSection() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BoardPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    setPosts(getBoardPosts());
  }, []);

  // 현재 페이지의 게시글
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // 전체 페이지 수
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // 페이지 변경
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 글쓰기 페이지로 이동
  const handleWriteClick = () => {
    navigate('/location/write');
  };

  return (
    <section className="w-full py-[80px]">
      <div className="max-w-7xl mx-auto px-4">
        {/* 게시판 헤더 */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-[#0d0f11]">고객센터 게시판</h2>
          <button
            onClick={handleWriteClick}
            className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors font-medium"
          >
            글쓰기
          </button>
        </div>

        {/* 게시글 목록 테이블 */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          {/* 테이블 헤더 */}
          <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 font-semibold text-sm text-gray-700">
            <div className="col-span-1 text-center">번호</div>
            <div className="col-span-7">제목</div>
            <div className="col-span-2 text-center">작성자</div>
            <div className="col-span-1 text-center">날짜</div>
            <div className="col-span-1 text-center">조회</div>
          </div>

          {/* 테이블 바디 */}
          {currentPosts.length > 0 ? (
            currentPosts.map((post, index) => (
              <div
                key={post.id}
                className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="col-span-1 text-center text-gray-600">
                  {posts.length - (indexOfFirstPost + index)}
                </div>
                <div className="col-span-7 text-[#0d0f11] font-medium truncate">
                  {post.title}
                </div>
                <div className="col-span-2 text-center text-gray-600">
                  {post.author}
                </div>
                <div className="col-span-1 text-center text-gray-500 text-sm">
                  {post.date}
                </div>
                <div className="col-span-1 text-center text-gray-500 text-sm">
                  {post.views}
                </div>
              </div>
            ))
          ) : (
            <div className="px-6 py-12 text-center text-gray-500">
              등록된 게시글이 없습니다.
            </div>
          )}
        </div>

        {/* 페이지네이션 */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            {/* 이전 버튼 */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-2 rounded ${
                currentPage === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              ‹
            </button>

            {/* 페이지 번호 */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded ${
                  currentPage === page
                    ? 'bg-blue-700 text-white font-semibold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            ))}

            {/* 다음 버튼 */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-2 rounded ${
                currentPage === totalPages
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              ›
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default BoardSection;
