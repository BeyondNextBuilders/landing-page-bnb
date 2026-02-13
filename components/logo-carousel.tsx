"use client"

import { useRef } from "react"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import type { SwiperRef } from "swiper/react"
import "swiper/css"
import { clients } from "@/constants/clients"

export function LogoCarousel() {
  const swiperRef = useRef<SwiperRef>(null)

  const handleMouseEnter = () => {
    swiperRef.current?.swiper?.autoplay?.stop()
  }

  const handleMouseLeave = () => {
    swiperRef.current?.swiper?.autoplay?.start()
  }

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

      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Swiper
          ref={swiperRef}
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
          {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
            <SwiperSlide key={`${client.name}-${i}`}>
              <div className="flex items-center justify-center py-4">
                {client.link ? (
                  <Link
                    href={client.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="select-none text-xl font-bold tracking-tight text-foreground/20 transition-colors duration-300 hover:text-foreground/50"
                  >
                    {client.name}
                  </Link>
                ) : (
                  <span className="select-none text-xl font-bold tracking-tight text-foreground/20 transition-colors duration-300 hover:text-foreground/50">
                    {client.name}
                  </span>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .logo-carousel .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  )
}
