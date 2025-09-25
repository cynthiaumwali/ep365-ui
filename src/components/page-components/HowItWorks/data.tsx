import { Rocket, Target, BarChart3, Shield } from "lucide-react";

export const items = [
  {
    title: "Seamless Go-Live",
    subtitle: "Launch procurement workflows quickly with minimal IT involvement.",
    description:
      "Dedicated onboarding support ensures a smooth transition.",
    icon: <Rocket className="w-5 h-5 text-primary" />,
    image: "/images/brands/div.png",
  },
  {
    title: "Operational Excellence",
    subtitle: "Standardize procurement across teams and business units.",
    description:
      "Easy-to-use workflows accelerate user adoption.",
    icon: <Target className="w-5 h-5 text-primary" />,
    image: "/images/brands/Operational Excellence.png",
  },
  {
    title: "Smarter Spend & ROI",
    subtitle: "Gain actionable spend insights with AI-powered analytics.",
    description:
      "Unlock savings through sourcing automation and consolidated purchasing.",
    icon: <BarChart3 className="w-5 h-5 text-primary" />,
    image: "/images/brands/Smarter Spend and ROI.png",
  },
  {
    title: "Scale with Confidence",
    subtitle: "Strengthen compliance and risk management.",
    description:
      "Reinvest savings to fuel long-term growth and competitive advantage.",
    icon: <Shield className="w-5 h-5 text-primary" />,
    image: "/images/brands/img.svg",
  },
];
