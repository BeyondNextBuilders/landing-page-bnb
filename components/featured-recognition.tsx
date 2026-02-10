export function FeaturedRecognition() {
  const features = [
    "Clutch Top Developer",
    "Inc. 5000",
    "Featured in Forbes",
    "AWS Partner",
  ]

  return (
    <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
      <div className="flex items-center gap-3 rounded-full border border-border/40 bg-background/95 px-6 py-3 shadow-lg backdrop-blur-sm sm:gap-4 sm:px-8 sm:py-3.5">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap">
          As featured in
        </span>
        <div className="h-4 w-px bg-hyper-cyan/60" />
        <div className="flex items-center gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <span
              key={index}
              className="text-xs font-semibold text-foreground/60 transition-colors hover:text-foreground whitespace-nowrap"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
