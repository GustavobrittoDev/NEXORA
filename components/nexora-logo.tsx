type NexoraLogoProps = {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  className?: string;
};

const sizes = {
  sm: {
    wrapper: "gap-1.5",
    word: "text-[1.2rem] min-[360px]:text-[1.35rem] sm:text-[1.55rem]",
    tagline:
      "text-[0.55rem] tracking-[0.28em] sm:text-[0.58rem] sm:tracking-[0.34em]",
    x: "h-[0.78em] w-[0.68em] sm:h-[0.82em] sm:w-[0.72em]",
    tracking: "tracking-[0.16em] sm:tracking-[0.22em]",
  },
  md: {
    wrapper: "gap-2",
    word: "text-[1.65rem] min-[360px]:text-[1.85rem] sm:text-[2.15rem]",
    tagline:
      "text-[0.62rem] tracking-[0.3em] sm:text-[0.68rem] sm:tracking-[0.38em]",
    x: "h-[0.8em] w-[0.7em] sm:h-[0.84em] sm:w-[0.76em]",
    tracking: "tracking-[0.16em] sm:tracking-[0.22em]",
  },
  lg: {
    wrapper: "gap-3",
    word: "text-[2.15rem] min-[360px]:text-[2.4rem] min-[390px]:text-[2.7rem] sm:text-[3.7rem] lg:text-[4.5rem]",
    tagline:
      "text-[0.52rem] tracking-[0.24em] min-[360px]:text-[0.56rem] min-[390px]:tracking-[0.28em] sm:text-[0.82rem] sm:tracking-[0.42em]",
    x: "h-[0.78em] w-[0.68em] min-[360px]:h-[0.8em] min-[360px]:w-[0.72em] min-[390px]:h-[0.82em] min-[390px]:w-[0.74em] sm:h-[0.86em] sm:w-[0.78em]",
    tracking:
      "tracking-[0.12em] min-[360px]:tracking-[0.14em] min-[390px]:tracking-[0.16em] sm:tracking-[0.22em]",
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
      className={`flex flex-col ${currentSize.wrapper} ${className}`.trim()}
      aria-label="NEXORA"
    >
      <div
        className={`flex items-end ${currentSize.word} font-[family-name:var(--font-sora)] font-semibold uppercase leading-[0.92] text-white`}
      >
        <span className={`${currentSize.tracking} leading-none`}>NE</span>
        <span
          className={`relative mx-[0.035em] inline-flex ${currentSize.x} shrink-0 -translate-y-[0.02em] items-center justify-center`}
          aria-hidden="true"
        >
          <span className="absolute h-[0.14em] w-full rounded-full bg-gradient-to-r from-brand-strong via-accent-soft to-brand -rotate-45 shadow-[0_0_22px_rgba(97,166,255,0.52)]" />
          <span className="absolute h-[0.14em] w-full rounded-full bg-gradient-to-r from-accent-soft via-brand-strong to-accent rotate-45 shadow-[0_0_22px_rgba(124,58,237,0.34)]" />
        </span>
        <span className={`${currentSize.tracking} leading-none`}>ORA</span>
      </div>

      {showTagline ? (
        <span
          className={`${currentSize.tagline} text-center text-slate-200/72 uppercase leading-none lg:text-left`}
        >
          Tecnologia que impulsiona negócios.
        </span>
      ) : null}
    </div>
  );
}
