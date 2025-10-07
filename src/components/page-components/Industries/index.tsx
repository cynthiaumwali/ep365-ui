import React from 'react';
import IndustriesSection from './IndustriesSection';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';

const Industries = () => {

  return (
    <Section id="industries"
    >
      <div className="flex flex-col" id="solutions">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle title="Industries We Serve" className="mb-2" />
            <p className="text-center text-base mb-4">
              Discover how our procurement solutions cater to various industries.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <IndustriesSection />
        </div>
      </div>
    </Section>
  );
};

export default Industries;
