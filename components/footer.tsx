import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { socials } from "@/lib/socials"

const footerLinks = {
  Services: [
    { label: "Web Applications", href: "#services" },
    { label: "Mobile Development", href: "#services" },
    { label: "Cloud Solutions", href: "#services" },
    { label: "Enterprise Software", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "/blogs" },
    { label: "Contact", href: "#contact" },
  ],
  Resources: [
    { label: "Case Studies", href: "/blogs" },
    { label: "Documentation", href: "#" },
    { label: "Support", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="relative bg-primary border-t-2 border-hyper-cyan/20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-hyper-cyan/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-secondary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image
                  src="/logo_bnb.png"
                  alt="BNB Logo"
                  width={56}
                  height={56}
                  className="h-14 w-14"
                />
                <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-hyper-cyan border-2 border-primary" />
              </div>
              <span className="text-lg font-bold tracking-tight text-primary-foreground">
                Beyond Next Builders
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm font-normal leading-[1.7] text-primary-foreground/50">
              We craft premium software solutions that transform businesses.
              From concept to deployment, we&apos;re your trusted technology
              partner.
            </p>

            {/* Social links with neo-brutalist style */}
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-10 w-10 items-center justify-center rounded-lg border-2 border-primary-foreground/20 bg-primary-foreground/5 transition-all duration-300 hover:border-hyper-cyan hover:bg-hyper-cyan hover:shadow-[3px_3px_0_0_hsl(var(--primary-foreground)/0.2)]"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 text-primary-foreground/60 transition-colors group-hover:text-primary" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-sm font-bold text-primary-foreground flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-hyper-cyan" />
                {category}
              </p>
              <ul className="mt-5 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-primary-foreground/50 transition-colors hover:text-hyper-cyan"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t-2 border-primary-foreground/10 pt-8 sm:flex-row">
          <p className="text-xs text-primary-foreground/40">
            {`© ${new Date().getFullYear()} Beyond Next Builders. All rights reserved.`}
          </p>
          <div className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-hyper-cyan/60" />
            <p className="text-xs text-primary-foreground/40">
              Built with precision and passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
