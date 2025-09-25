"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import SectionTitle from "../common/SectionTitle";
import { benefitsData } from "./benefitsData";
import Section from "../common/Section";
import { motion } from "framer-motion";
import SectionDesc, { itemVariants } from "../common/SectionDesc";

const Benefits = () => {
  return (
    <Section className="border-divide border-x py-12">
      <div className="relative flex flex-col justify-center items-center text-center gap-4">
        <Badge variant="outline" className="text-xs text-primary border-none">
          Benefits
        </Badge>
        <SectionTitle title="Making Engineers 10x faster" />
        <SectionDesc description="We empower developers and technical teams to create, simulate, and
          manage AI-driven workflows visually" className="max-w-lg mx-auto" />
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
        {benefitsData.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <div
              key={index}
              className="relative z-10 rounded-lg bg-gray-100/40 h- p-4 transition duration-200 hover:bg-gray-50/70 md:p-5 dark:bg-neutral-800"
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                variants={itemVariants}
                className="bg-primary/10 p-3.5 rounded-lg w-fit"
              >
                <Icon className="text-primary size-4.5" />
              </motion.div>

              <motion.h3
                className="mt-4 mb-2 text-lg font-medium"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                variants={itemVariants}
              >
                {benefit.title}
              </motion.h3>

              <SectionDesc description={benefit.description} />
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Benefits;
