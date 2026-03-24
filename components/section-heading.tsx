type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={[
        isCentered ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className={`chip ${isCentered ? "mx-auto w-fit" : ""}`.trim()}>
        {eyebrow}
      </span>
      <h2 className="mt-4 text-[2rem] font-semibold leading-[1.06] text-white sm:mt-5 sm:text-[2.65rem] sm:leading-[1.04] lg:text-5xl">
        {title}
      </h2>
      <p className="mt-3 text-[0.98rem] leading-7 text-muted sm:mt-4 sm:text-lg sm:leading-8">
        {description}
      </p>
    </div>
  );
}
