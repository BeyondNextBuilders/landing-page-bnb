import Link from "next/link"
import { ArrowLeft, ArrowRight, BookOpen, Calendar, Clock } from "lucide-react"
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

  // Estimate reading time (roughly 200 words per minute)
  const wordCount = post.content.split(/\s+/).length
  const readingTime = Math.max(1, Math.ceil(wordCount / 200))

  return (
    <main>
      <Navbar />
      <article className="relative bg-background pt-28 pb-24 lg:pt-36 lg:pb-32 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-40 left-0 h-96 w-96 rounded-full bg-hyper-cyan/5 blur-3xl" />
        <div className="absolute bottom-40 right-0 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />

        <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-border bg-muted/50 px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:border-hyper-cyan/40 hover:text-foreground hover:shadow-[3px_3px_0_0_hsl(var(--hyper-cyan)/0.15)]"
            >
              <ArrowLeft className="h-4 w-4" />
              All Posts
            </Link>
          </div>

          {/* Category badge & metadata */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            {post.category && (
              <span className="inline-flex items-center rounded-md bg-secondary/10 px-3 py-1.5 text-xs font-semibold text-secondary border border-secondary/20">
                {post.category}
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              {readingTime} min read
            </span>
          </div>

          {/* Title & subtitle */}
          <h1 className="text-balance text-2xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {post.subtitle}
          </p>

          {/* Divider */}
          <div className="my-10 flex items-center gap-4">
            <div className="h-0.5 flex-1 bg-gradient-to-r from-hyper-cyan/40 to-transparent" />
            <BookOpen className="h-5 w-5 text-hyper-cyan" />
            <div className="h-0.5 flex-1 bg-gradient-to-l from-hyper-cyan/40 to-transparent" />
          </div>

          {/* Markdown content */}
          <div
            className="prose prose-neutral max-w-none
              prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
              prose-h2:mt-12 prose-h2:mb-5 prose-h2:text-2xl prose-h2:border-l-4 prose-h2:border-hyper-cyan prose-h2:pl-4
              prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-xl
              prose-h4:mt-8 prose-h4:mb-3 prose-h4:text-lg
              prose-p:leading-[1.8] prose-p:text-foreground/80
              prose-strong:text-foreground prose-strong:font-semibold
              prose-a:text-hyper-cyan prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-secondary
              prose-ul:text-foreground/80 prose-ol:text-foreground/80
              prose-li:leading-relaxed prose-li:marker:text-hyper-cyan
              prose-blockquote:border-l-hyper-cyan prose-blockquote:bg-muted/50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:text-muted-foreground prose-blockquote:italic prose-blockquote:not-italic prose-blockquote:font-medium
              prose-hr:border-border prose-hr:my-10
              prose-table:text-sm prose-table:border prose-table:border-border prose-table:rounded-lg prose-table:overflow-hidden
              prose-th:text-left prose-th:font-semibold prose-th:text-foreground prose-th:bg-muted prose-th:px-4 prose-th:py-3
              prose-td:text-foreground/80 prose-td:px-4 prose-td:py-3 prose-td:border-t prose-td:border-border
              prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-foreground prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-primary prose-pre:text-primary-foreground prose-pre:rounded-xl prose-pre:border-2 prose-pre:border-border"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* Consultation CTA */}
          <div className="mt-20 rounded-xl border-2 border-hyper-cyan/30 bg-gradient-to-br from-hyper-cyan/5 to-transparent px-6 py-10 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-hyper-cyan/10 blur-2xl" />
            <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-secondary/10 blur-2xl" />

            <div className="relative">
              <p className="text-sm font-semibold tracking-wider uppercase text-hyper-cyan flex items-center justify-center gap-2">
                <span className="h-1 w-1 rounded-full bg-hyper-cyan" />
                Ready to start?
              </p>
              <p className="mt-3 text-xl font-bold text-foreground">
                Get your consultation right now
              </p>
              <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                Let us help you build something amazing. Schedule a free call to discuss your project.
              </p>
              <Button
                asChild
                variant="neoCta"
                className="mt-6 h-auto px-8 py-3 text-sm"
              >
                <Link href="https://calendly.com/office-beyondnextbuilders/30min" target="_blank" rel="noopener noreferrer">
                  Schedule a Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Back to blog */}
          <div className="mt-12 text-center">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-hyper-cyan transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all posts
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  )
}
