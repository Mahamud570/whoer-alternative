"use client";

import { Clock, Share2, Globe } from "lucide-react";
import Image from "next/image";

const AdditionalInfoCards = () => {
  return (
    <section className="space-y-4">
      {/* Time Card */}
      <div className="bg-white border border-border rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center">
            <Clock className="w-12 h-12 text-[#5dbed8]" strokeWidth={1} />
          </div>
          <h4 className="text-lg font-semibold text-text-primary">TIME</h4>
        </div>
        <div className="bg-[#f0fafc] p-3 rounded-md font-monospace text-sm space-y-1.5">
          <div className="flex justify-between items-start gap-4">
            <span className="text-text-secondary">Zone:</span>
            <span className="text-text-primary text-right">America/Los_Angeles</span>
          </div>
          <div className="flex justify-between items-start gap-4">
            <span className="text-text-secondary">Local:</span>
            <span className="text-text-primary text-right">Thu Nov 06 2025 13:04:08 GMT-0800 (PST)</span>
          </div>
          <div className="flex justify-between items-start gap-4">
            <span className="text-text-secondary">System:</span>
            <span className="text-text-primary text-right">Thu Nov 06 2025 13:04:11 GMT-0800 (Pacific Standard Time)</span>
          </div>
        </div>
      </div>

      {/* Social Networks Card */}
      <div className="bg-white border border-border rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center">
            <Share2 className="w-12 h-12 text-[#5dbed8]" strokeWidth={1} />
          </div>
          <h4 className="text-lg font-semibold text-text-primary">SOCIAL NETWORKS</h4>
        </div>
        <div>
          <p className="text-sm text-text-secondary">
            We could not find that you are logged in to social networks
          </p>
        </div>
      </div>
      
      {/* Language Card */}
      <div className="bg-white border border-border rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center">
            <Globe className="w-12 h-12 text-[#5dbed8]" strokeWidth={1} />
          </div>
          <h4 className="text-lg font-semibold text-text-primary">LANGUAGE</h4>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <Image src="/images/flags/us.svg" alt="US flag" width={24} height={18} />
            <span className="text-base font-medium text-text-primary">US</span>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <button className="w-full h-12 bg-[#00D876] text-white rounded-full font-semibold text-base shadow-md hover:bg-[#00c46a] transition-colors">
        Want to know more? Use extended version
      </button>
    </section>
  );
};

export default AdditionalInfoCards;