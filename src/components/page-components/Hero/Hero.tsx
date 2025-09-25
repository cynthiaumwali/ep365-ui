"use client"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto border-divide items-center justify-center border-x px-4 pt-16 pb-10 md:pt-36 lg:pt-48 md:pb-20 flex flex-col gap-4">

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Badge variant="outline" className="text-xs text-primary border-none">
          AI-Powered Procurement Platform for Centralization and Automation
        </Badge>
      </motion.div>

      <motion.h1
        className="text-center text-3xl font-medium md:text-4xl lg:text-6xl dark:text-white mb-2"
        initial={{ opacity: 0, y: 30, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        The smarter way to <br /> manage{" "}
        <span className="text-primary">procurement</span>
      </motion.h1>

      <motion.p
        className="text-center text-base text-muted-foreground max-w-lg mb-2"
        initial={{ opacity: 0, y: 30, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        Budgets, compliance, and timelines demand clarity. EP365 delivers
        centralized, AI-powered procurement that gives every team the visibility and control they
        need to scale with ease
      </motion.p>

      <motion.div
        className="flex items-center gap-4 mb-2"
        initial={{ opacity: 0, y: 30, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        <Button className="bg-black text-white dark:bg-white dark:text-black">Book a demo</Button>
        <Button variant="outline">Watch Video</Button>
      </motion.div>

      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <div className="-gap-5 flex items-center">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + 0.1 * i, duration: 0.5, ease: "easeOut" }}
            >
              <Star className="size-4 fill-black text-black" />
            </motion.div>
          ))}
        </div>

        <span className="border-l border-border pl-4 text-[10px] text-muted-foreground sm:text-sm">
          Innovative AI solution 2025 by <span className="font-semibold">Gartner</span>
        </span>
      </motion.div>
    </section>
  );
}
