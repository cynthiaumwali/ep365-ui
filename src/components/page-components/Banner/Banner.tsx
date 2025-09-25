import { Button } from "@/components/ui/button";
import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import Section from "../common/Section";
import SectionDesc from "../common/SectionDesc";

export default function Banner() {
  return (
    <Section className="border-x border-divide grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-100 pb-16">
      <div className="flex flex-col items-start justify-center gap-6">
        <SectionTitle title="Experience the Future of Procurement with AI" className="text-left max-w-sm" />
        <SectionDesc description="Our AI assistant is designed with enterprise-grade security practices
          and compliant with global data protection standards." className="max-w-xl" />
        <Button className="bg-black cursor-pointer">Start for free</Button>
      </div>
      <div className="flex items-center justify-center gap-10">
        <Image
          alt="CCPA"
          src="/images/brands/CCPA.webp"
          width={56}
          height={56}
          className="h-auto w-12"
        />
        <Image
          alt="GPDR"
          src="/images/brands/GDPR.webp"
          width={56}
          height={56}
          className="h-auto w-12"
        />
        <Image
          alt="ISO"
          src="/images/brands/ISO.webp"
          width={56}
          height={56}
          className="h-auto w-12"
        />
      </div>
    </Section>
  );
}
