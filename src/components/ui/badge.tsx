interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "blue" | "red";
  className?: string;
}

const variantClasses = {
  default: "bg-white/10 text-text-secondary border-border",
  gold: "bg-accent-gold/10 text-accent-gold border-accent-gold/30",
  blue: "bg-accent-blue/10 text-accent-blue border-accent-blue/30",
  red: "bg-accent-red/10 text-accent-red border-accent-red/30",
};

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-xs font-medium uppercase tracking-wider border rounded-sm ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
