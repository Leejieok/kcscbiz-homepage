interface CheckIconProps {
  className?: string;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
}

function CheckIcon({
  className = '',
  color = 'text-orange-500',
  size = 'md'
}: CheckIconProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5 md:w-6 md:h-6',
    lg: 'w-6 h-6 md:w-8 md:h-8'
  };

  return (
    <svg
      className={`${sizeClasses[size]} ${color} flex-shrink-0 mt-1 ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export default CheckIcon;
