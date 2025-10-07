'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { attributes } from './attributesData';
import SectionTitle from '../common/SectionTitle';
import { BorderBeam } from '@/components/magicui/border-beam';

const Attributes = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <main ref={containerRef}>
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:pt-16 lg:pt-24">
        <SectionTitle title="A procurement platform that reduces spend and increases savings." className="text-center max-w-2xl mx-auto mb-4" />
        <p className="text-center mb-8">
          Still juggling tools? EP365 unifies your procurement in one platform.
        </p>
        {attributes.map((attribute, i) => {
          const scale = 1 - (attributes.length - i) * 0.05;
          return (
            <Card
              url={attribute.src} key={i}
              i={i}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={scale}
              {...attribute} />
          );
        })}
      </section>
    </main>
  );
}
export default Attributes

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  url: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  features: string[]
}

export const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  url,
  progress,
  range,
  targetScale,
  features
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center sticky top-0 w-full py-12"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative w-full max-w-7xl mx-auto rounded-lg border border-border p-2 bg-gray-50"
      >
        <BorderBeam
          duration={4}
          size={300}
          reverse
          className="from-transparent via-[#44BCFF] to-transparent"
        />

        <div className="flex flex-wrap md:flex-nowrap gap-10 rounded-lg px-8 py-16 border border-border bg-card">
          <div className="w-full md:w-[40%]">
            <h1 className="text-2xl text-start font-semibold mb-4">{title}</h1>
            <p className="mb-6">{description}</p>
            <ul className="space-y-3">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="bg-green-700 rounded-full p-1">
                    <Check className="w-4.5 h-4.5 text-background" />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-[60%] aspect-video relative rounded-lg overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image fill src={url} alt="image" className="object-cover" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
