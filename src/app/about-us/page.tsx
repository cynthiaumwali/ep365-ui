import { Metadata } from "next";
import React from "react";
import Hero from "./components/Hero";
import EPOverview from "./components/EPOverview";
import Mission from "./components/Mission";
import Features from "./components/Features/Features";
import FAQs from "./components/FAQs";
import ContactUS from "@/components/page-components/Contact/Contact";
import WhyUs from "./components/WhyUs/WhyUs";
import ComparisonTable from "./components/ComparisonTable";
export const metadata: Metadata = {
  title: "About Us | EP 365",
  description:
    "Learn more about EP 365, our mission, values, and the team dedicated to delivering exceptional experiences.",
};
const AboutUsPage = () => {
  return (
    <>
      <Hero />
      <EPOverview />
      <Mission />
      <Features />
      <WhyUs />
      <ComparisonTable />
      <FAQs />
      <ContactUS />
    </>
  );
};

export default AboutUsPage;
