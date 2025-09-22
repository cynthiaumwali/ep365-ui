import React from "react";
import { cn } from "@/lib/utils";
import { featureData } from "./featureData";
import Section from "@/components/page-components/common/Section";
import { Badge } from "@/components/ui/badge";
import SectionTitle from "@/components/page-components/common/SectionTitle";

const Features = () => {
  return (
    <>
      <Section className="border-x border-divide py-12">
        <div className="max-w-2xl mx-auto flex flex-col justify-center items-center text-center gap-4">
          <Badge variant="outline" className="text-xs text-primary border-none font-medium">Values</Badge>
          <SectionTitle title="What makes us tick" />
          <p className="text-base text-muted-foreground">
            Core values that drive us
          </p>
        </div>
      </Section>
      <div className="bg-muted-foreground/25 h-[0.5px] w-full"></div>
      <Section className="md:px-0 pt-0 md:pt-0">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        >
          {featureData.map((feature, index) => {
            return (
              <div
                key={index}
                className={cn(
                  "relative group flex flex-col justify-center items-start gap-4 border-l p-8 hover:from-transparent hover:to-neutral-100 duration-300 transition cursor-pointer",
                  index < 3 ? "border-b bg-gradient-to-b" : "bg-gradient-to-t", (index === 2 || index === 5) && "border-r"
                )}
              >
                <div className="absolute left-0 top-1/2 w-1 hover:w-1.5 h-6 hover:h-7 bg-neutral-200 group-hover:bg-primary transition-all duration-300 rounded-full" />
                <p className="text-2xl text-primary font-medium">
                  0{index + 1}
                </p>
                <h1 className="font-semibold">{feature.title}</h1>
                <p className="max-w-sm text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
};

export default Features;
