import {
  Server,
  Network,
  Monitor,
  Chrome,
  ShieldOff,
  UserX,
  FileX,
  ShieldCheck,
  Flag,
  Laptop,
  Sparkles,
  Lock } from
"lucide-react";
import React from "react";

// Helper component for values with a leading green dot
const GreenDotValue: React.FC<{children: React.ReactNode;}> = ({ children }) =>
<div className="flex items-center gap-2">
    <span className="w-2 h-2 bg-[#00d876] rounded-full flex-shrink-0"></span>
    <span className="text-white">{children}</span>
  </div>;


// Interface for the reusable item component
interface SecurityStatusItemProps {
  icon: React.ElementType<{className?: string;}>;
  label: string;
  value: React.ReactNode;
  action?: {
    text: string;
    href: string;
    underline?: boolean;
  };
}

const SecurityStatusItem: React.FC<SecurityStatusItemProps> = ({ icon: Icon, label, value, action }) => {
  return (
    <div className="bg-[#1f5869]/50 backdrop-blur-sm p-3.5 rounded-lg flex items-center gap-3 border border-white/5 hover:bg-[#1f5869]/70 transition-all">
      <Icon className="w-7 h-7 text-[#5dbed8] flex-shrink-0" />
      <div className="flex-grow min-w-0">
        <p className="text-xs text-[#a8d5e5]/80">{label}</p>
        <div className="text-sm md:text-base font-medium text-white">{value}</div>
      </div>
      {action &&
      <a
        href={action.href}
        className={`ml-auto text-xs font-semibold text-[#00d876] hover:text-[#00e882] transition-colors flex-shrink-0 ${action.underline ? 'underline decoration-dotted' : ''}`}>

          {action.text}
        </a>
      }
    </div>);

};

const SecurityStatusGrid = () => {
  return (
    <div className="bg-gradient-to-br from-[#1b5161] to-[#1a4a58] rounded-2xl p-4 md:p-6 text-white w-full shadow-xl border border-white/10">
      <div className="flex justify-between items-center mb-5 px-1">
        <h2 className="text-lg md:text-xl font-bold">Connection Details</h2>
        <div className="relative w-11 h-6 bg-gray-600/50 rounded-full cursor-pointer border border-white/10">
          <div className="absolute left-1 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 mb-4">
        <SecurityStatusItem
          icon={Server}
          label="ISP:"
          value="Comcast Cable"
          action={{ text: "Hide", href: "#" }} />

        <SecurityStatusItem
          icon={Chrome}
          label="Browser:"
          value="Chrome 139.0"
          action={{ text: "Hide", href: "#" }} />

        <SecurityStatusItem
          icon={Network}
          label="DNS"
          value={
          <div className="flex items-center gap-x-2 gap-y-1 flex-wrap text-xs sm:text-sm font-normal">
              <Flag className="w-4 h-4 flex-shrink-0" />
              <span>162.150.206.137</span>
              <span className="text-xs text-[#a8d5e5]/70">United States</span>
            </div>
          } />

        <SecurityStatusItem
          icon={ShieldOff}
          label="Proxy:"
          value={<GreenDotValue>No</GreenDotValue>}
          action={{ text: "Get proxy", href: "#", underline: true }} />

        <SecurityStatusItem
          icon={Monitor}
          label="Hostname:"
          value={
          <span className="truncate block font-normal text-xs sm:text-sm">
              c-73-109-232-35.hsd1.wa.comcast...
            </span>
          } />

        <SecurityStatusItem
          icon={UserX}
          label="Anonymizer:"
          value={<GreenDotValue>No</GreenDotValue>} />

        <SecurityStatusItem
          icon={Laptop}
          label="OS:"
          value="Linux" />

        <SecurityStatusItem
          icon={FileX}
          label="Blacklist:"
          value={<GreenDotValue>No</GreenDotValue>} />

      </div>

      {/* Security Score Bar - Clean Design matching reference */}
      <div className="relative overflow-hidden rounded-xl bg-[#00d876] p-4">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0">
            <div className="bg-white/20 p-2 rounded-full">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <div className="flex-grow">
            <p className="text-base font-semibold text-white">
              Your disguise: <span className="font-bold">100%</span> Your anonymity measures are safe or you don't use them
            </p>
          </div>
        </div>
      </div>
    </div>);

};

export default SecurityStatusGrid;