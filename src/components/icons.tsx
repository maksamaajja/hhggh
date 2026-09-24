import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: P) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function StarIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.6l2.75 5.58 6.16.9-4.45 4.33 1.05 6.13L12 16.57l-5.51 2.87 1.05-6.13L3.09 9.08l6.16-.9L12 2.6z" />
    </svg>
  );
}

export function GramIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="gram-diamond" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7DD3FF" />
          <stop offset="100%" stopColor="#0A84FF" />
        </linearGradient>
      </defs>
      <path d="M12 2.4 21.6 12 12 21.6 2.4 12 12 2.4z" fill="url(#gram-diamond)" />
      <path
        d="M8 12h8M12 8v8"
        stroke="#fff"
        strokeOpacity="0.55"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GamepadIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M7.5 6.75h9A5.75 5.75 0 0 1 22.25 12.5v.4a4.35 4.35 0 0 1-7.7 2.75l-.85-1.15H10.3l-.85 1.15a4.35 4.35 0 0 1-7.7-2.75v-.4A5.75 5.75 0 0 1 7.5 6.75zM8.75 9.6a1.1 1.1 0 0 0 0 2.2h1.6v1.6a1.1 1.1 0 0 0 2.2 0v-1.6h1.6a1.1 1.1 0 0 0 0-2.2h-1.6V8a1.1 1.1 0 0 0-2.2 0v1.6H8.75z"
        clipRule="evenodd"
      />
      <rect x="14.9" y="8.6" width="1.7" height="1.7" rx="0.85" />
      <rect x="17.4" y="11.1" width="1.7" height="1.7" rx="0.85" />
    </svg>
  );
}

export function MarketIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M4.6 4.8A1.6 1.6 0 0 1 6.2 3.6h11.6a1.6 1.6 0 0 1 1.6 1.2l1.1 4.4A2.6 2.6 0 0 1 18 12v6.4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V12a2.6 2.6 0 0 1-2.5-1.8l1.1-4.4zM7.5 6.4l-.75 3h10.5l-.75-3H7.5zm.5 5.6v6.4h8V12a.6.6 0 0 0-.6-.6H8.6a.6.6 0 0 0-.6.6z"
        clipRule="evenodd"
      />
      <path d="M9.4 14.4h5.2v1.6H9.4z" opacity="0.35" />
    </svg>
  );
}

export function GiftIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M11.1 3.2A2.9 2.9 0 0 1 14 1.5c1.35 0 2.55.8 3.1 2.05l.45.95h1.95a2.4 2.4 0 0 1 2.4 2.4v1.2a2.4 2.4 0 0 1-2.4 2.4h-.6l-.25 7.3A3.15 3.15 0 0 1 15.55 21.5h-7.1a3.15 3.15 0 0 1-3.15-2.95L5 11.25h-.6A2.4 2.4 0 0 1 2 8.85v-1.2a2.4 2.4 0 0 1 2.4-2.4h1.95l.45-.95A3.25 3.25 0 0 1 9.9 1.5c.55 0 1.1.15 1.6.45zM9.4 4.35l-.45.95c-.15.3-.45.5-.8.5h-.75a.8.8 0 0 1 0-1.6h.75c.5 0 .95.25 1.2.65zm6.1 0c.25-.4.7-.65 1.2-.65h.75a.8.8 0 0 1 0 1.6h-.75a1.05 1.05 0 0 1-.8-.5l-.4-.95zM5.6 8.45h12.8v-1.2H5.6v1.2zm1 2.8.2 5.7c.04.75.66 1.35 1.41 1.35H10V11.25H6.6zm9.4 0V18.3h1.79c.75 0 1.37-.6 1.41-1.35l.2-5.7H16z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function PigIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M12.05 3.5c4.7 0 8.55 3 8.55 6.9 0 1.7-.75 3.3-2 4.5l.45 2.3c.2.85-.45 1.7-1.3 1.75l-1.9.2c-.45.75-1.1 1.4-1.85 1.9l-.35 1.4c-.2.75-.9 1.2-1.65 1.05-.65-.1-1.1-.75-1-1.4l.1-1.45c-.7.05-1.4.05-2.1 0l.1 1.45c.1.65-.35 1.3-1 1.4-.75.15-1.45-.3-1.65-1.05l-.35-1.4c-.75-.5-1.4-1.15-1.85-1.9l-1.9-.2c-.85-.05-1.5-.9-1.3-1.75l.45-2.3a7.85 7.85 0 0 1-2-4.5c0-3.9 3.85-6.9 8.55-6.9zM9.5 8.6a1.15 1.15 0 1 0 0 2.3 1.15 1.15 0 0 0 0-2.3zm-3.15 2.7a1.15 1.15 0 1 0 0 2.3 1.15 1.15 0 0 0 0-2.3zM9.9 5.4c1.35 0 2.45 1.05 2.45 2.35v1.1H7.45V7.75C7.45 6.45 8.55 5.4 9.9 5.4z"
        clipRule="evenodd"
      />
      <circle cx="15.4" cy="10.4" r="1.2" fill="var(--color-app-bg, #000)" />
    </svg>
  );
}

