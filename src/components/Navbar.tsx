import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import type { NavItem } from '@/types/nav';
import logoImg from '@/assets/images/logo.png';
import ContactButton from '@/components/button/ContactButton';

const Navbar = () => {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    {
      path: '/about',
      label: '회사소개',
    },
    {
      path: '/service',
      label: '서비스 소개',
      subMenu: [
        { path: '/service/policy-funds', label: '정책자금' },
        { path: '/service/government-support', label: '정부지원금' },
        { path: '/service/certification', label: '기업인증' },
      ],
    },
    {
      path: 'https://blog.naver.com/kcsc0',
      label: '승인사례',
      isExternal: true,
    },
    {
      path: '/contact',
      label: '찾아오시는 길',
    },
  ];

  // Sticky 헤더 처리
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 모바일 메뉴 열렸을 때 스크롤 방지
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileOpen]);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
  };

  const handleDropdownClick = (path: string) => {
    setOpenDropdown(openDropdown === path ? null : path);
  };

  const renderNavLink = (item: NavItem) => {
    if (item.isExternal) {
      return (
        <a
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white lg:text-lg font-semibold duration-300 py-8 inline-block relative group"
        >
          {item.label}
          <span className="absolute bottom-6 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
      );
    }

    return (
      <Link
        to={item.path}
        className={`text-white lg:text-lg font-semibold hover:text-blue-400 transition-colors duration-300 py-8 inline-block relative group ${
          isActive(item.path) ? 'text-blue-400' : ''
        }`}
        onClick={closeMobileMenu}
      >
        {item.label}
        <span
          className={`absolute bottom-6 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${
            isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
          }`}
        ></span>
      </Link>
    );
  };

  return (
    <header
        className={`w-full z-[999] h-[96px] transition-all duration-300 fixed top-0 left-0 right-0 ${
          isSticky ? 'bg-[#1a1a2e] border-b border-white/10 shadow-2xl' : 'bg-transparent'
        }`}
      >
      <div
        className='px-3 mx-auto'
        style={{
          width: 'calc(100vw - clamp(0px, calc((100vw - 1600px) * 0.9888), 310px))'
        }}
      >
          <div className="flex items-center justify-between gap-3">
            {/* 로고 */}
            <div className="w-auto py-4">
              <Link to="/" onClick={closeMobileMenu}>
                <img
                  src={logoImg}
                  width={190}
                  alt="한국중소기업지원센터"
                  className="h-auto max-w-full"
                />
              </Link>
            </div>

            {/* 데스크톱 메뉴 & 모바일 토글 */}
            <div className="flex-1 text-right lg:text-center">
              {/* 데스크톱 네비게이션 */}
              <nav className="hidden lg:inline-block">
                <ul className="flex items-center gap-14 justify-center">
                  {navItems.map((item) => (
                    <li key={item.path} className="relative group">
                      {renderNavLink(item)}
                      
                      {/* 드롭다운 서브메뉴 */}
                      {item.subMenu && (
                        <ul className="absolute top-full left-0 bg-white min-w-[220px] py-4 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-5 group-hover:translate-y-0 transition-all duration-300 z-50">
                          {item.subMenu.map((subItem) => (
                            <li key={subItem.path}>
                              <Link
                                to={subItem.path}
                                className={`block px-6 py-3 text-gray-800 hover:bg-gray-50 hover:text-blue-500 hover:pl-8 transition-all duration-300 ${
                                  location.pathname === subItem.path
                                    ? 'bg-gray-50 text-blue-500'
                                    : ''
                                }`}
                                onClick={closeMobileMenu}
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              {/* 모바일 메뉴 토글 버튼 */}
              <button
                className="inline-block lg:hidden p-2 text-white hover:scale-110 transition-transform duration-300"
                onClick={toggleMobileMenu}
                aria-label="메뉴 열기"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M24.4444 26V28H0V26H24.4444ZM40 19V21H0V19H40ZM40 12V14H15.5556V12H40Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* 문의하기 버튼 (데스크톱만) */}
            <div className="hidden lg:block">
              <ContactButton onClick={closeMobileMenu} />
            </div>
          </div>
      </div>
    </header>
  )
}

export default Navbar;