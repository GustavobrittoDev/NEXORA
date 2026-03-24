type NexoraLogoProps = {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  className?: string;
};

const sizes = {
  sm: {
    wrapper: "gap-1.5",
    word: "text-[1.35rem] sm:text-[1.55rem]",
    tagline: "text-[0.58rem] tracking-[0.34em]",
    x: "h-[0.82em] w-[0.72em]",
  },
  md: {
    wrapper: "gap-2",
    word: "text-[1.9rem] sm:text-[2.2rem]",
    tagline: "text-[0.68rem] tracking-[0.38em]",
    x: "h-[0.84em] w-[0.76em]",
  },
  lg: {
    wrapper: "gap-3",
    word: "text-[3.05rem] sm:text-[3.7rem] lg:text-[4.6rem]",
    tagline: "text-[0.72rem] sm:text-[0.82rem] tracking-[0.45em]",
    x: "h-[0.86em] w-[0.78em]",
  },
} as const;

export function NexoraLogo({
  size = "md",
  showTagline = true,
  className = "",
}: NexoraLogoProps) {
  const currentSize = sizes[size];

  return (
    <div
      className={`inline-flex flex-col ${currentSize.wrapper} ${className}`.trim()}
      aria-label="Nexora"
    >
      <div
        className={`flex items-center ${currentSize.word} font-[family-name:var(--font-sora)] font-semibold uppercase leading-none text-white`}
      >
        <span className="tracking-[0.28em]">NE</span>
        <span
          className={`relative mx-[0.02em] inline-flex ${currentSize.x} shrink-0 items-center justify-center`}
          aria-hidden="true"
        >
          <span className="absolute h-[0.16em] w-full rounded-full bg-gradient-to-r from-brand-strong via-accent-soft to-brand -rotate-45 shadow-[0_0_28px_rgba(97,166,255,0.65)]" />
          <span className="absolute h-[0.16em] w-full rounded-full bg-gradient-to-r from-accent-soft via-brand-strong to-accent rotate-45 shadow-[0_0_28px_rgba(124,58,237,0.45)]" />
        </span>
        <span className="tracking-[0.28em]">ORA</span>
      </div>

      {showTagline ? (
        <span
          className={`${currentSize.tagline} text-slate-200/72 uppercase leading-none`}
        >
          Tecnologia que impulsiona negócios.
        </span>
      ) : null}
    </div>
  );
}
