import { Metadata } from "next";
import React from "react";
import Hero from "./components/Hero";
import EPOverview from "./components/EPOverview";
import Features from "./components/Features/Features";
import ContactUS from "@/components/page-components/Contact/Contact";
import WhyUs from "./components/WhyUs/WhyUs";
import ComparisonTable from "./components/ComparisonTable";
import FAQ from "@/components/page-components/FAQs/FAQs";
export const metadata: Metadata = {
  title: "About Us | EP 365",
  description:
    "Learn more about EP 365, our mission, values, and the team dedicated to delivering exceptional experiences.",
};
const AboutUsPage = () => {
  return (
    <>
      <Hero />
      <div className="bg-muted-foreground/15 h-[1px] w-full"></div>
      <EPOverview />
      <div className="bg-muted-foreground/15 h-[1px] w-full"></div>
      <Features />
      <div className="bg-muted-foreground/15 h-[1px] w-full"></div>
      <WhyUs />
      <div className="bg-muted-foreground/15 h-[1px] w-full"></div>
      <ComparisonTable />
      <div className="bg-muted-foreground/15 h-[1px] w-full"></div>
      <FAQ />
      <div className="bg-muted-foreground/15 h-[1px] w-full"></div>
      <ContactUS />
    </>
  );
};

export default AboutUsPage;