export function SearchIcon(props: P) {
  return (
    <Icon strokeWidth="2.1" {...props}>
      <circle cx="11" cy="11" r="6.4" />
      <path d="m16 16 4.2 4.2" />
    </Icon>
  );
}

export function FilterIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.5 5.4h15c.65 0 1.05.75.65 1.3l-5.4 6.3v5.4c0 .55-.4 1.05-.95 1.15l-3 .55c-.65.1-1.25-.4-1.25-1.05v-6.35L3.85 6.7c-.4-.55 0-1.3.65-1.3z" />
    </svg>
  );
}

export function SortIcon(props: P) {
  return (
    <Icon strokeWidth="2.1" {...props}>
      <path d="M8 4.5v15M8 4.5 5 7.5M8 4.5l3 3" />
      <path d="M16 19.5v-15M16 19.5l-3-3M16 19.5l3-3" />
    </Icon>
  );
}

export function ChevronDownIcon(props: P) {
  return (
    <Icon strokeWidth="2.2" {...props}>
      <path d="m7 10 5 5 5-5" />
    </Icon>
  );
}

export function ChevronRightIcon(props: P) {
  return (
    <Icon strokeWidth="2.2" {...props}>
      <path d="m10 7 5 5-5 5" />
    </Icon>
  );
}

export function PlusIcon(props: P) {
  return (
    <Icon strokeWidth="2.3" {...props}>
      <path d="M12 5.5v13M5.5 12h13" />
    </Icon>
  );
}

export function MinusIcon(props: P) {
  return (
    <Icon strokeWidth="2.3" {...props}>
      <path d="M5.5 12h13" />
    </Icon>
  );
}

export function ArrowUpIcon(props: P) {
  return (
    <Icon strokeWidth="2.2" {...props}>
      <path d="M12 19V5.5M12 5.5 6.5 11M12 5.5l5.5 5.5" />
    </Icon>
  );
}

export function SendIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M3.6 10.75a1 1 0 0 1 0-1.3l16.5-7.35a1 1 0 0 1 1.35 1.2l-3.85 15.85a1 1 0 0 1-1.6.55l-2.85-4.9-5.15-.75a.55.55 0 0 1-.4-.3l-1.75-1.75a1 1 0 0 1 .13-1.5z" />
    </svg>
  );
}

export function CartIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M3.2 5.1a1.1 1.1 0 0 1 1.1-1h1.3a1.1 1.1 0 0 1 1.07.82l1.05 4.2h9.7c.72 0 1.24.66 1.1 1.36l-1.35 7a1.7 1.7 0 0 1-1.66 1.34H8.9a1.7 1.7 0 0 1-1.66-1.38L5.7 9.72H4.3a1.1 1.1 0 0 1-1.1-1.1V5.1zm5.7 11.2h7.35l1.05-5.4H7.9l1 5.4zM8.7 19.1a1.55 1.55 0 1 0 0 3.1 1.55 1.55 0 0 0 0-3.1zm7.6 0a1.55 1.55 0 1 0 0 3.1 1.55 1.55 0 0 0 0-3.1z"
        clipRule="evenodd"
        transform="translate(0 -1.5)"
      />
    </svg>
  );
}

export function DocumentIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M7.2 2.6A2.2 2.2 0 0 1 9 1.5h5.4L19 6.1v13.2A2.2 2.2 0 0 1 16.8 21.5H9a2.2 2.2 0 0 1-2.2-2.2V2.6zm7.3 2V7h3.4l-3.4-2.4zM8.9 11h6.2v1.6H8.9V11zm0 3.4h6.2V16H8.9v-1.6z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function PencilIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.9 3.6a2.4 2.4 0 0 1 3.4 0l3.1 3.1a2.4 2.4 0 0 1 0 3.4l-1.2 1.2-6.5-6.5 1.2-1.2zM12.4 6l6.5 6.5-7.4 7.4a2.6 2.6 0 0 1-1.3.7l-4.2.85a1 1 0 0 1-1.2-1.2l.85-4.2c.14-.66.42-1.26.92-1.75l5.95-7.4z" />
    </svg>
  );
}

