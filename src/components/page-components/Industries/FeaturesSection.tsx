"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
import { useRef } from "react";
import { features } from "./featuresData";
import SectionTitle from "../common/SectionTitle";
import SectionDesc from "../common/SectionDesc";

export default function FeatureScroller() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 px-4 pb-4 scrollbar-hide scroll-smooth"
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative min-w-[320px] md:min-w-[400px] md:max-w-lg flex-shrink-0 rounded-xl overflow-hidden border border-border cursor-pointer p-4"
          >
            <BorderBeam
              duration={8}
              size={300}
              reverse
              className="absolute inset-0 z-10 pointer-events-none from-transparent via-primary to-transparent"
            />
            <div
              className="h-70 bg-center bg-no-repeat bg-contain"
              style={{ backgroundImage: `url(${feature.image})` }}
            >
            </div>

            <div className="pt-4">
              <SectionTitle title={feature.title} className="text-base" />
              <SectionDesc description={feature.description} className="mt-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
