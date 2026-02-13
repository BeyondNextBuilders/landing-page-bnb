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
                    hello@nexacraft.dev
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
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-hyper-cyan/10">
                  <MapPin className="h-5 w-5 text-hyper-cyan" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Visit us at</p>
                  <p className="text-sm font-medium text-foreground">
                    San Francisco, CA
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-xl border border-border bg-muted p-8">
            <h3 className="text-lg font-semibold text-foreground">
              Request a Consultation
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {"Fill out the form and we'll get back to you within 24 hours."}
            </p>
            <form
              className="mt-6 flex flex-col gap-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-xs font-medium text-muted-foreground mb-1.5"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-xs font-medium text-muted-foreground mb-1.5"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-muted-foreground mb-1.5"
                >
                  Work Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@company.com"
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-muted-foreground mb-1.5"
                >
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Describe your project goals, timeline, and any specific requirements..."
                  className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                />
              </div>
              <Button
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold w-full"
              >
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
