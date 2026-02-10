import {
  Code2,
  Layers,
  BrainCircuit,
  GitBranch,
  Smartphone,
  Database,
  Cloud,
  Cpu,
} from "lucide-react"
import { FeaturedRecognition } from "./featured-recognition"
import { Founders } from "./founders"

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Tailor-made software solutions designed to meet your specific business needs, driving innovation and efficiency across your operations.",
    color: "#6366F1", // Indigo
  },
  {
    icon: Layers,
    title: "Front- & Backend",
    description:
      "Comprehensive development services that build seamless, user-friendly interfaces and powerful, scalable backend systems to power your applications.",
    color: "#8B5CF6", // Violet
  },
  {
    icon: BrainCircuit,
    title: "AI",
    description:
      "Advanced AI solutions that leverage machine learning and data analytics to automate processes, enhance decision-making, and boost innovation.",
    color: "#A855F7", // Purple
  },
  {
    icon: GitBranch,
    title: "DevOps",
    description:
      "Streamlined DevOps solutions that automate workflows, enhance collaboration, and accelerate development cycles, ensuring efficient and reliable software delivery.",
    color: "#F59E0B", // Amber
  },
  {
    icon: Smartphone,
    title: "Mobile & Web App",
    description:
      "Cutting-edge mobile apps for iOS and Android that enhance your business on the go & robust, responsive web apps delivering rich, engaging experiences on any device.",
    color: "#14B8A6", // Teal
  },
  {
    icon: Database,
    title: "Database",
    description:
      "Efficient, secure, and scalable database solutions that optimize data management and ensure seamless access to critical business information.",
    color: "#10B981", // Emerald
  },
  {
    icon: Cloud,
    title: "Cloud",
    description:
      "Scalable and secure cloud-based solutions that enable agility, cost-efficiency, and seamless collaboration for your business.",
    color: "#38BDF8", // Sky Blue
  },
  {
    icon: Cpu,
    title: "Embedded",
    description:
      "Custom embedded systems that provide high-performance solutions for specialized hardware, enabling smarter, more efficient devices.",
    color: "#F97316", // Orange
  },
]

export function Services() {
  return (
<section
  id="services"
  className="relative z-10 bg-muted pt-14 sm:pt-18 lg:pt-22 pb-[56px] sm:pb-[72px] lg:pb-[104px]"
>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold leading-[1.2] tracking-tight text-foreground sm:text-4xl lg:text-5xl flex items-center justify-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-hyper-cyan" />
            Our Capabilities
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative flex h-48 cursor-default flex-col items-center justify-center overflow-hidden rounded-xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-secondary/40 hover:shadow-lg hover:shadow-hyper-cyan/5"
            >
              <div className="flex flex-col items-center transition-all duration-300 group-hover:-translate-y-2 group-hover:opacity-0">
                <div className="mb-4">
                  <service.icon className="h-8 w-8" style={{ color: service.color }} />
                </div>
                <h3 className="text-base font-semibold text-card-foreground">
                  {service.title}
                </h3>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <h3 className="mb-2 text-sm font-semibold text-primary">
                  {service.title}
                </h3>
                <p className="text-xs font-normal leading-[1.6] text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Curved bottom edge — gray dome extending down ── */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-[99%]">
        <div className="relative">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="block w-full h-[60px] sm:h-[80px] lg:h-[120px]"
          >
            <ellipse cx="720" cy="0" rx="900" ry="120" className="fill-[hsl(var(--muted))]" />
          </svg>
          {/* <FeaturedRecognition /> */}
          <Founders />
        </div>
      </div>
    </section>
  )
}
