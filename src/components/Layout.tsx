// components/Layout.tsx
import Navbar from './Navbar';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  return (
    <div className="min-h-screen flex flex-col w-full h-screen overflow-hidden">
      <Navbar/>
      <main className={`flex-1 w-full h-full overflow-hidden ${isHomePage ? '' : 'pt-[84px]'}`}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;