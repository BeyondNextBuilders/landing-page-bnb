import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const blogsDirectory = path.join(process.cwd(), "blogs")

export interface BlogPost {
  slug: string
  title: string
  subtitle: string
  tldr: string
  category: string | null
  content: string
}

/**
 * Recursively collect all .md files under a directory,
 * returning their absolute paths.
 */
function collectMarkdownFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const files: string[] = []

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...collectMarkdownFiles(fullPath))
    } else if (entry.name.endsWith(".md")) {
      files.push(fullPath)
    }
  }

  return files
}

/**
 * Derives the category from the folder structure.
 * e.g. blogs/case-studies/solidon.md → "case-studies"
 */
function getCategory(filePath: string): string | null {
  const relative = path.relative(blogsDirectory, filePath)
  const parts = relative.split(path.sep)
  // If file is inside a subfolder, the first part is the category
  return parts.length > 1 ? parts[0] : null
}

/**
 * Extract the title (first # heading), subtitle (first ## heading),
 * and TL;DR section from raw markdown content.
 */
function extractSections(rawContent: string) {
  const lines = rawContent.split("\n")

  let title = ""
  let subtitle = ""
  let tldr = ""

  // Extract title: first line starting with "# " (single hash)
  for (const line of lines) {
    if (line.startsWith("# ") && !line.startsWith("## ")) {
      title = line.replace(/^#\s+/, "").trim()
      break
    }
  }

  // Extract subtitle: first line starting with "## " that is NOT "## TL;DR"
  for (const line of lines) {
    if (
      line.startsWith("## ") &&
      !line.startsWith("### ") &&
      !line.toLowerCase().includes("tl;dr")
    ) {
      subtitle = line.replace(/^##\s+/, "").trim()
      break
    }
  }

  // Extract TL;DR section: everything between "## TL;DR" and the next "## " heading
  const tldrIndex = lines.findIndex((l) =>
    l.toLowerCase().replace(/\s/g, "").includes("##tl;dr")
  )
  if (tldrIndex !== -1) {
    const tldrLines: string[] = []
    for (let i = tldrIndex + 1; i < lines.length; i++) {
      if (lines[i].startsWith("## ") && !lines[i].toLowerCase().includes("tl;dr")) {
        break
      }
      tldrLines.push(lines[i])
    }
    tldr = tldrLines
      .join("\n")
      .replace(/^---+\s*/gm, "")
      .trim()
  }

  return { title, subtitle, tldr }
}

/**
 * Get all blog posts with parsed metadata.
 */
export function getAllPosts(): BlogPost[] {
  const files = collectMarkdownFiles(blogsDirectory)

  return files.map((filePath) => {
    const fileContents = fs.readFileSync(filePath, "utf-8")
    const { content } = matter(fileContents)
    const slug = path.basename(filePath, ".md")
    const category = getCategory(filePath)
    const { title, subtitle, tldr } = extractSections(content)

    return {
      slug,
      title,
      subtitle,
      tldr,
      category,
      content,
    }
  })
}

/**
 * Get all posts from the case-studies subfolder only.
 */
export function getCaseStudies(): BlogPost[] {
  return getAllPosts().filter((post) => post.category === "case-studies")
}

/**
 * Get a single post by slug.
 */
export function getPostBySlug(slug: string): BlogPost | null {
  const files = collectMarkdownFiles(blogsDirectory)
  const match = files.find(
    (filePath) => path.basename(filePath, ".md") === slug
  )

  if (!match) return null

  const fileContents = fs.readFileSync(match, "utf-8")
  const { content } = matter(fileContents)
  const category = getCategory(match)
  const { title, subtitle, tldr } = extractSections(content)

  return {
    slug,
    title,
    subtitle,
    tldr,
    category,
    content,
  }
}

/**
 * Convert markdown content to HTML string.
 */
export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html, { sanitize: false }).process(markdown)
  return result.toString()
}

/**
 * Get all unique slugs for static generation.
 */
export function getAllSlugs(): string[] {
  const files = collectMarkdownFiles(blogsDirectory)
  return files.map((filePath) => path.basename(filePath, ".md"))
}
