interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  accent?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  accent = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
      <h2 className="heading-section text-2xl md:text-3xl text-text-primary mb-4">
        {title}
      </h2>
      {accent && (
        <div
          className={`w-16 h-px bg-gradient-to-r from-transparent via-accent-gold to-transparent mb-4 ${
            align === "center" ? "mx-auto" : ""
          }`}
        />
      )}
      {subtitle && (
        <p className="text-text-secondary max-w-2xl mx-auto text-sm md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
