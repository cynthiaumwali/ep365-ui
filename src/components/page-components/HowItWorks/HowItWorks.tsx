"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import SectionTitle from "../common/SectionTitle"
import Section from "../common/Section"
import Image from "next/image"

interface Feature {
  title: string
  description: string
  icon?: React.ReactNode
  image: string
}

interface FeaturesProps {
  items: Feature[]
  autoPlay?: boolean
  interval?: number
}

export default function Features({ items, autoPlay = true, interval = 5000 }: FeaturesProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null)

  const startProgressTimer = (startFromProgress = 0) => {
    if (progressTimerRef.current) {
      clearInterval(progressTimerRef.current)
    }

    if (!autoPlay) return

    const step = interval / 100
    let currentProgress = startFromProgress

    progressTimerRef.current = setInterval(() => {
      currentProgress += 1
      setProgress(currentProgress)

      if (currentProgress >= 100) {
        if (progressTimerRef.current) {
          clearInterval(progressTimerRef.current)
        }
        setActiveIndex((prevIndex) => (prevIndex + 1) % items.length)
        currentProgress = 0
        setProgress(0)
      }
    }, step)
  }

  useEffect(() => {
    startProgressTimer(0)

    return () => {
      if (progressTimerRef.current) {
        clearInterval(progressTimerRef.current)
      }
    }
  }, [activeIndex, autoPlay, interval, items.length])

  const handleClick = (idx: number) => {
    if (idx === activeIndex) return

    if (progressTimerRef.current) {
      clearInterval(progressTimerRef.current)
    }
    setActiveIndex(idx)
    setProgress(0)
    setTimeout(() => {
      startProgressTimer(0)
    }, 50)
  }

  return (
    <Section className="md:px-0 pt-12 border-x border-divide">
      <div className="flex flex-col justify-center items-center text-center gap-4 mb-12">
        <Badge variant="outline" className="text-xs text-primary border-none font-medium">How It Works</Badge>
        <SectionTitle title="Effortless Implementation, Lasting Procurement Value " />
        <p className="text-muted-foreground max-w-2xl mx-auto">
          EP365 makes procurement automation simple. Go live fast, empower your
          teams, and achieve measurable ROI without the headaches of complex IT rollouts.        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t">
        <div className="flex flex-col divide-y border-r border-divide">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={cn("p-6 cursor-pointer relative transition-colors", activeIndex === idx ? "bg-gradient-to-b from-gray-100 to-transparent dark:bg-neutral-800" : "hover:bg-gray-50 dark:hover:bg-neutral-700")}
              onClick={() => handleClick(idx)}
            >
              <div className="flex items-start gap-3">
                {item.icon && <span className="mt-1">{item.icon}</span>}
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-muted-foreground mt-2">{item.description}</p>
                </div>
              </div>

              {activeIndex === idx && (
                <div
                  className="absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              )}
            </div>
          ))}
        </div>

        <div className="relative min-h-[300px] flex items-center justify-center">
          {items.map((item, idx) => (

            <div
              key={idx}
              className={cn(
                "absolute inset-0 transition-opacity duration-500 w-full rounded-lg overflow-clip",
                activeIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0"
              )}
            >
              <Image
                src={item.image}
                alt="Hero slide"
                fill
                priority={idx === 0}
                sizes="100vw"
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
            </div>

          ))}
        </div>
      </div>
    </Section>
  )
}