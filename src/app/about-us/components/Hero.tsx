import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto border-divide items-center justify-center border-x px-4 md:px-6 lg:px-8 pt-16 pb-10 md:pt-36 lg:pt-48 md:pb-20 flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
        <div className="flex flex-col justify-start items-start text-start gap-4 mb-10">
          <Badge variant="outline" className="text-xs text-primary border-none">About EP365</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-md font-medium capitalize">
            Unifying Procurement, One Piece at a Time
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Founded in 2015 with a people-first mindset, EP365 helps over 1,000
            global companies simplify procurement. We centralize purchasing,
            automate manual tasks, and deliver deep spend insights — helping
            teams save time, reduce costs, and scale faster.
          </p>
          <p className="text-muted-foreground max-w-2xl">
            Founded in 2015 with a people-first mindset, EP365 helps over 1,000
            global companies simplify procurement. We centralize purchasing,
            automate manual tasks, and deliver deep spend insights — helping
            teams save time, reduce costs, and scale faster.
          </p>
        </div>
        <div className="border border-border rounded-lg p-2 w-full h-fit">
          <Image
            alt="About Us Image"
            width={450}
            height={450}
            className="w-full h-auto rounded-xl object-cover transition-all duration-500"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1361&auto=format&fit=crop"
            priority
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
