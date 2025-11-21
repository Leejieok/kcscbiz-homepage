import { Link } from 'react-router-dom';

interface ContactButtonProps {
  to?: string;
  text?: string;
  onClick?: () => void;
}

const ContactButton = ({
  to = '/request',
  text = '문의하러가기',
  onClick
}: ContactButtonProps) => {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 px-7 py-3 bg-white text-black font-semibold rounded-full hover:bg-blue-500 hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 group overflow-hidden relative"
      onClick={onClick}
    >
      {text}
      <span className="relative w-5 h-5 inline-flex items-center justify-center">
        <svg
          className="absolute transition-all duration-300 opacity-100 group-hover:opacity-0 group-hover:translate-x-2"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg
          className="absolute transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </Link>
  );
};

export default ContactButton;
