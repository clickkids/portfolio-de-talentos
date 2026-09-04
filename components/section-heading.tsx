import { cn } from "@/lib/utils"

export function SectionHeading({
  label,
  title,
  className = "",
}: {
  label: string
  title: string
  className?: string
}) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <p className="text-xs uppercase tracking-[0.35em] text-primary">{label}</p>
      <h2 className="text-balance font-serif text-4xl font-medium leading-[0.95] tracking-tight text-foreground md:text-5xl">
        {title}
      </h2>
    </div>
  )
}
