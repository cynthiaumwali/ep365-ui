import Image from "next/image"

export default function HeroImage() {
  return (
    <div className="max-w-7xl mx-auto border-divide relative flex items-start justify-start border-x bg-gray-100 p-2 perspective-distant md:p-4 lg:p-8 dark:bg-neutral-800">
      <div className="absolute z-10 h-2 w-2 top-0 xl:-top-1 left-0 xl:-left-2 bg-[var(--color-primary)]" />
      <div className="absolute z-10 h-2 w-2 top-0 xl:-top-1 right-0 xl:-right-2 bg-[var(--color-primary)]" />
      <div className="absolute z-10 h-2 w-2 left-0 xl:-left-2 bottom-0 xl:-bottom-1 bg-[var(--color-primary)]" />
      <div className="absolute z-10 h-2 w-2 right-0 xl:-right-2 bottom-0 xl:-bottom-1 bg-[var(--color-primary)]" />

      <div className="relative w-full">
        <div className="relative z-10 h-full w-full cursor-pointer">
          <Image
            src="/images/hero/Dashboard.svg"
            alt="Hero Image"
            width={1000}
            height={1000}
            className="w-full"
            draggable={false}
            priority
            fetchPriority="high"
          />
        </div>
        <div className="absolute inset-0 z-0 m-auto h-[90%] w-[95%] rounded-lg border border-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed" />
      </div>
    </div>
  )
}
