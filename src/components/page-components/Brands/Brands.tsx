import Image from "next/image"
import brandsData from "./brandsData"
import { cn } from "@/lib/utils"

export default function Brands() {
  return (
    <div className="max-w-7xl mx-auto border-divide border-x">
      <h2 className="py-8 text-center font-mono text-sm tracking-tight text-muted-foreground uppercase">
        Trusted by Fast Growing Startups
      </h2>

      <div className="border-divide grid grid-cols-2 border-t md:grid-cols-4">
        {brandsData.map((logo, index) => (
          <div
            key={index}
            className={cn("border-divide group relative overflow-hidden border-r md:border-r hover:bg-primary/10 transition duration-300 cursor-pointer", index < 4 && "border-b", (index === 3 || index===7) && "md:border-r-0")}
          >
            <div className="animate-move-left-to-right bg-brand/5 absolute inset-x-0 bottom-0 h-full translate-y-full transition-all duration-200 group-hover:translate-y-0" />

            <div className="group flex min-h-32 items-center justify-center p-4 py-10 grayscale">
              <Image
                src={logo.image}
                alt="Brand Logo"
                width={160}
                height={40}
                className="object-contain transition-all duration-500 hover:scale-[1.05] dark:invert dark:filter"
                
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
