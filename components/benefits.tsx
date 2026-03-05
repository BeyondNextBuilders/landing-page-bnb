import {
  Palette,
  Lightbulb,
  Rocket,
  Users,
  Lock,
  Headphones,
} from "lucide-react"

const benefits = [
  {
    icon: Lightbulb,
    title: "ROI-First Delivery",
    description:
      "We start from outcomes—revenue, cost savings, and speed—and ship what moves the needle, not feature fluff.",
  },
  {
    icon: Palette,
    title: "Conversion-Ready UX",
    description:
      "UI/UX that’s fast, clear, and designed to drive action—built for real users, not just pretty screenshots.",
  },
  {
    icon: Rocket,
    title: "Automation That Removes Work",
    description:
      "We connect pricing, inventory, orders, and ops into workflows that run automatically—so your team stops doing busywork.",
  },
  {
    icon: Lock,
    title: "Reliable Integrations",
    description:
      "Payments, shipping, marketplaces, CRMs—integrations that don’t break in production and scale with volume.",
  },
  {
    icon: Users,
    title: "End-to-End Engineering",
    description:
      "No handoffs. We design, build, integrate, deploy, and iterate—so you get momentum instead of blockers.",
  },
  {
    icon: Headphones,
    title: "Long-Term Partner Support",
    description:
      "Ongoing improvements, monitoring, and optimizations to keep performance high as your business grows.",
  },
]

export function Benefits() {
  return (
    <section
      id="benefits"
      className="relative bg-primary py-24 lg:py-32 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute bottom-20 left-0 h-64 w-64 rounded-full bg-hyper-cyan/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wider uppercase italic text-[hsl(var(--palette-yellow))] flex items-center justify-center gap-2">
            <span className="h-1 w-1 rounded-full bg-hyper-cyan" />
            Why Choose Us
          </p>
          <p className="mt-4 text-lg font-normal leading-[1.7] text-primary-foreground/60">
            We build automation-first products that cut manual work, improve
            conversion, and stay reliable as you scale.
          </p>
        </div>

        {/* Grid */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group relative rounded-xl border-2 border-primary-foreground/10 bg-primary-foreground/5 p-6 transition-all duration-300 hover:border-hyper-cyan/40 hover:bg-primary-foreground/10 hover:shadow-[6px_6px_0_0_hsl(var(--hyper-cyan)/0.2)]"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-hyper-cyan/30 bg-hyper-cyan/10 transition-all duration-300 group-hover:border-hyper-cyan group-hover:bg-hyper-cyan group-hover:shadow-[3px_3px_0_0_hsl(var(--primary-foreground)/0.3)]">
                <benefit.icon className="h-5 w-5 text-hyper-cyan transition-colors group-hover:text-primary" />
              </div>

              {/* Content */}
              <h3 className="mt-5 text-base font-bold text-primary-foreground group-hover:text-hyper-cyan transition-colors">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm font-normal leading-[1.7] text-primary-foreground/50">
                {benefit.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-3 right-3 h-2 w-2 rounded-full bg-hyper-cyan/20 transition-colors group-hover:bg-hyper-cyan/60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}