import React from "react";
import Hero from "./components/Hero";
import Service from "./components/ServiceSection/ServiceSection";
import {
  approveContent,
  approveTabs,
  controlContent,
  controlTabs,
  orderContent,
  orderTabs,
  requestContent,
  requestTabs,
} from "./components/ServiceSection/serviceSectionData";
import PRFlow from "./components/PRFlow/PRFlow";
import POManagement from "./components/POManagement/POManagement";
import Features from "./components/Features/Features";
import AboutUs from "./components/AboutUs/AboutUs";
import WhyUs from "./WhyUs/WhyUs";
import Partners from "./Partners/Partners";
import ContactUS from "@/components/page-components/Contact/Contact";

export const metadata = {
  title: "Features | EP 365",
  description:
    "Explore the features of our procurement system designed to streamline purchasing and vendor management.",
};
const FeaturesPage = () => {
  return (
    <>
      <Hero />
      <Service
        badge="Request"
        title="80% less manual data entry"
        description="Create, approve, and track requests in real time with EP365. Streamline your intake process, avoid unnecessary spend and delays, and eliminate inventory issues. Add items directly from vendor catalogs using seamless PunchOut integrations."
        tabs={requestTabs}
        content={requestContent}
      />
      <PRFlow />
      <Service
        badge="Approve"
        title="3.5x faster approval workflow"
        description="Be sure every document is automatically sent to the correct
approver. Build a custom approval process with the required
number of steps for the most precise routing. Ensure each
document gets to the right person at the right time. Automate
to approve in seconds."
        tabs={approveTabs}
        content={approveContent}
      />
      <Service
        badge="Order"
        title="78% shorter purchase cycle time"
        description="Let EP365 handle the heavy lifting—automate document creation, approvals, and processing with ease. Powered by Google AI OCR, it ensures timely order fulfillment, smooth supplier collaboration, and seamless support for all your operational needs."
        tabs={orderTabs}
        content={orderContent}
      />
      <POManagement />
      <Service
        badge="Control"
        title="Save 5% on every dollar spent"
        description="Gain full control over spending with EP365. Eliminate budget overruns and maverick purchases by managing all procurement from one centralized platform. Improve cash flow visibility and control corporate expenses in real time with AI-driven insights—built for multi-entity businesses."
        tabs={controlTabs}
        content={controlContent}
      />
      <Features />
      <AboutUs />
      <WhyUs />
      <Partners />
      <ContactUS />
    </>
  );
};

export default FeaturesPage;
