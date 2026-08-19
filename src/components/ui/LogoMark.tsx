interface LogoMarkProps {
  className?: string
}

export default function LogoMark({ className = 'h-9 w-9' }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logo-amber" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fcd34d" />
          <stop offset="1" stopColor="#d97706" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#logo-amber)" />
      <path
        d="M16 9L22.5 23H19.2L17.9 19.6H14.1L12.8 23H9.5L16 9ZM15.1 17.2H16.9L16 14.4L15.1 17.2Z"
        fill="#0a0a0f"
      />
    </svg>
  )
}
