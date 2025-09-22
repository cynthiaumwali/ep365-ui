import Section from "@/components/page-components/common/Section";
import SectionTitle from "@/components/page-components/common/SectionTitle";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import React from "react";

const stats = [
  { label: "Year founded", value: "2015" },
  { label: "Countries served", value: "80+" },
  { label: "Clients onboarded", value: "1000+" },
];

const EPOverview = () => {
  return (
    <Section className="md:px-0 border-x border-divide" id="overview">
      <div className="flex flex-col justify-center items-center text-center gap-4 mb-8">
        <Badge variant="outline" className="text-xs text-primary border-none">Raw Numbers</Badge>
        <SectionTitle title="EP365 At A Glance" />
        <p className="text-muted-foreground max-w-lg mx-auto">We empower developers and technical teams to create, simulate, and manage AI-driven workflows visually</p>
      </div>
      <div className="flex justify-between items-center border-t">
        {stats.map((item, index) => (
          <div key={index} className={cn("min-w-[120px] flex flex-col justify-center p-4 lg:p-8 w-full", index <2 && "border-r" )}>
            <p className="text-3xl font-medium">{item.value}</p>
            <p className="text-muted-foreground">{item.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default EPOverview;
