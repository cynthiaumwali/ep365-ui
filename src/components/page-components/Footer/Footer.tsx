import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import { defaultSections, defaultLegalLinks } from "./footerData";
import { FooterProps } from "@/types";

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
  { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
  { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" },
];

const Footer = ({
  logo = {
    url: "ep365.com",
    src: "/images/logos/EP365 Logo.svg",
    alt: "EP365 Logo",
    title: "EP365",
  },
  sections = defaultSections,
  socialLinks = defaultSocialLinks,
  copyright = "Copyright © ep365. All rights Reserved.",
  legalLinks = defaultLegalLinks,
}: FooterProps) => {
  return (
    <section className="pt-16 px-6 border-t bg-white relative overflow-hidden mb-6">
      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            <div className="flex items-center gap-2 lg:justify-start">
              <a href={logo.url}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  width={100}
                  height={100}
                />
              </a>
            </div>

            <ul className="flex items-center space-x-2 text-muted-foreground">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="hover:text-primary">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-6 sm:grid-cols-2 md:grid-cols-4 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-medium">{section.title}</h3>
                <ul className="space-y-3 text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="hover:text-primary">
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 max-w-5xl mx-auto flex flex-col justify-between gap-4 border-t py-8 text-xs text-muted-foreground md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-primary">
                <a href={link.href}> {link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
