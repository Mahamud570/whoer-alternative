"use client";

import { useState } from "react";
import Image from "next/image";
import { Copy, Check } from "lucide-react";

const HeroIpDisplay = () => {
  const ipAddress = "73.109.232.35";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (copied) return;
    navigator.clipboard.writeText(ipAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-gradient-to-br from-[#1b5161] via-[#2a6a7c] to-[#1b5161] text-white overflow-hidden relative">
      {/* Modern gradient mesh background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00d876] rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#5dbed8] rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
      </div>
      
      <div className="container py-8 md:py-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <div className="relative w-16 h-16 md:w-20 md:h-20">
              <div className="absolute inset-0 bg-white/10 rounded-2xl blur-xl"></div>
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6563a65a-703b-4701-b362-471ce191f991-whoer-net/assets/svgs/us-1.svg"
                alt="US Flag"
                width={80}
                height={80}
                className="w-full h-full relative z-10 rounded-xl"
              />
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-semibold text-white/90 mb-2">
            Your IP Address
          </h1>

          <div
            className="inline-flex items-center justify-center gap-3 mb-3 cursor-pointer group bg-white/5 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/10 hover:bg-white/10 transition-all"
            onClick={handleCopy}
            title="Copy IP address"
          >
            <strong className="font-monospace text-3xl md:text-5xl leading-none font-bold tracking-wide">
              {ipAddress}
            </strong>
            <div className="relative w-6 h-6 md:w-7 md:h-7">
              <Copy
                className={`absolute top-0 left-0 h-full w-full text-white/60 group-hover:text-white/90 transition-all duration-300 ${
                  copied ? 'opacity-0 scale-50' : 'opacity-100 scale-100'
                }`}
              />
              <Check
                className={`absolute top-0 left-0 h-full w-full text-[#00d876] transition-all duration-300 ${
                  copied ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                }`}
              />
            </div>
          </div>

          <p className="text-lg md:text-xl text-white/80 mb-4">
            Renton, United States
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroIpDisplay;