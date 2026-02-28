import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "outline" | "filled";
}

export function Badge({
  children,
  className,
  variant = "outline",
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide transition-colors",
        variant === "outline" &&
          "border border-[var(--color-ui-border)] text-gray-300",
        variant === "filled" && "bg-white/10 text-white border border-white/20",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
