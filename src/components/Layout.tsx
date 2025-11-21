// components/Layout.tsx
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Fixed Navbar - 항상 최상단 고정 */}
      <Navbar/>

      {/* Main Content - 각 페이지의 배경이 네비바 뒤로 보이도록 설정 */}
      <main className="w-full min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;