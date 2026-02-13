import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import { getAllSlugs, getPostBySlug, markdownToHtml } from "@/lib/blog"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: "Post Not Found" }

  return {
    title: `${post.title} | Beyond Next Builders`,
    description: post.subtitle,
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  const htmlContent = await markdownToHtml(post.content)

  return (
    <main>
      <Navbar />
      <article className="bg-background pt-28 pb-24 lg:pt-36 lg:pb-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          {/* Back link */}
          <div className="mb-6">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              All Posts
            </Link>

            {/* Category badge */}
            {post.category && (
              <div className="mt-3">
                <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                  {post.category}
                </span>
              </div>
            )}
          </div>

          {/* Title & subtitle */}
          <h1 className="text-balance text-2xl font-bold leading-[1.2] tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {post.subtitle}
          </p>

          <hr className="my-8 border-border" />

          {/* Markdown content */}
          <div
            className="prose prose-neutral max-w-none
              prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
              prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-2xl
              prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-xl
              prose-h4:mt-6 prose-h4:mb-2 prose-h4:text-lg
              prose-p:leading-relaxed prose-p:text-foreground/80
              prose-strong:text-foreground prose-strong:font-semibold
              prose-a:text-secondary prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-secondary/80
              prose-ul:text-foreground/80 prose-ol:text-foreground/80
              prose-li:leading-relaxed
              prose-blockquote:border-l-secondary prose-blockquote:text-muted-foreground prose-blockquote:italic
              prose-hr:border-border
              prose-table:text-sm
              prose-th:text-left prose-th:font-semibold prose-th:text-foreground
              prose-td:text-foreground/80"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* Consultation CTA */}
          <div className="mt-16 rounded-xl border border-cta/30 bg-cta/5 px-6 py-8 text-center">
            <p className="text-lg font-semibold text-foreground">
              Get your consultation right now
            </p>
            <Button
              asChild
              className="mt-4 bg-cta text-cta-foreground font-bold px-8 py-3 text-sm h-auto shadow-lg shadow-cta/30 hover:bg-cta/85 hover:shadow-xl hover:shadow-cta/40 transition-all"
            >
              <Link href="https://calendly.com/office-beyondnextbuilders/30min" target="_blank" rel="noopener noreferrer">
                Schedule a Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  )
}
