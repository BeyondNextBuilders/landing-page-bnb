import { Founders } from "./founders"
import { ServicesFlow } from "./services-flow"

export function Services() {
  return (
    <>
      <section
        id="services"
        className="relative z-10 bg-muted pt-14 sm:pt-18 lg:pt-22 pb-16"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ServicesFlow />
        </div>
      </section>

      {/* Curved edge + founders, laid out normally (no overlap with next section) */}
      <div className="bg-background">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="-mt-px block h-[60px] w-full sm:h-[80px] lg:h-[120px]"
        >
          <path
            d="M0,0 H1440 Q720,120 0,0 Z"
            className="fill-[hsl(var(--muted))]"
          />
        </svg>

        <div className="-mt-10 flex justify-center pb-16 sm:-mt-12 lg:-mt-14">
          <Founders />
        </div>
      </div>
    </>
  )
}
