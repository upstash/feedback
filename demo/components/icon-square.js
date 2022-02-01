export default function IconSquare({ size = 34, color = '#fff', ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      color={color}
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        d="M77.4,201.9l-32.3,27A8,8,0,0,1,32,222.8V64a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H82.5A7.8,7.8,0,0,0,77.4,201.9Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="14"
      />
    </svg>
  )
}
