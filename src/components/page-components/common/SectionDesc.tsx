"use client"
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion'
import React from 'react'

export const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
};

type SectionDescProps = {
    description: string;
    className?: string;
}
export default function SectionDesc({ description, className }: SectionDescProps) {
    return (
        <motion.p
            className={cn("text-muted-foreground", className)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            variants={itemVariants}
        >
            {description}
        </motion.p>
    )
}
