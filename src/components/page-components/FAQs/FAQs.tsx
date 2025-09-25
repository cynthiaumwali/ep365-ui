"use client";

import React from 'react';

import { motion } from 'framer-motion';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { faqData } from './faqData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import SectionDesc from '../common/SectionDesc';

export default function FAQ() {
    return (
        <Section id="faq" className="border-x border-divide md:px-0 pt-12">
            <div className="flex flex-col justify-center items-center text-center gap-6 pb-12 border-b">
                <Badge variant="outline" className="text-xs text-primary border-none font-medium">FAQS</Badge>
                <SectionTitle title="Let's Answer Your Questions" />
                <SectionDesc description="If you have any questions or need assistance, feel free to reach out to us." className="max-w-xl mx-auto" />
                <div className="flex items-center gap-4 mb-2">
                    <Button className="bg-black text-white dark:bg-white dark:text-black">Book a demo</Button>
                    <Button variant="outline">Watch Video</Button>
                </div>
            </div>

            <Accordion type="single" collapsible className="">
                {faqData.map((faq, index) => (
                    <motion.div
                        key={index}
                        className="border-b border-border dark:border-border last:border-b-0 px-4 md:px-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.05 }}
                    >
                        <AccordionItem value={`item-${index}`}>
                            <AccordionTrigger className="text-left text-base cursor-pointer">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent>
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    </motion.div>
                ))}
            </Accordion>
        </Section>
    );
}
