import Image from "next/image"
import Link from "next/link"
import { Linkedin } from "lucide-react"
import { founders } from "@/constants/founders"

export function Founders() {
  return (
    <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 translate-y-[20%]">
      <div className="flex items-end gap-10 rounded-2xl border border-border/50 bg-white px-12 py-8 pt-2 sm:gap-14 sm:px-16 lg:gap-20 lg:px-20">
        {founders.map((founder, index) => (
          <Link
            key={index}
            href={founder.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center transition-opacity hover:opacity-80"
          >
            {/* Founder image - overlaps top edge */}
            <div className="relative -mt-14 mb-4 h-24 w-24 sm:h-28 sm:w-28 lg:h-32 lg:w-32">
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                className="object-contain object-bottom"
              />
            </div>
            {/* Name & role */}
            <p className="text-sm font-medium leading-tight text-foreground sm:text-base">
              {founder.name}
            </p>
            <p className="mt-1 text-xs font-normal text-muted-foreground sm:text-sm">
              {founder.role}
            </p>
            <Linkedin className="mt-2 h-4 w-4 text-muted-foreground transition-colors group-hover:text-[#0A66C2]" />
          </Link>
        ))}
      </div>
    </div>
  )
}