export function PauseIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <rect x="6.5" y="5" width="4" height="14" rx="1.7" />
      <rect x="13.5" y="5" width="4" height="14" rx="1.7" />
    </svg>
  );
}

export function InfoIcon(props: P) {
  return (
    <Icon strokeWidth="1.9" {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 11.2v5" />
      <circle cx="12" cy="8" r="1.05" fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function HamburgerIcon(props: P) {
  return (
    <Icon strokeWidth="2.2" {...props}>
      <path d="M4.5 7h15M4.5 12h15M4.5 17h15" />
    </Icon>
  );
}

export function GlobeIcon(props: P) {
  return (
    <Icon strokeWidth="1.8" {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.6 12h16.8M12 3.5c2.4 2.3 3.6 5.2 3.6 8.5S14.4 18.2 12 20.5c-2.4-2.3-3.6-5.2-3.6-8.5S9.6 5.8 12 3.5z" />
    </Icon>
  );
}

export function ShieldIcon(props: P) {
  return (
    <Icon strokeWidth="1.8" {...props}>
      <path d="M12 3.4 19 6v5.2c0 4.4-2.9 7.6-7 9.4-4.1-1.8-7-5-7-9.4V6l7-2.6z" />
      <path d="m9 12 2.2 2.2L15.2 10" />
    </Icon>
  );
}

export function MapIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M8.7 3.5 3.6 5.3v15.2l5.1-1.8 6.6 1.8 5.1-1.8V3.5l-5.1 1.8-6.6-1.8zm.6 2.2 5.4 1.5v11.1l-5.4-1.5V5.7zM6.3 7l1.5-.55v11.1L6.3 18.1V7zm12.4 9.7V6.55L17 7.1v11.1l1.7-.4z" />
    </svg>
  );
}

export function CloverIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.8c1.9 0 3.5 1.5 3.5 3.4 0 .7-.2 1.3-.6 1.8.6-.4 1.3-.7 2.1-.7 1.9 0 3.5 1.6 3.5 3.5S18.9 14.3 17 14.3c-.8 0-1.5-.3-2.1-.7.4.5.6 1.1.6 1.8 0 1.9-1.6 3.4-3.5 3.4s-3.5-1.5-3.5-3.4c0-.7.2-1.3.6-1.8-.6.4-1.3.7-2.1.7-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5c.8 0 1.5.3 2.1.7-.4-.5-.6-1.1-.6-1.8 0-1.9 1.6-3.4 3.5-3.4z" />
      <path d="M13.4 17.2c.9 2.2 2.6 3.9 5 4.7-1.4 1.1-3.6 1.3-5.3.4z" />
    </svg>
  );
}

export function CheckIcon(props: P) {
  return (
    <Icon strokeWidth="2.5" {...props}>
      <path d="m5.5 12.5 4.4 4.4 8.6-9.8" />
    </Icon>
  );
}

export function XIcon(props: P) {
  return (
    <Icon strokeWidth="2.3" {...props}>
      <path d="M6.5 6.5l11 11M17.5 6.5l-11 11" />
    </Icon>
  );
}

export function HeartIcon({
  filled,
  ...props
}: P & { filled?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 20.3C7.3 17.1 4.2 14.2 4.2 10.5A4.6 4.6 0 0 1 8.8 5.9c1.55 0 3 .75 3.2 2.1.2-1.35 1.65-2.1 3.2-2.1a4.6 4.6 0 0 1 4.6 4.6c0 3.7-3.1 6.6-7.8 9.8z" />
    </svg>
  );
}

export function CardIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="6" width="18" height="12" rx="2.5" fill="currentColor" />
      <rect x="3" y="9" width="18" height="2.3" fill="var(--color-app-bg, #000)" />
      <rect x="5.5" y="14" width="6" height="1.7" rx="0.85" fill="var(--color-app-bg, #000)" />
    </svg>
  );
}

export function ActivityIcon(props: P) {
  return (
    <Icon strokeWidth="2" {...props}>
      <path d="M3 12h3.5l2.2-6 3.6 12 2.4-7H21" />
    </Icon>
  );
}

export function LinesIcon(props: P) {
  return (
    <Icon strokeWidth="2.2" {...props}>
      <path d="M6 9h12M6 15h12" />
    </Icon>
  );
}

export function BellIcon(props: P) {
  return (
    <Icon {...props}>
      <path d="M18 9.5a6 6 0 0 0-12 0c0 7-3 7-3 8.5h18c0-1.5-3-1.5-3-8.5Z" />
      <path d="M10 21h4" />
    </Icon>
  );
}

