import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function Hero() {
  return (

    <section className="max-w-7xl mx-auto border-divide items-center justify-center border-x px-4 pt-16 pb-10 md:pt-36 lg:pt-48 md:pb-20 flex flex-col gap-4">
      <Badge variant="outline" className="text-xs text-primary border-none">AI-Powered Procurement Platform for Centralization and Automation</Badge>
      <h1 className="text-center text-3xl font-medium md:text-4xl lg:text-6xl dark:text-white mb-2">
        The smarter way to <br /> manage {" "}
        <span className="text-primary">procurement</span>
      </h1>
      <p className="text-center text-base text-muted-foreground max-w-lg mb-2">
        Budgets, compliance, and timelines demand clarity. EP365 delivers
        centralized, AI-powered procurement that gives every team the visibility and control they
        need to scale with ease
      </p>
      <div className="flex items-center gap-4 mb-2">
        <Button className="bg-black text-white dark:bg-white dark:text-black">Book a demo</Button>
        <Button variant="outline">Watch Video</Button>
      </div>
      <div className="flex items-center gap-2">
        <div className="-gap-5 flex items-center">
          {[...Array(5)].map((_, i) => (
            <div key={i} style={{ opacity: 1 }}>
              <Star className="size-4 fill-black text-black" />
            </div>
          ))}
        </div>

        <span className="border-l border-gray-500 pl-4 text-[10px] text-muted-foreground sm:text-sm">
          Innovative AI solution 2025 by <span className="font-semibold">Gartner</span>
        </span>
      </div>
    </section>
  )
}
