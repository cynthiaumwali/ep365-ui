import AIFeatures from "@/components/page-components/AIFeatures/AIFeatures";
import Banner from "@/components/page-components/Banner/Banner";
import Benefits from "@/components/page-components/Benefits/Benefits";
import Brands from "@/components/page-components/Brands/Brands";
import ContactUS from "@/components/page-components/Contact/Contact";
import Features from "@/components/page-components/Features/Features";
import Hero from "@/components/page-components/Hero/Hero";
import HeroImage from "@/components/page-components/Hero/HeroImage";
import Industries from "@/components/page-components/Industries/Industries";
import PricingPlans from "@/components/page-components/Pricings/Pricings";
import Testimonials from "@/components/page-components/Testimonials/Testimonials";
import { Metadata } from "next";
import FAQ from "@/components/page-components/FAQs/FAQs";
import OrbitAnimation from "@/components/page-components/OrbitAnimation/OrbitAnimation";
import HowItWorks from "@/components/page-components/HowItWorks/HowItWorks";
import { items } from "@/components/page-components/HowItWorks/data";

export const metadata: Metadata = {
  title: "EP365 Procurement",
  description: "The Smarter Way to Manage Procurement",
};

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-muted-foreground/15 h-[1px] w-full"></div>
      <HeroImage />
      <div className="bg-muted-foreground/15 h-[1px] w-full"></div>
      <Brands />
      <div className="bg-muted-foreground/15 h-[1px] w-full"></div>
      <HowItWorks items={items} interval={5000} />
      <div className="bg-muted-foreground/15 h-[1px] w-full"></div>
      <AIFeatures />
      <div className="bg-muted-foreground/15 h-[1px] w-full"></div>
      <Features />
      <div className="bg-muted-foreground/15 h-[1px] w-full"></div>
      <Industries />
      <div className="bg-muted-foreground/15 h-[1px] w-full"></div>
      <Benefits />
      <div className="bg-muted-foreground/15 h-[1px] w-full"></div>
      <Testimonials />
      <div className="bg-muted-foreground/15 h-[1px] w-full"></div>
      <PricingPlans />
      <div className="bg-muted-foreground/15 h-[1px] w-full"></div>
      <Banner />
      <div className="bg-muted-foreground/15 h-[1px] w-full"></div>
      <FAQ />
      <div className="bg-muted-foreground/15 h-[1px] w-full"></div>
      <OrbitAnimation />
      <div className="bg-muted-foreground/15 h-[1px] w-full"></div>
      <ContactUS />
    </>
  );
}