export function CopyIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M8 2.7A2.7 2.7 0 0 1 10.7 5.4H16a2.7 2.7 0 0 1 2.7 2.7v5.3A2.7 2.7 0 0 1 16 16.1h-.6v2.2A2.7 2.7 0 0 1 12.7 21H8a2.7 2.7 0 0 1-2.7-2.7V8A2.7 2.7 0 0 1 8 5.4h.3V5.4A2.7 2.7 0 0 1 8 2.7zm.3 2.7h.4v.3c0 .1.1.2.2.2h5.3c.1 0 .2-.1.2-.2v-.3H16A.7.7 0 0 1 16.7 6v5.3a.7.7 0 0 1-.7.7h-5.4a.7.7 0 0 1-.7-.7V8a.7.7 0 0 1 .7-.7H8zM15.4 14.6v1.2c0 .9-.7 1.6-1.6 1.6H8.7a1.6 1.6 0 0 1-1.6-1.6V8.7c0-.9.7-1.6 1.6-1.6H14c.9 0 1.6.7 1.6 1.6v1.5h-1.9V8.7h-.6v5.9h3.9z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function SparklesIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M11 2.5l1.55 4.3 4.3 1.55-4.3 1.55L11 14.2l-1.55-4.3-4.3-1.55 4.3-1.55L11 2.5zM18.6 14.2l.95 2.55 2.55.95-2.55.95-.95 2.55-.95-2.55-2.55-.95 2.55-.95.95-2.55zM5.6 14.6l1.05 2.8 2.8 1.05-2.8 1.05-1.05 2.8-1.05-2.8-2.8-1.05 2.8-1.05L5.6 14.6z" />
    </svg>
  );
}

export function UsersIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M9 11.4a4.1 4.1 0 1 0 0-8.2 4.1 4.1 0 0 0 0 8.2zm0 1.85c-3.7 0-6.7 2.35-6.7 5.25V20a1.6 1.6 0 0 0 1.6 1.6h10.2A1.6 1.6 0 0 0 15.7 20v-1.5c0-2.9-3-5.25-6.7-5.25zM16.9 11.2a3.45 3.45 0 1 0 0-6.9 3.45 3.45 0 0 0 0 6.9zm.35 1.75c-.55 0-1.1-.05-1.6-.15 1.55 1.05 2.55 2.5 2.55 4.1v1.6h4.3v-1.35c0-2.55-2.25-4.45-5.25-4.2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function WalletIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6.8 3.4A2.6 2.6 0 0 0 4.2 6v1H3a1.5 1.5 0 0 0 0 3h1.2v1.8H3a1.5 1.5 0 0 0 0 3h1.2V18a2.6 2.6 0 0 0 2.6 2.6h11.6A3.6 3.6 0 0 0 21 17V7.6a3.6 3.6 0 0 0-3.6-3.6H6.8zM6.1 6a.6.6 0 0 1 .6-.6h10.1A1.6 1.6 0 0 1 18.4 7v1.4H6.1V6zm0 5.2h11.9v5.2a1.6 1.6 0 0 1-1.6 1.6H6.7a.6.6 0 0 1-.6-.6v-6.2zm10.7 1.3a1.35 1.35 0 1 0 0 2.7 1.35 1.35 0 0 0 0-2.7z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function ProfileIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <circle cx="12" cy="8.2" r="4.1" />
      <path d="M4.6 19.6c.8-3.6 3.7-5.6 7.4-5.6s6.6 2 7.4 5.6a1.5 1.5 0 0 1-1.46 1.85H6.06A1.5 1.5 0 0 1 4.6 19.6z" />
    </svg>
  );
}

export function StakingIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M11.25 2.75a1.5 1.5 0 0 1 1.5 0l6.7 3.87a1.5 1.5 0 0 1 .75 1.3v7.76a1.5 1.5 0 0 1-.75 1.3l-6.7 3.87a1.5 1.5 0 0 1-1.5 0l-6.7-3.87a1.5 1.5 0 0 1-.75-1.3V7.92a1.5 1.5 0 0 1 .75-1.3l6.7-3.87zM12 4.55 6.9 7.5v6.25L12 16.75l5.1-3V7.5L12 4.55zM12 8.7a3.3 3.3 0 1 1 0 6.6 3.3 3.3 0 0 1 0-6.6z"
        clipRule="evenodd"
      />
      <path d="M12 10.4a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2z" fill="var(--color-app-bg, #000)" />
    </svg>
  );
}

export function TonIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="ton-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9AA7FF" />
          <stop offset="100%" stopColor="#0098EA" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="10" fill="url(#ton-grad)" />
      <path
        d="M7.2 8.4h9.6L12 16.8 7.2 8.4zm1.6 1.7L12 14.4l3.2-4.3H8.8z"
        fill="#fff"
        fillRule="evenodd"
      />
    </svg>
  );
}
