import Link from "next/link"
import { ArrowUpRight, ArrowLeft, Sparkles, BookOpen } from "lucide-react"
import { getAllPosts } from "@/lib/blog"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Beyond Next Builders",
  description:
    "Insights, case studies, and technical deep-dives from the Beyond Next Builders team.",
}

export default function BlogsPage() {
  const posts = getAllPosts()

  return (
    <main>
      <Navbar />
      <section className="relative bg-background pt-28 pb-24 lg:pt-36 lg:pb-32 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-40 left-0 h-96 w-96 rounded-full bg-hyper-cyan/5 blur-3xl" />
        <div className="absolute bottom-40 right-0 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 rounded-lg border-2 border-border bg-muted/50 px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:border-hyper-cyan/40 hover:text-foreground hover:shadow-[3px_3px_0_0_hsl(var(--hyper-cyan)/0.15)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="mb-16">
            <p className="text-sm font-semibold tracking-wider uppercase italic text-secondary flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-hyper-cyan" />
              Insights & Case Studies
            </p>
            <h1 className="mt-3 text-balance text-3xl font-bold leading-[1.2] tracking-tight text-foreground sm:text-4xl lg:text-5xl flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-hyper-cyan" />
              Blog
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Case studies, technical insights, and lessons from building
              production software.
            </p>
          </div>

          {/* Posts list */}
          <div className="flex flex-col gap-6">
            {posts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="group relative rounded-xl border-2 border-border bg-card p-6 lg:p-8 transition-all duration-300 hover:border-hyper-cyan/40 hover:shadow-[8px_8px_0_0_hsl(var(--hyper-cyan)/0.15)]"
              >
                {/* Latest badge for first item (shifted on lg to avoid overlapping the icon) */}
                {index === 0 && (
                  <div className="absolute top-4 right-4 lg:top-6 lg:right-24">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-hyper-cyan/10 px-3 py-1 text-xs font-semibold text-hyper-cyan border border-hyper-cyan/20">
                      <Sparkles className="h-3 w-3" />
                      Latest
                    </span>
                  </div>
                )}

                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    {post.category && (
                      <span className="mb-3 inline-flex items-center rounded-md bg-secondary/10 px-2.5 py-1 text-xs font-semibold text-secondary border border-secondary/20">
                        {post.category}
                      </span>
                    )}
                    <h2 className="text-lg font-bold leading-snug text-card-foreground group-hover:text-hyper-cyan transition-colors pr-16 lg:pr-0">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm font-normal leading-relaxed text-muted-foreground line-clamp-2">
                      {post.subtitle}
                    </p>

                    {/* Read more link */}
                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-secondary group-hover:text-hyper-cyan transition-colors">
                      <BookOpen className="h-4 w-4" />
                      <span>Read article</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  <div className="mt-1 hidden lg:flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border-2 border-border bg-muted/50 transition-all duration-300 group-hover:border-hyper-cyan group-hover:bg-hyper-cyan group-hover:shadow-[3px_3px_0_0_hsl(var(--palette-black))]">
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                </div>
              </Link>
            ))}

            {posts.length === 0 && (
              <div className="py-20 text-center rounded-xl border-2 border-dashed border-border">
                <BookOpen className="mx-auto h-12 w-12 text-muted-foreground/40" />
                <p className="mt-4 text-lg font-medium text-muted-foreground">
                  No posts yet. Check back soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}