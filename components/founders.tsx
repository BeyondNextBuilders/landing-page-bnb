import Image from "next/image"
import Link from "next/link"
import { Linkedin } from "lucide-react"
import { founders } from "@/constants/founders"

export function Founders() {
  return (
    <div className="mx-auto w-fit">
      <div className="relative z-10 flex items-end gap-10 rounded-2xl border-2 border-black bg-white px-12 py-8 pt-2 shadow-[8px_8px_0_0_#111827] sm:gap-14 sm:px-16 lg:gap-20 lg:px-20">
        {founders.map((founder, index) => (
          <Link
            key={index}
            href={founder.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
          >
            <div className="relative -mt-14 mb-4 h-24 w-24 overflow-hidden rounded-full border-2 border-black transition-all duration-200 group-hover:shadow-[14px_-12px_0_0_#FACC15] sm:h-28 sm:w-28 lg:h-32 lg:w-32">
              <Image src={founder.image} alt={founder.name} fill className="object-cover" />
            </div>
            <p className="relative text-sm font-medium leading-tight text-foreground after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#FACC15] after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100 sm:text-base">
              <span className="inline-block transition-transform duration-300 ease-out [transform:skewX(0deg)] group-hover:[transform:skewX(-12deg)]">
                {founder.name}
              </span>
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
