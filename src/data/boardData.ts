export interface BoardPost {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  views: number;
}

import { FIREBASE_IMAGES } from '@/constants/firebaseImages';

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
      title: "컴퓨터 또는 이동식디스크에 있는 인증서 이메일로 보내는 방법(공동인증서내보내기)",
      content: `
        <p>안녕하세요</p>
        <p><strong>한국중소기업지원센터</strong>입니다.</p>
        <br/>
        
        <p>오늘은 개인공동인증서 또는 사업자인증서를 내보내기 하는 방법에 대해 소개드리려고 합니다.</p>
        <br/>
        <p>컴퓨터 바탕화면 또는 usb에 가지고 계신 공동인증서를 이메일로 보내기 할 때 사용하실 수 있는 방법인데요</p>
        <br/>
        <p>하단에 설명드리는 순서대로 따라하시면 금방 내보내기 하실 수 있습니다</p>
        <br/>
        <hr/>
        
        <p>1. 한국전자인증 사이트에 들어간다.</p>
        <p><a href="https://www.crosscert.com" target="_blank">https://www.crosscert.com</a></p>
        <img src="${FIREBASE_IMAGES.images.article01}" alt="한국전자인증사이트이미지" />
        
        <p>2. 한국전자인증 사이트 메인화면에서</p>
        <img src="${FIREBASE_IMAGES.images.article02}" alt="" />
        
        <p>3. 인증프로그램 설치를 한다.</p>
        <p>(제 컴퓨터는 사용을 하던 사이트라서</p>
        <p>설치됨 이라고 뜹니다)</p>
        <br/>
        <p>처음 사용하시는 경우에는</p>
        <p>'업데이트필요' 라고 뜸</p>
        <p>->설치하기 누르고 실행 누르기</p>
        <img src="${FIREBASE_IMAGES.images.article03}" alt="" />
        
        <p>4. 10번 PFX 내보내기에 바로가기를 클릭한다.</p>
        <img src="${FIREBASE_IMAGES.images.article04}" alt="" />
        
        <p>5. 내보내기 할 인증서를 클릭한다.</p>
        <p>바탕화면 또는 내문서 등 컴퓨터에 있는 경우에는</p>
        <p>하드디스크 클릭</p>
        <br/>
        <p>USB에 들어있는 경우에는</p>
        <p>USB를 본체에 꽂은 후 이동식디스크 클릭</p>
        <br/>
        
        <p>6. 비밀번호를 입력한다.</p>
        <img src="${FIREBASE_IMAGES.images.article05}" alt="" />
        
        <p>7. 바탕화면 또는 인증서를 저장 할</p>
        <p>폴더를 클릭한 후 저장을 누른다.</p>
        <img src="${FIREBASE_IMAGES.images.article06}" alt="" />
        <p>8. 바탕화면에 저장되었는지 확인한다.</p>
        <img src="${FIREBASE_IMAGES.images.article07}" alt="" />
        
        <p>9. 메일쓰기-파일첨부-내 pc 클릭해서</p>
        <p>파일 첨부하기</p>
        <hr/>
        
        <p>이상 개인공동인증서, 사업자공동인증서</p>
        <p>이메일로 보내는 방법에 대해</p>
        <p>설명드렸습니다.</p>
        <br/>
        <p>궁금한점이나 문의사항이 있으신 경우</p>
        <p>연락주시면 도와드리겠습니다</p>
        <br/>
      `,
      author: "관리자",
      date: "2025-01-15",
      views: 123
    },
    {
      id: 3,
      title: "오시는 길",
      content: `
        <p>안녕하세요</p>
        <p><strong>한국중소기업지원센터</strong>입니다.</p>
        <br/>
        
        <p><<찾아오시는 길 안내드립니다>></p>
        <p>부산 1호선 시청역에서 경찰청 방면으로 1블럭 건너오시면</p>
        <p>1층 목짬 건물 3층에 위치하고 있습니다.</p>
        <p>시청역 1번 출구에서 오시는 경우 직진하시다가</p>
        <p>부산고용복지센터에서 우회전하여 내려오시면 위치하고 있습니다.</p>
        <p>오시는 길에 대해 궁금한 점이나 문의사항이 있으신 경우</p>
        <p>연락주시면 도와드리겠습니다.</p>
        <br/>   
        <p>1555-4243</p>
        <p>내방 상담 원할 경우 미리 예약 후에 방문해주시면 감사하겠습니다.</p>
      `,
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
