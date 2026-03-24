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
    "bg-gradient-to-r from-brand to-accent text-white shadow-[0_18px_40px_-18px_rgba(59,130,246,0.95)] hover:shadow-[0_28px_58px_-24px_rgba(124,58,237,0.85)]",
  secondary:
    "border border-white/14 bg-white/6 text-white hover:border-white/22 hover:bg-white/10",
  ghost:
    "border border-transparent bg-transparent px-0 text-slate-100/84 hover:text-white",
} as const;

const sizeClasses = {
  sm: "h-11 px-5 text-sm",
  md: "h-13 px-6 text-sm sm:text-[0.95rem]",
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
        "inline-flex items-center gap-2 rounded-full font-semibold transition duration-300 hover:-translate-y-0.5",
        variantClasses[variant],
        sizeClasses[size],
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
