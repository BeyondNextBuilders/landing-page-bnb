import Link from "next/link"
import { ArrowUpRight, Sparkles } from "lucide-react"
import { getCaseStudies } from "@/lib/blog"

export function Portfolio() {
  const caseStudies = getCaseStudies()

  return (
    <section id="portfolio" className="relative bg-background py-24 lg:py-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-0 h-64 w-64 rounded-full bg-hyper-cyan/5 blur-3xl" />
      <div className="absolute bottom-20 right-0 h-48 w-48 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wider uppercase italic text-secondary flex items-center justify-center gap-2">
            <span className="h-1 w-1 rounded-full bg-hyper-cyan" />
            Case Studies
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-[1.2] tracking-tight text-foreground sm:text-4xl lg:text-5xl flex items-center justify-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-hyper-cyan" />
            Our Work
          </h2>
          <p className="mt-4 text-lg font-normal leading-[1.7] text-muted-foreground">
            Real results from real projects. See how we help businesses scale with AI and custom software.
          </p>
        </div>

        {/* Grid */}
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
          {caseStudies.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group relative overflow-hidden rounded-xl border-2 border-border bg-card transition-all duration-300 hover:border-hyper-cyan/40 hover:shadow-[8px_8px_0_0_hsl(var(--hyper-cyan)/0.15)]"
            >
              {/* Featured badge for first item */}
              {index === 0 && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-hyper-cyan/10 px-3 py-1 text-xs font-semibold text-hyper-cyan border border-hyper-cyan/20">
                    <Sparkles className="h-3 w-3" />
                    Latest
                  </span>
                </div>
              )}

              <div className="p-6 lg:p-8">
                {/* Category tag */}
                {post.category && (
                  <span className="inline-flex items-center rounded-md bg-secondary/10 px-2.5 py-1 text-xs font-semibold text-secondary border border-secondary/20">
                    {post.category}
                  </span>
                )}

                <div className="mt-4 flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold leading-snug text-card-foreground group-hover:text-hyper-cyan transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm font-normal leading-relaxed text-muted-foreground line-clamp-2">
                      {post.subtitle}
                    </p>
                  </div>
                  <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border-2 border-border bg-muted/50 transition-all duration-300 group-hover:border-hyper-cyan group-hover:bg-hyper-cyan group-hover:shadow-[3px_3px_0_0_hsl(var(--palette-black))]">
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                </div>

                {post.tldr && (
                  <div className="mt-6 rounded-lg border border-border bg-muted/50 px-4 py-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-hyper-cyan mb-2">Results</p>
                    <div className="text-sm leading-relaxed text-foreground/80">
                      {post.tldr.split("\n").filter(Boolean).slice(0, 3).map((line, i) => (
                        <p key={i} className="flex items-start gap-2 mt-1.5 first:mt-0">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-hyper-cyan/60 shrink-0" />
                          <span>{line.replace(/^-\s*/, "").replace(/\*\*/g, "")}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {/* Read more link */}
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-secondary group-hover:text-hyper-cyan transition-colors">
                  <span>Read case study</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-12 text-center">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-hyper-cyan transition-colors"
          >
            View all posts
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
