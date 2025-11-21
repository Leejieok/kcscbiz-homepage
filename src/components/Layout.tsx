// components/Layout.tsx
import Navbar from './Navbar';
import NavbarDark from './NavbarDark';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  // 투명한 Navbar를 사용할 경로 (홈, 서비스 메인만 해당)
  const isTransparentNav =
    location.pathname === '/' ||
    location.pathname === '/service' ||
    location.pathname === '/service/policy-funds';

  return (
    <div className="relative min-h-screen w-full">
      {/* Fixed Navbar - 조건부 렌더링 */}
      {isTransparentNav ? <Navbar /> : <NavbarDark />}

      {/* Main Content - 각 페이지의 배경이 네비바 뒤로 보이도록 설정 */}
      <main className="w-full min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;