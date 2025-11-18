import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import type { NavItem } from '@/types/nav';
import { FIREBASE_IMAGES } from '@/constants/firebaseImages';
import ContactButton from '@/components/common/button/ContactButton';

const navItems: NavItem[] = [
  {
    path: '/',
    label: '홈'
  },
  {
    path: '/about',
    label: '소개'
  },
  {
    path: '/service',
    label: '서비스',
    subMenu: [
      { path: '/service/certification', label: '인증 컨설팅' },
      { path: '/service/consulting', label: '경영 컨설팅' }
    ]
  },
  {
    path: '/review',
    label: '고객후기'
  }
];

const Navbar = () => {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [hoveredMenuIndex, setHoveredMenuIndex] = useState<number | null>(null);
  const [menuLineStyle, setMenuLineStyle] = useState({ left: 0, width: 0 });
  const [openedSubMenuIndex, setOpenedSubMenuIndex] = useState<number | null>(null);
  const menuItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const navRef = useRef<HTMLElement | null>(null);
  const toggleBtnRef = useRef<HTMLButtonElement | null>(null);

  // 스크롤 이벤트로 sticky 상태 업데이트
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 호버된 메뉴 아이템에 따라 밑줄 위치 업데이트
  useEffect(() => {
    if (hoveredMenuIndex !== null && menuItemsRef.current[hoveredMenuIndex]) {
      const element = menuItemsRef.current[hoveredMenuIndex];
      if (element && navRef.current) {
        const navRect = navRef.current.getBoundingClientRect();
        const itemRect = element.getBoundingClientRect();
        setMenuLineStyle({
          left: itemRect.left - navRect.left,
          width: itemRect.width,
        });
      }
    } else {
      setMenuLineStyle({ left: 0, width: 0 });
    }
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

  // (선택) 로고와 햄버거 겹침 최소화 — 현재는 고정 오른쪽 오프셋 사용.
  // 필요하면 logoRef로 너비를 측정해 동적으로 조정할 수 있음.
  useEffect(() => {
    if (!toggleBtnRef.current) return;
    // 기본 오른쪽 여백: 24px. 요구에 따라 283px 기준으로 조정하려면 아래 변수 변경.
    const reservedRight = 24; // px
    toggleBtnRef.current.style.right = `${reservedRight}px`;
  }, []);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
    if (isMobileOpen) setOpenedSubMenuIndex(null);
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
    setOpenedSubMenuIndex(null);
  };

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
        className={`w-full z-[999] h-[60px] md:h-[92px] transition-all duration-300 fixed top-0 left-0 right-0 ${
          isSticky
            ? 'bg-[rgba(26,26,46,0.55)] backdrop-blur-md border-b shadow-2xl'
            : 'bg-transparent'
        }`}
      >
      <div
        className='px-2 sm:px-3 mx-auto'
        style={{
          width: 'calc(100vw - clamp(0px, calc((100vw - 1600px) * 0.9888), 310px))'
        }}
      >
          <div className="flex items-center justify-center gap-2 sm:gap-3 relative h-full">
            {/* 로고 */}
            <div className="w-auto absolute left-0 flex items-center h-full">
              <Link to="/" onClick={closeMobileMenu}>
                <img
                  src={FIREBASE_IMAGES.assets.logo}
                  width={240}
                  alt="한국중소기업지원센터"
                  className="h-auto max-w-full w-[120px] md:w-[240px]"
                  loading="lazy"
                />
              </Link>
            </div>

            {/* 데스크톱 메뉴 & 모바일 토글 */}
            <div className="text-right lg:text-center w-full">
              {/* 데스크톱 네비게이션 */}
              <nav
                ref={navRef}
                className="hidden lg:inline-block relative"
              >
                {/* ...existing desktop nav code... */}
                <ul className="flex items-center gap-4 xl:gap-8 justify-center">
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

              {/* 모바일 메뉴 토글 버튼 - 오른쪽 고정 위치로 조정 */}
              <button
                type="button"
                ref={toggleBtnRef}
                className="absolute top-1/2 -translate-y-1/2 lg:hidden p-2 text-white hover:scale-110 transition-transform duration-300"
                onClick={toggleMobileMenu}
                aria-label={isMobileOpen ? '메뉴 닫기' : '메뉴 열기'}
                // inline style은 useEffect에서 조정함(기본 right 24px)
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

      {/* 모바일 전용: 오른쪽 슬라이드 패널 */}
      <div className="block md:hidden">
        {/* 오버레이 */}
        <div
          className={`fixed inset-0 z-[998] bg-black/40 transition-opacity duration-300 ${isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={closeMobileMenu}
          aria-hidden={!isMobileOpen ? 'true' : 'false'}
        />

        {/* 오른쪽 패널 */}
        <aside
          className={`fixed top-0 right-0 z-[999] h-full w-[86%] max-w-[360px] bg-white shadow-2xl transform transition-transform duration-300 ${
            isMobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <div className="text-lg font-semibold">메뉴</div>
            <div className="flex items-center gap-2">
              {/* 데스크톱용 ContactButton은 숨겨져 있으므로 모바일 패널 아래쪽으로 이동 */}
              <button type="button" onClick={closeMobileMenu} aria-label="닫기" className="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          <div className="p-4 overflow-auto h-[calc(100%-120px)]">
            {/* 서브메뉴가 열려있으면 서브 메뉴 뷰, 아니면 기본 메뉴 리스트 */}
            {openedSubMenuIndex !== null ? (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <button
                    type="button"
                    onClick={() => setOpenedSubMenuIndex(null)}
                    className="p-2"
                    aria-label="뒤로"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <div className="text-base font-medium">
                    {navItems[openedSubMenuIndex]?.label}
                  </div>
                </div>

                <ul className="flex flex-col gap-2">
                  {navItems[openedSubMenuIndex!].subMenu?.map((sub) => (
                    <li key={sub.path}>
                      <Link
                        to={sub.path}
                        onClick={closeMobileMenu}
                        className="block px-4 py-3 rounded hover:bg-gray-100"
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <nav>
                <ul className="flex flex-col gap-2">
                  {navItems.map((item, index) => (
                    <li key={item.path} className="border-b last:border-b-0">
                      {item.subMenu ? (
                        <button
                          type="button"
                          onClick={() => setOpenedSubMenuIndex(index)}
                          className="w-full text-left px-4 py-4 flex items-center justify-between"
                          aria-haspopup="true"
                          aria-expanded={openedSubMenuIndex === index ? 'true' : 'false'}
                        >
                          <span className="text-base font-medium">{item.label}</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </button>
                      ) : (
                        <Link
                          to={item.path}
                          onClick={closeMobileMenu}
                          className="block px-4 py-4"
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>

          {/* 모바일 전용: 문의하기 버튼을 패널 하단에 고정 */}
          <div className="absolute bottom-4 left-4 right-4">
            <ContactButton onClick={closeMobileMenu} />
          </div>
        </aside>
      </div>
    </header>
  );
};

export default Navbar;