export function Favicon({
  size = 32,
  className = '',
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* <rect width="32" height="32" rx="8" fill="var(--accent-color, #aab2d1)" /> */}
      <circle cx="16" cy="16" r="16" fill="var(--foreground, #606887)" />

      <path
        d="M11 22 L8 10 L10 10 L13 22 Z M9 18 L12 18"
        stroke="var(--background, #f3f2f9)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      <path
        d="M18 10 L26 10 M22 10 L22 22"
        stroke="var(--background, #f3f2f9)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// export function Favicon({
//   size = 32,
//   className = '',
// }: {
//   size?: number;
//   className?: string;
// }) {
//   return (
//     <svg
//       width={size}
//       height={size}
//       viewBox="0 0 32 32"
//       className={className}
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       {/* Background */}
//       <rect width="32" height="32" rx="6" fill="var(--accent-color, #aab2d1)" />

//       {/* Combined A and T design */}
//       {/* Letter A - left side */}
//       <path
//         d="M6 26 L9.5 14 L12.5 14 L16 26 L14 26 L13.2 23.5 L8.8 23.5 L8 26 Z M9.5 21.5 L12.5 21.5 L11 17 Z"
//         fill="var(--foreground, #606887)"
//         strokeWidth="0.5"
//       />

//       {/* Letter T - right side, sharing the A's right stroke */}
//       <path
//         d="M14 6 L26 6 L26 8.5 L22 8.5 L22 26 L18 26 L18 8.5 L14 8.5 Z"
//         fill="var(--foreground, #606887)"
//       />

//       {/* Connection element */}
//       <rect
//         x="14"
//         y="14"
//         width="4"
//         height="2"
//         fill="var(--foreground, #606887)"
//         opacity="0.7"
//       />
//     </svg>
//   );
// }
