import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBoardPosts, incrementViews } from '@/data/boardData';
import type { BoardPost } from '@/data/boardData';
import './BoardDetail.css';

function BoardDetail() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [post, setPost] = useState<BoardPost | null>(null);

    useEffect(() => {
        if (id) {
            const posts = getBoardPosts();
            const foundPost = posts.find(p => p.id === parseInt(id));

            if (foundPost) {
                setPost(foundPost);
                // 조회수 증가
                incrementViews(parseInt(id));
            }
        }
    }, [id]);

    const handleGoBack = () => {
        navigate('/location');
    };

    if (!post) {
        return (
            <section className="w-full min-h-screen py-[80px] bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center py-20">
                        <p className="text-xl text-gray-600 mb-6">게시글을 찾을 수 없습니다.</p>
                        <button
                            onClick={handleGoBack}
                            className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors font-medium"
                        >
                            목록으로 돌아가기
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="w-full min-h-screen py-[80px] bg-white">
            <div className="max-w-4xl mx-auto px-4">
                {/* 상단 버튼 */}
                <div className="mb-6">
                    <button
                        onClick={handleGoBack}
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        <svg
                            className="w-5 h-5"
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
                        <span className="font-medium">목록으로</span>
                    </button>
                </div>

                {/* 게시글 상세 카드 */}
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                    {/* 게시글 헤더 */}
                    <div className="border-b border-gray-200 bg-gray-50 px-8 py-6">
                        <h1 className="text-3xl font-bold text-[#0d0f11] mb-4">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-6 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                                <span className="font-medium">{post.author}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                                <span>{post.date}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                                <span>조회 {post.views}</span>
                            </div>
                        </div>
                    </div>

                    {/* 게시글 본문 */}
                    <div className="px-8 py-12">
                        <div
                            className="prose max-w-none board-content"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                            style={{
                                lineHeight: '1.8',
                                fontSize: '16px',
                                color: '#333'
                            }}
                        />
                    </div>
                </div>

                {/* 하단 버튼 */}
                <div className="mt-8 flex justify-center">
                    <button
                        onClick={handleGoBack}
                        className="px-8 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors font-medium"
                    >
                        목록으로 돌아가기
                    </button>
                </div>
            </div>
        </section>
    );
}

export default BoardDetail;
