import Link from "next/link"
import Image from "next/image"

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
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  Resources: [
    { label: "Case Studies", href: "#portfolio" },
    { label: "Documentation", href: "#" },
    { label: "Support", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary border-t border-primary-foreground/10">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <Image
                src="/logo_bnb.png"
                alt="BNB Logo"
                width={56}
                height={56}
                className="h-14 w-14"
              />
              <span className="text-lg font-bold tracking-tight text-primary-foreground">
                Beyond Next Builders
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm font-normal leading-[1.7] text-primary-foreground/50">
              We craft premium software solutions that transform businesses.
              From concept to deployment, we&apos;re your trusted technology
              partner.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-sm font-semibold text-primary-foreground">
                {category}
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/50 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 sm:flex-row">
          <p className="text-xs text-primary-foreground/40">
            {`© ${new Date().getFullYear()} Beyond Next Builders. All rights reserved.`}
          </p>
          <div className="flex gap-6">
            {["Twitter", "LinkedIn", "GitHub"].map((social) => (
              <Link
                key={social}
                href="#"
                className="text-xs text-primary-foreground/40 transition-colors hover:text-accent"
              >
                {social}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
