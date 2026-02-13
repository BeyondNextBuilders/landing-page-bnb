"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"

export function CtaSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-background py-24 lg:py-32">
      {/* Decorative orbs */}
      <div className="absolute top-0 left-0 h-80 w-80 rounded-full bg-secondary/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

      {/* Top hyper cyan accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-hyper-cyan/40" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left: Content */}
          <div>
            <p className="text-sm font-semibold tracking-wider uppercase text-secondary flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-hyper-cyan" />
              {"Let's Build Together"}
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold leading-[1.2] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mt-6 text-lg font-normal leading-[1.7] text-muted-foreground">
              Schedule a free consultation with our team to discuss your project,
              explore possibilities, and get a detailed proposal.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-hyper-cyan/10">
                  <Mail className="h-5 w-5 text-hyper-cyan" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email us at</p>
                  <p className="text-sm font-medium text-foreground">
                    office@beyondnextbuilders.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-hyper-cyan/10">
                  <Phone className="h-5 w-5 text-hyper-cyan" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Call us at</p>
                  <p className="text-sm font-medium text-foreground">
                    +40 741 196 997
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: CTA */}
          <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-muted p-8 text-center">
            <h3 className="text-lg font-semibold text-foreground">
              Request a Consultation
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Please tell us about your requirements and add links to your business (LinkedIn or website).
            </p>
            <Button
              asChild
              className="mt-8 bg-cta text-cta-foreground font-bold px-10 py-3 text-base h-auto shadow-lg shadow-cta/30 hover:bg-cta/85 hover:shadow-xl hover:shadow-cta/40 transition-all"
            >
              <Link href="https://calendly.com/office-beyondnextbuilders/30min" target="_blank" rel="noopener noreferrer">
                Schedule a Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
