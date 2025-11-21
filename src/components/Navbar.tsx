import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import type { NavItem } from '@/types/nav';
import { FIREBASE_IMAGES } from '@/constants/firebaseImages';
import ContactButton from '@/components/common/button/ContactButton';

const navItems: NavItem[] = [
  { path: '/about', label: '회사소개' },
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
  { path: '/cases', label: '자주묻는 질문' },
  { path: '/location', label: '고객 센터' },
  { path: '/reviews', label: '실제 고객 후기' },
  { path: '/contact', label: '상담신청' },
  { path: '/careers', label: '인재채용' },
];

const mobileNavItems: NavItem[] = [
  { path: '/about', label: '회사소개' },
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
  { path: '/reviews', label: '고객 후기' },
  { path: '/contact', label: '상담신청' },
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

  // ---------- Sticky ----------
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ---------- Underline animation ----------
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

  // ---------- Prevent body scroll when menu open ----------
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileOpen]);

  // ---------- Active route ----------
  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
    setOpenedSubMenuIndex(null);
  };

  // -------------------------------------------------------
  // 🤍 SAFE AREA + NAVBAR HEIGHT 문제 완벽 해결
  // -------------------------------------------------------
  const baseHeight = 60; // mobile nav height
  const desktopHeight = 80;

  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;

  const safeTop = "env(safe-area-inset-top)";
  const headerHeight = isDesktop
    ? `${desktopHeight}px`
    : `calc(${baseHeight}px + env(safe-area-inset-top))`;

  const headerPaddingTop = isDesktop ? "0px" : safeTop;

  // -------------------------------------------------------

  return (
    <header
      className={`
    fixed left-0 right-0 z-[9999] transition-all duration-300 
    ${isSticky
          ? "bg-[rgba(26,26,46,0.55)] backdrop-blur-md shadow-2xl"
          : (window.innerWidth < 1024
            ? "bg-[rgba(26,26,46,0.35)] backdrop-blur-md"
            : "bg-transparent"
          )
        }
  `}
      style={{
        top: 0,
        height: headerHeight,
        paddingTop: headerPaddingTop,
      }}
    >


      {/* Navbar container */}
      <div className="mx-auto w-full h-full flex items-center justify-between px-4 md:px-8">

        {/* Logo */}
        <Link to="/" onClick={closeMobileMenu}>
          <img
            src={FIREBASE_IMAGES.assets.logo}
            className="h-auto w-[100px] md:w-[240px] max-h-[40px] object-contain"
            alt="한국중소기업지원센터"
          />
        </Link>

        {/* Center Menu (Desktop) */}
        <nav ref={navRef} className="hidden lg:flex items-center relative">
          <ul className="flex items-center gap-8">
            {navItems.map((item, index) => (
              <li
                key={item.path}
                ref={(el) => {
                  menuItemsRef.current[index] = el;
                }}
                className="relative group"
                onMouseEnter={() => setHoveredMenuIndex(index)}
                onMouseLeave={() => setHoveredMenuIndex(null)}
              >
                <Link
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={`
                    lg:text-lg font-semibold duration-300 py-8 inline-block
                    ${isSticky
                      ? isActive(item.path)
                        ? "text-blue-300"
                        : "text-white hover:text-blue-300"
                      : isActive(item.path)
                        ? "text-blue-300"
                        : "text-white hover:text-blue-300"
                    }
                  `}
                >
                  {item.label}
                </Link>

                {/* Sub menu */}
                {item.subMenu && (
                  <ul className="
                    absolute top-full left-0 bg-white/95 backdrop-blur-sm
                    min-w-[220px] py-4 rounded-lg shadow-xl
                    opacity-0 invisible group-hover:opacity-100 group-hover:visible
                    translate-y-2 group-hover:translate-y-0
                    transition-all duration-300 z-50
                  ">
                    {item.subMenu.map((sub) => (
                      <li key={sub.path}>
                        <Link
                          to={sub.path}
                          onClick={closeMobileMenu}
                          className={`block px-6 py-3 
                            text-gray-800 hover:bg-gray-50 hover:text-blue-500
                            transition-all duration-300`}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Underline */}
          <div
            className="absolute bottom-0 h-0.5 bg-blue-400 transition-all duration-300 ease-out"
            style={{
              transform: `translateX(${menuLineStyle.left}px)`,
              width: `${menuLineStyle.width}px`,
              opacity: menuLineStyle.width > 0 ? 1 : 0,
            }}
          />
        </nav>

        {/* Hamburger */}
        <button
          className="lg:hidden text-white text-3xl pr-1"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          ☰
        </button>

        {/* Desktop contact button */}
        <div className="hidden lg:flex">
          <ContactButton onClick={closeMobileMenu} />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 bg-black/40 z-[1000] transition-opacity duration-300 
          ${isMobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu Panel */}
      <aside
        className={`
          fixed top-0 right-0 h-screen w-11/12 sm:w-3/4 bg-white shadow-2xl
          z-[1002] transition-transform duration-300
          ${isMobileOpen ? "translate-x-0" : "translate-x-full"}
        `}
        style={{ paddingTop: headerPaddingTop }}
      >
        {/* Close button (mobile menu) */}
        <button
          onClick={closeMobileMenu}
          className="absolute top-4 right-4 p-2 rounded-fulltransition"
          aria-label="메뉴 닫기"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-6 h-6 text-gray-700"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="p-4">
          <ul className="flex flex-col gap-1">
            {mobileNavItems.map((item, index) => (
              <li key={item.path} className="border-b last:border-0">
                {item.subMenu ? (
                  <button
                    onClick={() =>
                      setOpenedSubMenuIndex(
                        openedSubMenuIndex === index ? null : index
                      )
                    }
                    className="w-full px-4 py-4 flex items-center justify-between"
                  >
                    <span className="text-base font-medium">{item.label}</span>
                    <span>▾</span>
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    onClick={closeMobileMenu}
                    className="block px-4 py-4 text-base"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Sub menu mobile */}
                {openedSubMenuIndex === index && item.subMenu && (
                  <ul className="bg-gray-50 px-4 py-2">
                    {item.subMenu.map((sub) => (
                      <li key={sub.path}>
                        <Link
                          to={sub.path}
                          onClick={closeMobileMenu}
                          className="block px-4 py-3 text-sm"
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <ContactButton onClick={closeMobileMenu} />
        </div>
      </aside>
    </header>
  );
};

export default Navbar;
