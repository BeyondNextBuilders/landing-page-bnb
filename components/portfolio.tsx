import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { getCaseStudies } from "@/lib/blog"

export function Portfolio() {
  const caseStudies = getCaseStudies()

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
          {caseStudies.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-xl hover:shadow-secondary/5"
            >
              <div className="p-6">
                {post.category && (
                  <span className="mb-3 inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                    {post.category}
                  </span>
                )}
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold leading-snug text-card-foreground">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm font-normal leading-relaxed text-muted-foreground">
                      {post.subtitle}
                    </p>
                  </div>
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border transition-colors group-hover:border-hyper-cyan/60 group-hover:bg-hyper-cyan/5">
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-hyper-cyan" />
                  </div>
                </div>

                {post.tldr && (
                  <div className="mt-4 rounded-lg bg-muted px-4 py-3">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      TL;DR
                    </p>
                    <div className="text-sm leading-relaxed text-foreground/80 line-clamp-4">
                      {post.tldr.split("\n").filter(Boolean).slice(0, 4).map((line, i) => (
                        <p key={i} className="mt-1">
                          {line.replace(/^-\s*/, "").replace(/\*\*/g, "")}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
