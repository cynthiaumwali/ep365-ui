"use client";
import React from "react";
import { motion } from "framer-motion";
import { industries } from "./industriesData";
import { ArrowRight } from "lucide-react"; // optional, or use an SVG/icon

const IndustriesSection = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-2">
        {industries.map((industry) => {
          return (
            <motion.div
              key={industry.title}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative border border-neutral-200 rounded-lg p-5 shadow-xs transition-all cursor-pointer"
            >
              <div className="transition-all duration-300 mb-3 group-hover:mb-6">
                <div className="flex items-center gap-3 mb-3">
                  {industry.icon}
                  <h3 className="text-base font-semibold">
                    {industry.title}
                  </h3>
                </div>
                <p className="text-base text-muted-foreground">{industry.description}</p>
              </div>

              <a
                className="text-sm font-medium inline-flex items-center gap-1 hover:underline"
              >
                Learn more
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default IndustriesSection;
