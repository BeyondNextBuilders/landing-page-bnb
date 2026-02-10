import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Beyond Next Builders transformed our outdated systems into a sleek, modern platform. Their attention to detail and technical excellence exceeded every expectation.",
    author: "Sarah Chen",
    role: "CTO, FinEdge Technologies",
    rating: 5,
  },
  {
    quote:
      "Working with Beyond Next Builders felt like having an in-house team. They understood our vision from day one and delivered a product that truly sets us apart.",
    author: "Marcus Rivera",
    role: "CEO, MediTrack Health",
    rating: 5,
  },
  {
    quote:
      "The team delivered our supply chain platform on time and on budget. Their expertise in cloud architecture saved us months of development time.",
    author: "Elena Kowalski",
    role: "VP Engineering, LogiFlow",
    rating: 5,
  },
]

const partners = [
  "Amazon Web Services",
  "Microsoft Azure",
  "Google Cloud",
  "Stripe",
  "Salesforce",
  "HubSpot",
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-muted py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-secondary flex items-center justify-center gap-2">
            <span className="h-1 w-1 rounded-full bg-hyper-cyan" />
            Client Stories
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-[1.2] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Trusted by Industry Leaders
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="flex flex-col justify-between rounded-xl border border-border bg-card p-8 transition-all hover:shadow-lg hover:shadow-hyper-cyan/5"
            >
              <div>
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={`star-${t.author}-${i}`}
                      className={`h-4 w-4 fill-accent text-accent ${i === t.rating - 1 ? 'fill-hyper-cyan text-hyper-cyan' : ''}`}
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm font-normal leading-[1.7] text-muted-foreground italic">
                  {`"${t.quote}"`}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {t.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">
                    {t.author}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="mx-auto mt-20 max-w-4xl">
          <p className="text-center text-xs font-semibold tracking-wider uppercase text-muted-foreground">
            Technology Partners & Integrations
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {partners.map((partner) => (
              <span
                key={partner}
                className="text-sm font-semibold tracking-wide text-foreground/30 transition-colors hover:text-secondary"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
