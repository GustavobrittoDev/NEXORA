type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={`${
        isCentered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      }`}
    >
      <span
        className={`chip ${isCentered ? "mx-auto w-fit" : ""}`.trim()}
      >
        {eyebrow}
      </span>
      <h2 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-8 text-muted">{description}</p>
    </div>
  );
}
