import { Globe } from "@/components/magicui/globe";
import Section from "@/components/page-components/common/Section";
import SectionTitle from "@/components/page-components/common/SectionTitle";
import { Badge } from "@/components/ui/badge";
import React from "react";

const Mission = () => {
  return (
    <Section className="relative border-x border-divide pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="mb-10">
          <Badge variant="outline" className="text-xs text-primary border-none">Raw Numbers</Badge>
          <SectionTitle title=" Unifying Procurement, One Piece at a Time" />
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Founded in 2015 with a people-first mindset, EP365 helps over 1,000
            global companies simplify procurement. We centralize purchasing,
            automate manual tasks, and deliver deep spend insights — helping
            teams save time, reduce costs, and scale faster.
          </p>
        </div>
        <div className="border w-full relative rounded-md flex items-end overflow-hidden">
          <Globe className="w-120 h-auto md:translate-x-1/2 lg:translate-x-1/3" />
        </div>
      </div>
    </Section>
  );
};

export default Mission;
