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
    title: "Deep Technical Expertise",
    description:
      "Our senior engineers bring decades of combined experience across diverse technology stacks and industries.",
  },
  {
    icon: Palette,
    title: "UI/UX-First Approach",
    description:
      "We prioritize intuitive, beautiful interfaces that delight users and drive meaningful engagement.",
  },
  {
    icon: Rocket,
    title: "Agile & Transparent",
    description:
      "Iterative sprints, regular demos, and clear communication ensure you always know where your project stands.",
  },
  {
    icon: Lock,
    title: "Security by Design",
    description:
      "Enterprise-grade security woven into every layer of your application from day one.",
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    description:
      "A committed team that becomes an extension of your organization, aligned with your goals.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description:
      "Continuous maintenance, monitoring, and optimization long after your product goes live.",
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="relative bg-primary py-24 lg:py-32 overflow-hidden">
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
          <h2 className="mt-3 text-balance text-3xl font-bold leading-[1.2] tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl flex items-center justify-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-hyper-cyan" />
            The Beyond Next Builders Advantage
          </h2>
          <p className="mt-4 text-lg font-normal leading-[1.7] text-primary-foreground/60">
            We combine world-class engineering with a relentless focus on
            business value to deliver solutions that truly make a difference.
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
