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
    <section id="benefits" className="relative bg-primary py-24 lg:py-32">
      {/* Subtle teal orb */}
      <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-accent flex items-center justify-center gap-2">
            <span className="h-1 w-1 rounded-full bg-hyper-cyan" />
            Why Choose Us
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-[1.2] tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            The Beyond Next Builders Advantage
          </h2>
          <p className="mt-4 text-lg font-normal leading-[1.7] text-primary-foreground/60">
            We combine world-class engineering with a relentless focus on
            business value to deliver solutions that truly make a difference.
          </p>
        </div>

        {/* Grid */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-hyper-cyan/10">
                <benefit.icon className="h-5 w-5 text-hyper-cyan" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-primary-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-1.5 text-sm font-normal leading-[1.6] text-primary-foreground/50">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
