const valuePoints = [
  {
    title: "The right expertise",
    description:
      "Experienced engineers and designers delivering reliable, production-ready software.",
  },
  {
    title: "The right approach",
    description:
      "Flexible engagement models, from focused projects to complex, multi-system solutions.",
  },
  {
    title: "The right communication",
    description:
      "Clear processes, direct collaboration, and fluent English throughout the project.",
  },
  {
    title: "The right timing",
    description:
      "Teams that start when you need them and scale smoothly as requirements evolve.",
  },
]

function CheckIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Circular outline - thin black stroke, white interior */}
      <circle 
        cx="16" 
        cy="16" 
        r="14.25" 
        stroke="#000000"
        strokeWidth="1.5"
        fill="white"
      />
      {/* Angular geometric checkmark - Hyper Cyan with black stroke */}
      <path
        d="M9.5 16 L13.5 20.5 L22.5 11"
        fill="none"
        stroke="hsl(180 100% 50%)"
        strokeWidth="2.8"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  )
}

export function ValueProposition() {
  return (
    <section className="relative bg-background pt-[260px] sm:pt-[300px] lg:pt-[380px] pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Headline */}
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold leading-[1.2] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              No guesswork.
              <br />
              <span className="text-primary">Building software with us just works.</span>
            </h2>
          </div>

          {/* Value Grid */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">
            {valuePoints.map((point) => (
              <div key={point.title} className="group flex gap-4">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    <CheckIcon />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-base font-normal leading-[1.7] text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
