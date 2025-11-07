"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Youtube, Instagram, Twitter, Facebook, ChevronDown } from 'lucide-react';

interface FooterLink {
  href: string;
  text: string;
  isSupport?: boolean;
}

const informationLinks: FooterLink[] = [
  { href: "/blog", text: "Blog" },
  { href: "/terms_of_use", text: "Terms of use" },
  { href: "/refund", text: "Refund Policy" },
  { href: "/privacy", text: "Privacy Policy" },
  { href: "/contacts", text: "Contacts" },
  { href: "/about", text: "About us" },
];

const servicesLinks: FooterLink[] = [
  { href: "/", text: "My IP" },
  { href: "/speedtest", text: "Speed test" },
  { href: "/ping", text: "Ping" },
  { href: "/checkwhois", text: "Whois" },
  { href: "/dns-leak-test", text: "DNS leak test" },
  { href: "/port-scanner-online", text: "Port scanner" },
];

const usefulLinks: FooterLink[] = [
  { href: "#", text: "Customer Support", isSupport: true },
  { href: "#", text: "Privacy related problems and solutions" },
  { href: "#", text: "How to check your IP address" },
  { href: "#", text: "Understanding VPN and proxy services" },
  { href: "#", text: "Network security best practices" },
];

const socialLinks = [
  { href: "#", icon: Youtube },
  { href: "#", icon: Instagram },
  { href: "#", icon: Twitter },
  { href: "#", icon: Facebook },
];

const FooterLinkItem: React.FC<{ link: FooterLink }> = ({ link }) => {
  const isExternal = link.href.startsWith('http');
  const className = `text-sm text-[#dde5e8] transition-colors duration-200 hover:text-white ${link.isSupport ? 'text-[#5dbed8]' : ''}`;
  
  if (isExternal) {
    return (
      <a href={link.href} className={className} target="_blank" rel="noopener noreferrer">
        {link.text}
      </a>
    );
  }
  return (
    <Link href={link.href} className={className}>
      {link.text}
    </Link>
  );
};

const FooterColumn: React.FC<{ title: string; links: FooterLink[] }> = ({ title, links }) => (
  <div>
    <h4 className="mb-6 text-base font-bold uppercase text-white">{title}</h4>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.text}>
          <FooterLinkItem link={link} />
        </li>
      ))}
    </ul>
  </div>
);

const LanguageSelector = () => (
  <button className="flex items-center gap-2 rounded-full border border-[#6cbdd8] px-3 py-1 text-sm text-white transition-colors hover:bg-white/10">
    <Image src="/images/flags/us.svg" alt="English language" width={20} height={20} className="rounded-full" />
    <span>English</span>
    <ChevronDown size={16} />
  </button>
);

const Footer = () => {
  return (
    <footer className="bg-[#2a5a6a]">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <FooterColumn title="Information" links={informationLinks} />
          <FooterColumn title="Services" links={servicesLinks} />
          <FooterColumn title="Useful links" links={usefulLinks} />
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-y-6 border-t border-t-[#3c707f] pt-8 sm:flex-row">
          <span className="text-sm text-[#94b2bc]">
            Copyright © 2025
          </span>
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.href} className="text-white transition-opacity hover:opacity-80">
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <LanguageSelector />
        </div>
      </div>
    </footer>
  );
};

export default Footer;