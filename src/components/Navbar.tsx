import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import type { NavItem } from '@/types/nav';
import { FIREBASE_IMAGES } from '@/constants/firebaseImages';
import ContactButton from '@/components/common/button/ContactButton';

const Navbar = () => {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [hoveredMenuIndex, setHoveredMenuIndex] = useState<number | null>(null);
  const [menuLineStyle, setMenuLineStyle] = useState({ left: 0, width: 0 });
  const menuItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const navRef = useRef<HTMLElement | null>(null);
  // const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    {
      path: '/about',
      label: '회사소개',
    },
    {
      path: '/service',
      label: '서비스 소개',
      subMenu: [
        { path: '/service/policy-funds', label: '정책자금 컨설팅' },
        { path: '/service/tax-refund', label: '세금환급 컨설팅' },
        { path: '/service/corporate-business', label: '법인사업자 컨설팅' },
        { path: '/service/certification', label: '기업인증 컨설팅' },
      ],
    },
    {
      path: '/cases',
      label: '자주묻는 질문',
    },
    {
      path: '/location',
      label: '고객 센터',
    },
    {
      path: '/reviews',
      label: '실제 고객 후기',
    },
    {
      path: '/contact',
      label: '상담신청',
    },
    {
      path: '/careers',
      label: '인재채용',
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

  // 메뉴 라인 인디케이터 위치 계산
  useEffect(() => {
    if (hoveredMenuIndex !== null && menuItemsRef.current[hoveredMenuIndex] && navRef.current) {
      const menuItem = menuItemsRef.current[hoveredMenuIndex];
      const nav = navRef.current;
      const navRect = nav.getBoundingClientRect();
      const itemRect = menuItem.getBoundingClientRect();
      
      setMenuLineStyle({
        left: itemRect.left - navRect.left,
        width: itemRect.width,
      });
    } else {
      // 활성 메뉴가 있으면 해당 메뉴에 라인 표시
      const checkIsActive = (path: string) => {
        if (path === '/') {
          return location.pathname === '/';
        }
        return location.pathname.startsWith(path);
      };
      
      const activeIndex = navItems.findIndex(item => checkIsActive(item.path));
      if (activeIndex !== -1 && menuItemsRef.current[activeIndex] && navRef.current) {
        const menuItem = menuItemsRef.current[activeIndex];
        const nav = navRef.current;
        const navRect = nav.getBoundingClientRect();
        const itemRect = menuItem.getBoundingClientRect();
        
        setMenuLineStyle({
          left: itemRect.left - navRect.left,
          width: itemRect.width,
        });
      } else {
        setMenuLineStyle({ left: 0, width: 0 });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hoveredMenuIndex, location.pathname]);

  // 윈도우 리사이즈 시 메뉴 라인 위치 재계산
  useEffect(() => {
    const handleResize = () => {
      if (hoveredMenuIndex !== null && menuItemsRef.current[hoveredMenuIndex] && navRef.current) {
        const menuItem = menuItemsRef.current[hoveredMenuIndex];
        const nav = navRef.current;
        const navRect = nav.getBoundingClientRect();
        const itemRect = menuItem.getBoundingClientRect();
        
        setMenuLineStyle({
          left: itemRect.left - navRect.left,
          width: itemRect.width,
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [hoveredMenuIndex]);

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
    // setOpenDropdown(null);
  };

  // const handleDropdownClick = (path: string) => {
  //   setOpenDropdown(openDropdown === path ? null : path);
  // };

  const renderNavLink = (item: NavItem) => {
    const isActivePath = isActive(item.path);
    
    if (item.isExternal) {
      return (
        <a
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className={`lg:text-lg font-semibold duration-300 py-8 inline-block relative ${
            isSticky ? 'text-white hover:text-blue-300' : 'text-white hover:text-blue-500'
          }`}
        >
          {item.label}
        </a>
      );
    }

    return (
      <Link
        to={item.path}
        className={`lg:text-lg font-semibold transition-colors duration-300 py-8 inline-block relative ${
          isSticky 
            ? isActivePath 
              ? 'text-blue-300' 
              : 'text-white hover:text-blue-300'
            : isActivePath
              ? 'text-blue-300'
              : 'text-white hover:text-blue-300'
        }`}
        onClick={closeMobileMenu}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <header
        className={`w-full z-[999] h-[92px] transition-all duration-300 fixed top-0 left-0 right-0 ${
          isSticky 
            ? 'bg-[rgba(26,26,46,0.55)] backdrop-blur-md border-b shadow-2xl' 
            : 'bg-transparent'
        }`}
      >
      <div
        className='px-3 mx-auto'
        style={{
          width: 'calc(100vw - clamp(0px, calc((100vw - 1600px) * 0.9888), 310px))'
        }}
      >
          <div className="flex items-center justify-center gap-3 relative">
            {/* 로고 */}
            <div className="w-auto py-4 absolute left-0">
              <Link to="/" onClick={closeMobileMenu}>
                <img
                  src={FIREBASE_IMAGES.assets.logo}
                  width={240}
                  alt="한국중소기업지원센터"
                  className="h-auto max-w-full"
                  loading="lazy"
                />
              </Link>
            </div>

            {/* 데스크톱 메뉴 & 모바일 토글 */}
            <div className="text-right lg:text-center">
              {/* 데스크톱 네비게이션 */}
              <nav 
                ref={navRef}
                className="hidden lg:inline-block relative"
              >
                <ul className="flex items-center gap-8 justify-center">
                  {navItems.map((item, index) => (
                    <li 
                      key={item.path} 
                      className="relative group"
                      ref={(el) => {
                        menuItemsRef.current[index] = el;
                      }}
                      onMouseEnter={() => setHoveredMenuIndex(index)}
                      onMouseLeave={() => setHoveredMenuIndex(null)}
                    >
                      {renderNavLink(item)}
                      
                      {/* 드롭다운 서브메뉴 */}
                      {item.subMenu && (
                        <ul className="absolute top-full left-0 bg-white/95 backdrop-blur-sm min-w-[220px] py-4 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50">
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
                {/* 메뉴 라인 인디케이터 */}
                <div
                  id="menuLine"
                  className="absolute bottom-0 h-0.5 bg-blue-400 transition-all duration-300 ease-out"
                  style={{
                    left: `${menuLineStyle.left}px`,
                    width: `${menuLineStyle.width}px`,
                    opacity: menuLineStyle.width > 0 ? 1 : 0,
                  }}
                />
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
            <div className="hidden lg:block absolute right-0">
              <ContactButton onClick={closeMobileMenu} />
            </div>
          </div>
      </div>
    </header>
  )
}

export default Navbar;