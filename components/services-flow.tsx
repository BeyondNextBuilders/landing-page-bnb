"use client"

import { ArcherContainer, ArcherElement } from "react-archer"
import { MessageSquareDot, BrainCircuit, Globe, Bot, type LucideIcon } from "lucide-react"

type Service = {
  id: string
  icon: LucideIcon
  title: string
  description: string
  color: string
  targetOutcomeIds: string[]
}

type Outcome = {
  id: string
  outcome: string
  problem: string
}

const services: Service[] = [
  {
    id: "service-chatbots",
    icon: MessageSquareDot,
    title: "AI Chatbots",
    description:
      "Support chatbots that answer FAQs, capture details, and hand off to your team 24/7.",
    color: "#6366F1",
    targetOutcomeIds: ["outcome-calls"],
  },
  {
    id: "service-agents",
    icon: BrainCircuit,
    title: "AI Agents",
    description: "Agents that run workflows end-to-end (ops, follow-ups, admin).",
    color: "#A855F7",
    targetOutcomeIds: ["outcome-speed"],
  },
  {
    id: "service-landing",
    icon: Globe,
    title: "High-Converting Landing Pages",
    description: "Landing pages built to convert visitors into leads.",
    color: "#14B8A6",
    targetOutcomeIds: ["outcome-calls"],
  },
  {
    id: "service-webapps",
    icon: Bot,
    title: "Custom Web Applications",
    description: "Custom apps that automate operations and replace messy tools.",
    color: "#FACC15",
    targetOutcomeIds: ["outcome-speed", "outcome-costs"],
  },
]

const outcomes: Outcome[] = [
  {
    id: "outcome-calls",
    outcome: "Book More Calls",
    problem: "Leads come in… then die in the inbox, DMs, or after-hours.",
  },
  {
    id: "outcome-speed",
    outcome: "Scale Output Without Hiring",
    problem: "Your team is stuck in copy/paste, handoffs, and busywork.",
  },
  {
    id: "outcome-costs",
    outcome: "Lower Operating Costs",
    problem: "You’re paying humans for tasks software can do instantly.",
  },
]

const arrowStyle = {
  strokeColor: "hsl(var(--hyper-cyan) / 0.62)",
  strokeWidth: 3,
  endMarker: true,
  endShape: {
    arrow: {
      arrowLength: 6,
      arrowThickness: 4,
    },
  },
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group relative flex h-48 cursor-default flex-col items-center justify-center overflow-hidden rounded-xl border border-border bg-card p-6 text-center shadow-[4px_4px_12px_rgba(15,23,42,0.08)] transition-all duration-300 hover:border-hyper-cyan/40 hover:shadow-lg hover:shadow-hyper-cyan/10">
      <div className="flex flex-col items-center transition-all duration-300 group-hover:-translate-y-2 group-hover:opacity-0">
        <div className="mb-4">
          <service.icon className="h-8 w-8" style={{ color: service.color }} />
        </div>
        <h3 className="text-base font-semibold text-card-foreground">{service.title}</h3>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 transition-all duration-300 group-hover:opacity-100">
        <h3 className="mb-2 text-sm font-semibold text-hyper-cyan">{service.title}</h3>
        <p className="text-xs font-normal leading-[1.6] text-muted-foreground">{service.description}</p>
      </div>
    </div>
  )
}

function OutcomeCard({ outcome }: { outcome: Outcome }) {
  return (
    <div className="group relative flex h-40 cursor-default flex-col items-center justify-center overflow-hidden rounded-xl border border-border bg-card p-6 text-center shadow-[4px_4px_12px_rgba(15,23,42,0.08)] transition-all duration-300 hover:border-hyper-cyan/40 hover:shadow-lg hover:shadow-hyper-cyan/10">
      <div className="flex flex-col items-center transition-all duration-300 group-hover:-translate-y-2 group-hover:opacity-0">
        <p className="text-sm font-semibold text-card-foreground">{outcome.outcome}</p>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 opacity-0 transition-all duration-300 group-hover:opacity-100">
        <p className="text-xs font-semibold uppercase tracking-wide text-hyper-cyan">Problem</p>
        <p className="text-xs font-normal leading-[1.6] text-muted-foreground">{outcome.problem}</p>
      </div>
    </div>
  )
}

function GrowthCard() {
  return (
    <div className="w-full rounded-2xl border border-border bg-card px-8 py-7 text-center ring-1 ring-[#14B8A6]/70 shadow-[4px_4px_12px_rgba(15,23,42,0.08)]">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        It all compounds into
      </p>
      <p className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
        Predictable Business Growth
      </p>
      <p className="mt-2 text-sm font-medium text-muted-foreground">More revenue. More margin. More time.</p>
    </div>
  )
}

export function ServicesFlow() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-bold leading-[1.2] tracking-tight text-foreground sm:text-4xl lg:text-5xl flex items-center justify-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-hyper-cyan" />
          What We Build
        </h2>
      </div>

      <div className="mt-8 lg:hidden">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-2xl text-center">
          <h3 className="text-balance text-2xl font-bold leading-[1.2] tracking-tight text-foreground sm:text-3xl flex items-center justify-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-hyper-cyan" />
            What It Gets You
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {outcomes.map((outcome) => (
            <OutcomeCard key={outcome.id} outcome={outcome} />
          ))}
        </div>
        <div className="mt-8">
          <GrowthCard />
        </div>
      </div>

      <div className="hidden lg:block">
        <ArcherContainer
          strokeColor="hsl(var(--hyper-cyan) / 0.62)"
          strokeWidth={3}
          endMarker
          endShape={{
            arrow: {
              arrowLength: 6,
              arrowThickness: 4,
            },
          }}
          svgContainerStyle={{ pointerEvents: "none", zIndex: 0 }}
        >
          <div className="relative z-10 space-y-10">
            <div className="mt-16 grid grid-cols-4 gap-6">
              {services.map((service) => (
                <ArcherElement
                  key={service.id}
                  id={service.id}
                  relations={service.targetOutcomeIds.map((targetId) => ({
                    targetId,
                    sourceAnchor: "bottom",
                    targetAnchor: "top",
                    style: arrowStyle,
                  }))}
                >
                  <div>
                    <ServiceCard service={service} />
                  </div>
                </ArcherElement>
              ))}
            </div>

            <div className="relative z-20 mx-auto max-w-2xl text-center">
              <h3 className="inline-flex text-balance items-center justify-center gap-3 bg-muted px-3 text-2xl font-bold leading-[1.2] tracking-tight text-foreground sm:text-3xl">
                <span className="h-1.5 w-1.5 rounded-full bg-hyper-cyan" />
                What It Gets You
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-2">
              {outcomes.map((outcome) => (
                <ArcherElement
                  key={outcome.id}
                  id={outcome.id}
                  relations={[
                    {
                      targetId: "growth-outcome",
                      sourceAnchor: "bottom",
                      targetAnchor: "top",
                      style: arrowStyle,
                    },
                  ]}
                >
                  <div>
                    <OutcomeCard outcome={outcome} />
                  </div>
                </ArcherElement>
              ))}
            </div>

            <div className="mx-auto max-w-xl pt-3">
              <ArcherElement id="growth-outcome">
                <div>
                  <GrowthCard />
                </div>
              </ArcherElement>
            </div>
          </div>
        </ArcherContainer>
      </div>
    </div>
  )
}
