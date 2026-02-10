import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "A Custom E-Commerce Platform for Construction Materials",
    category: "E-Commerce",
    description:
      "Custom-built e-commerce platform developed for the construction materials industry.",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "SCADA Data Analytics & ML Prediction Platform",
    category: "Industrial IoT",
    description:
      "Machine learning-driven analytics and predictive modeling for SCADA data.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "High-End Presentation Websites",
    category: "Web Design",
    description:
      "Presentation websites designed with refined UI and thoughtfully crafted UX.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Custom Web Applications & Integrations",
    category: "Web Development",
    description:
      "Web applications with tailored business logic, system integrations, and intelligent chatbots.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold leading-[1.2] tracking-tight text-foreground sm:text-4xl lg:text-5xl flex items-center justify-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-hyper-cyan" />
            Our Work
          </h2>
        </div>

        {/* Grid */}
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-xl hover:shadow-secondary/5"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/30 transition-opacity group-hover:bg-primary/10" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="flex items-start justify-between gap-4 p-6">
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm font-normal leading-[1.6] text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border transition-colors group-hover:border-hyper-cyan/60 group-hover:bg-hyper-cyan/5">
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-hyper-cyan" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
