export interface BoardPost {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  views: number;
}

// localStorage에서 게시글 가져오기
export const getBoardPosts = (): BoardPost[] => {
  const posts = localStorage.getItem('boardPosts');
  if (posts) {
    return JSON.parse(posts);
  }
  // 초기 데이터
  const initialPosts: BoardPost[] = [
    {
      id: 1,
      title: "찾아오시는 길 안내",
      content: "저희 사무실은 서울시 강남구에 위치하고 있습니다.",
      author: "관리자",
      date: "2025-01-15",
      views: 123
    },
    {
      id: 2,
      title: "주차 안내",
      content: "건물 지하 주차장을 이용하실 수 있습니다.",
      author: "관리자",
      date: "2025-01-14",
      views: 89
    },
    {
      id: 3,
      title: "방문 시 준비사항",
      content: "상담 시 필요한 서류를 안내드립니다.",
      author: "관리자",
      date: "2025-01-13",
      views: 156
    }
  ];
  localStorage.setItem('boardPosts', JSON.stringify(initialPosts));
  return initialPosts;
};

// 게시글 저장
export const saveBoardPosts = (posts: BoardPost[]) => {
  localStorage.setItem('boardPosts', JSON.stringify(posts));
};

// 새 게시글 추가
export const addBoardPost = (post: Omit<BoardPost, 'id' | 'date' | 'views'>) => {
  const posts = getBoardPosts();
  const newPost: BoardPost = {
    ...post,
    id: posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1,
    date: new Date().toISOString().split('T')[0],
    views: 0
  };
  posts.unshift(newPost);
  saveBoardPosts(posts);
  return newPost;
};

// 조회수 증가
export const incrementViews = (id: number) => {
  const posts = getBoardPosts();
  const post = posts.find(p => p.id === id);
  if (post) {
    post.views += 1;
    saveBoardPosts(posts);
  }
};
