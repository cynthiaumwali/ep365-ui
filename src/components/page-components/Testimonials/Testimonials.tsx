"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { companies } from './testimonialsData';

const Testimonials = () => {
  const [hoveredLogo, setHoveredLogo] = useState<number | null>(null);
  const [selectedCompany, setSelectedCompany] = useState(0);

  return (
    <div className="max-w-7xl mx-auto border-x border-border relative">
      <div className="absolute z-10 h-2 w-2 top-0 xl:-top-1 left-0 xl:-left-2 bg-primary"></div>
      <div className="absolute z-10 h-2 w-2 top-0 xl:-top-1 right-0 xl:-right-2 bg-primary"></div>
      <div className="absolute z-10 h-2 w-2 left-0 xl:-left-2 bottom-0 xl:-bottom-1 bg-primary"></div>
      <div className="absolute z-10 h-2 w-2 right-0 xl:-right-2 bottom-0 xl:-bottom-1 bg-primary"></div>

      <div className="grid grid-cols-1 items-stretch divide-x divide-border bg-gray-100/80 md:h-[28rem] md:grid-cols-4 dark:bg-neutral-800 dark:divide-gray-700">
        <div className="col-span-4 flex flex-col gap-10 px-4 py-10 md:flex-row md:py-0 lg:col-span-3">
          <div className="flex flex-col justify-center items-center md:block md:flex-shrink-0">
            <Image
              alt={companies[selectedCompany].author}
              width={400}
              height={400}
              className="aspect-square mt-6 rounded-xl object-cover transition-all duration-500"
              src={companies[selectedCompany].profileImage}            
            />
          </div>

          <div className="flex flex-col items-start justify-between gap-4 py-4 pr-8">
            <div>
              <Image
                alt={companies[selectedCompany].name}
                width={200}
                height={200}
                className="h-6 w-auto object-contain dark:invert dark:filter transition-all duration-500"
                src={companies[selectedCompany].logo}
              />

              <blockquote className="mt-6 text-xl leading-relaxed transition-all duration-500">
                &quot;{companies[selectedCompany].testimonial}&quot;
              </blockquote>
            </div>

            <div className="flex items-end justify-between gap-4 w-full">
              <Image
                alt={companies[selectedCompany].author}
                width={40}
                height={40}
                className="aspect-square w-10 rounded-xl object-cover md:hidden transition-all duration-500"
                src={companies[selectedCompany].profileImage}
              />

              <div>
                <p className="font-semibold text-lg transition-all duration-500">
                  {companies[selectedCompany].author}
                </p>
                <p className="text-sm text-muted-foreground transition-all duration-500">
                  {companies[selectedCompany].role}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden flex-col justify-end px-4 pb-4 lg:col-span-1 lg:flex">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-7xl font-bold transition-all duration-500">
                {companies[selectedCompany].stat}
              </p>
              <p className="text-sm text-muted-foreground transition-all duration-500">
                {companies[selectedCompany].statLabel}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 border-t border-gray-200 md:grid-cols-4 dark:border-gray-700">
        {companies.map((company, index) => (
          <button
            key={company.name}
            className={`group relative overflow-hidden border-r border-b border-gray-200 dark:border-gray-700 ${index === 3 || index === 7 ? 'md:border-r-0' : ''
              } ${index >= 4 ? 'md:border-b-0' : ''} ${index >= 6 ? 'border-b-0' : ''} ${selectedCompany === index ? 'bg-gray-100/50 dark:bg-blue-900/20' : ''
              }`}
            onMouseEnter={() => setHoveredLogo(index)}
            onMouseLeave={() => setHoveredLogo(null)}
            onClick={() => setSelectedCompany(index)}
          >
            <div className="group flex min-h-32 items-center justify-center p-4 py-10 transition-all duration-500">
              <Image
                draggable={false}
                alt={company.name}
                width={200}
                height={200}
                className={`${company.height} w-auto object-contain transition-all duration-500 dark:invert dark:filter ${selectedCompany === index
                    ? 'opacity-100 grayscale-0 scale-110'
                    : hoveredLogo === index
                      ? 'opacity-100 grayscale-0 scale-105'
                      : 'opacity-70 grayscale hover:opacity-100 hover:grayscale-0'
                  }`}
                src={company.logo}
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;