"use client";
import React from "react";
import { motion } from "framer-motion";
import { industries } from "./industriesData";
import { ArrowRightIcon } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";

const IndustriesSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-2 px-4 lg:px-6">
      {industries.map((industry) => {
        return (
          <motion.div
            key={industry.title}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group relative border border-border rounded-lg p-5 transition-all cursor-pointer h-50"
          >
            <BorderBeam
              duration={8}
              size={150}
              reverse
              className="absolute inset-0 z-10 pointer-events-none from-transparent via-primary to-transparent"
            />
            <div className="transition-all duration-300 mb-3 group-hover:mb-6">
              <div className="flex items-center gap-3 mb-3">
                {industry.icon}
                <h3 className="text-base font-semibold">
                  {industry.title}
                </h3>
              </div>
              <p className="text-base text-muted-foreground">{industry.description}</p>
            </div>
            <div className="absolute bottom-5 left-5 transition-all duration-300">
              <a
                className="text-sm font-medium flex justify-center items-center gap-1 hover:underline"
              >
                Learn more
                <ArrowRightIcon className="size-3" />
              </a>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default IndustriesSection;
