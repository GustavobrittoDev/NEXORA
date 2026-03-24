import { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
  external?: boolean;
  className?: string;
};

const variantClasses = {
  primary:
    "border border-white/10 bg-[linear-gradient(135deg,rgba(59,130,246,0.96),rgba(124,58,237,0.92))] text-white shadow-[0_18px_40px_-20px_rgba(59,130,246,0.75)] hover:shadow-[0_24px_55px_-24px_rgba(124,58,237,0.72)]",
  secondary:
    "border border-white/12 bg-white/[0.04] text-white hover:border-white/24 hover:bg-white/[0.08]",
  ghost:
    "border border-transparent bg-transparent px-0 text-slate-100/80 hover:text-white",
} as const;

const sizeClasses = {
  sm: "h-11 px-5 text-sm",
  md: "h-[3.125rem] px-6 text-sm sm:text-[0.95rem]",
} as const;

export function ButtonLink({
  href,
  children,
  icon,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
}: ButtonLinkProps) {
  const openInNewTab = external && href.startsWith("http");

  return (
    <a
      href={href}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      className={[
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#040713]",
        variantClasses[variant],
        sizeClasses[size],
        variant === "ghost" ? "" : "hover:-translate-y-0.5",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span>{children}</span>
      {icon}
    </a>
  );
}
