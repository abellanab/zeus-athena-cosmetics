import { cn } from "@/lib/utils";

interface EyebrowPillProps {
  children: React.ReactNode;
  variant?: "light" | "dark";
  className?: string;
}

export default function EyebrowPill({ children, variant = "light", className }: EyebrowPillProps) {
  const isDark = variant === "dark";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-3",
        isDark ? "bg-white/10 text-white/70" : "bg-[#EFE9F5] text-[#9B85C4]",
        className
      )}
    >
      <span className={cn("w-1.5 h-1.5 rounded-full flex-shrink-0", isDark ? "bg-white/50" : "bg-[#9B85C4]")} />
      {children}
    </span>
  );
}
