import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 lg:pt-20 pb-[60px] sm:pb-[80px] lg:pb-[120px]">
      {/* ── Background image spanning full width ── */}
      <div className="absolute inset-0 hidden lg:block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-right"
        />
      </div>

      {/* ── Giant fade overlay from left ── */}
      <div
        className="absolute inset-0 hidden lg:block pointer-events-none"
        style={{
          background: `linear-gradient(to right, 
            rgba(255,255,255,1) 0%, 
            rgba(255,255,255,1) 40%, 
            rgba(255,255,255,0.95) 48%, 
            rgba(255,255,255,0.75) 58%, 
            rgba(255,255,255,0.4) 68%, 
            rgba(255,255,255,0.1) 78%, 
            rgba(255,255,255,0) 88%)`
        }}
      />

      {/* ── Content layer ── */}
      <div className="relative z-10">
        <div className="min-h-[600px] lg:min-h-[700px]">
          <div className="flex flex-col justify-center px-6 py-16 lg:pl-32 xl:pl-40 2xl:pl-48 lg:py-24 max-w-3xl">
            <h1 className="text-5xl font-bold leading-[1.08] tracking-tight text-black sm:text-6xl xl:text-[58px] 2xl:text-[62px]">
              Crafting Digital{" "}
              <span className="text-hyper-cyan">Excellence</span>
              <br />
              for Your Business
            </h1>

            <p className="mt-7 max-w-xl text-lg font-normal leading-[1.75] text-muted-foreground lg:text-xl lg:leading-[1.8]">
              We design and build custom software that turns your vision into scalable digital products.
              From concept to deployment — and beyond.
            </p>

            <div className="mt-9">
              <Button
                asChild
                className="bg-cta text-cta-foreground font-bold px-8 py-3 text-sm rounded-md h-auto shadow-lg shadow-cta/30 hover:bg-cta/85 hover:shadow-xl hover:shadow-cta/40 transition-all"
              >
                <Link href="https://calendly.com/office-beyondnextbuilders/30min" target="_blank" rel="noopener noreferrer">
                  Schedule a Call
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile-only image (below text) */}
        <div className="relative h-80 sm:h-96 lg:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
            alt="Team collaborating in a modern office"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
