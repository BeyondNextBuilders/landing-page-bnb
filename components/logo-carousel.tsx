"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

const clients = [
  "Solidon Tehnic",
  "TH Media",
  "Digital Craft",
  "FA Studios",
]

export function LogoCarousel() {
  return (
    <section className="relative z-10 bg-muted pt-0 lg:pt-1 pb-4 lg:pb-6 mt-[-62px] sm:mt-[-82px] lg:mt-[-122px]">
      {/* ── Curved top edge — arcs upward over the hero ── */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="block w-full h-[60px] sm:h-[80px] lg:h-[120px]"
        >
          <ellipse cx="720" cy="120" rx="900" ry="120" className="fill-[hsl(var(--muted))]" />
        </svg>
        
        {/* Text centered in the curve */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-hyper-cyan" />
            Trusted by industry leaders
            <span className="h-1 w-1 rounded-full bg-hyper-cyan" />
          </p>
        </div>
      </div>
      
      {/* Fill gap under curve */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-[hsl(var(--muted))]" />

      <Swiper
        modules={[Autoplay]}
        slidesPerView={2}
        spaceBetween={40}
        loop
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 },
        }}
        className="logo-carousel"
      >
        {[...clients, ...clients, ...clients, ...clients].map((name, i) => (
          <SwiperSlide key={`${name}-${i}`}>
            <div className="flex items-center justify-center py-4">
              <span className="select-none text-xl font-bold tracking-tight text-foreground/20 transition-colors duration-300 hover:text-foreground/50">
                {name}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .logo-carousel .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  )
}
