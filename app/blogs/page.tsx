import Link from "next/link"
import { ArrowUpRight, ArrowLeft } from "lucide-react"
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
      <section className="bg-background pt-28 pb-24 lg:pt-36 lg:pb-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="mb-16">
            <h1 className="text-balance text-3xl font-bold leading-[1.2] tracking-tight text-foreground sm:text-4xl lg:text-5xl flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-hyper-cyan" />
              Blog
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Case studies, technical insights, and lessons from building
              production software.
            </p>
          </div>

          {/* Posts list */}
          <div className="flex flex-col gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:shadow-secondary/5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    {post.category && (
                      <span className="mb-2 inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                        {post.category}
                      </span>
                    )}
                    <h2 className="text-lg font-semibold leading-snug text-card-foreground">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm font-normal leading-relaxed text-muted-foreground">
                      {post.subtitle}
                    </p>
                  </div>
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border transition-colors group-hover:border-hyper-cyan/60 group-hover:bg-hyper-cyan/5">
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-hyper-cyan" />
                  </div>
                </div>
              </Link>
            ))}

            {posts.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-muted-foreground">
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
