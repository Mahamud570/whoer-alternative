"use client";

import { useState } from "react";
import Image from "next/image";
import { Shield, Scan, Cookie, MapPin } from "lucide-react";

interface ToolCardProps {
  icon: React.ReactNode;
  title: string;
  href: string;
}

const ToolCard = ({ icon, title, href }: ToolCardProps) => (
  <div className="bg-white border border-[#dee2e6] rounded-xl p-6 flex items-center justify-between">
    <div className="flex items-center gap-4 md:gap-6">
      <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-[#F0FAFD] rounded-lg text-[#5dbed8]">
        {icon}
      </div>
      <h4 className="font-semibold text-sm text-[#212529] uppercase tracking-wide">{title}</h4>
    </div>
    <a
      href={href}
      className="flex-shrink-0 bg-[#00d876] text-white font-semibold text-sm leading-none rounded-full px-5 py-2.5 transition-transform hover:scale-105"
    >
      Go
    </a>
  </div>
);

const LocationCard = () => (
    <div className="bg-white border border-[#dee2e6] rounded-xl p-6 h-full">
        <div className="flex items-center gap-4 mb-6">
            <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-[#F0FAFD] rounded-lg text-[#5dbed8]">
                <MapPin size={40} />
            </div>
            <h4 className="font-semibold text-base text-[#212529] uppercase tracking-wide">Location</h4>
        </div>
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <span className="text-sm text-[#6c757d]">Country:</span>
                <div className="flex items-center gap-2">
                    <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6563a65a-703b-4701-b362-471ce191f991-whoer-net/assets/svgs/us-1.svg" alt="US Flag" width={20} height={20} className="rounded-full" />
                    <span className="font-medium text-base text-[#212529]">United States (US)</span>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-sm text-[#6c757d]">Region:</span>
                <span className="font-medium text-base text-[#212529]">Washington</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-sm text-[#6c757d]">City:</span>
                <span className="font-medium text-base text-[#212529]">Renton</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-sm text-[#6c757d]">ZIP:</span>
                <span className="font-medium text-base text-[#212529]">98055</span>
            </div>
            <div>
                 <span className="text-sm text-[#6c757d]">Hostname:</span>
                <p className="font-medium text-base text-[#212529] break-words mt-1">c-73-109-232-35.hsd1.wa.comcast.net</p>
            </div>
        </div>
    </div>
);

const IpDetailsTabs = () => {
  const [activeTab, setActiveTab] = useState("details");

  const tabs = [
    { id: "details", label: "IP Address Details" },
    { id: "extended", label: "Extended version" },
    { id: "fingerprint", label: "Browser fingerprint" },
  ];

  return (
    <section className="bg-white pt-8 pb-16">
      <div className="container">
        <div className="border-b border-[#dee2e6]">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap pb-4 pt-1 px-1 border-b-2 font-medium text-base md:text-lg
                  ${
                    activeTab === tab.id
                      ? "border-[#5dbed8] text-[#212529]"
                      : "border-transparent text-[#6c757d] hover:text-[#212529] hover:border-gray-300"
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-8">
          {activeTab === "details" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <ToolCard 
                  icon={<Shield size={40} />}
                  title="DNS leak test"
                  href="/dns-leak-test"
                />
                <ToolCard 
                  icon={<Scan size={40} />}
                  title="Port scanner"
                  href="/port-scanner-online"
                />
                 <ToolCard 
                  icon={<Cookie size={40} />}
                  title="Evercookie test"
                  href="#"
                />
              </div>
              <div className="lg:col-span-1">
                  <LocationCard />
              </div>
            </div>
          )}
          {activeTab === 'extended' && <div className="py-24 text-center text-lg text-[#6c757d]">Extended version content will be displayed here.</div>}
          {activeTab === 'fingerprint' && <div className="py-24 text-center text-lg text-[#6c757d]">Browser fingerprint content will be displayed here.</div>}
        </div>
      </div>
    </section>
  );
};

export default IpDetailsTabs;