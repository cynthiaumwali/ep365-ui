import Image from "next/image";
import React from "react";
import { whyUsData } from "./whyUsData";
import { cn } from "@/lib/utils";
import Section from "@/components/page-components/common/Section";
import { Badge } from "@/components/ui/badge";
import SectionTitle from "@/components/page-components/common/SectionTitle";

const WhyUs = () => {
  const length = whyUsData.length;
  return (
    <Section className="border-x border-divide pb-12">
      <div className="max-w-2xl mx-auto flex flex-col justify-center items-center text-center gap-4 mb-12">
        <Badge variant="outline" className="text-xs text-primary border-none font-medium">Mission</Badge>
        <SectionTitle title="Your analytics in one place" />
        <p className="text-base text-muted-foreground">
          Why 1,000+ Leading Businesses Trust EP365 for Smarter Procurement

        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {whyUsData.map((feature, index) => (
          <div
            key={index}
            className={cn(
              "bg-gray-100/50 p-6 rounded-lg flex flex-col gap-4 hover:shadow-sm transition",
              index === length - 1 && "md:col-span-2 flex flex-row"
            )}
          >
            <div>
              <h3 className="font-medium mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
            <div className="mt-auto">
              <Image
                src={feature.imageSrc}
                alt={feature.alt}
                width={400}
                height={200}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default WhyUs;
