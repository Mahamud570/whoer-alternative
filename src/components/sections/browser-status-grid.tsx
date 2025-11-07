import {
  RadioTower,
  FileCode,
  ZapOff,
  XCircle,
  Coffee,
  Cookie,
} from "lucide-react";
import React from "react";

type StatusItem = {
  name: string;
  status: "Enabled" | "Disabled";
  IconComponent: React.ComponentType<{ className?: string; strokeWidth?: number }>;
};

const statusData: StatusItem[] = [
  { name: "WebRTC", status: "Enabled", IconComponent: RadioTower },
  { name: "JavaScript", status: "Enabled", IconComponent: FileCode },
  { name: "Flash", status: "Disabled", IconComponent: ZapOff },
  { name: "ActiveX", status: "Disabled", IconComponent: XCircle },
  { name: "Java", status: "Disabled", IconComponent: Coffee },
  { name: "cookies", status: "Enabled", IconComponent: Cookie },
];

const StatusIndicator = ({ status }: { status: "Enabled" | "Disabled" }) => (
  <div className="flex items-center gap-2">
    <span
      className={`h-2 w-2 shrink-0 rounded-full ${
        status === "Enabled" ? "bg-[#00cc88]" : "bg-[#ff5555]"
      }`}
      aria-hidden="true"
    />
    <span className="text-base text-text-primary">{status}</span>
  </div>
);

const BrowserStatusGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {statusData.map(({ name, status, IconComponent }) => (
        <div
          key={name}
          className="relative flex items-start gap-4 rounded-xl border border-border bg-white p-5 transition-all duration-300 hover:border-ring hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
        >
          <div className="flex-shrink-0">
            <IconComponent
              className="h-12 w-12 text-[#5dbed8]"
              strokeWidth={1.2}
              aria-hidden="true"
            />
          </div>
          <div className="flex flex-col gap-1 pt-1">
            <h4 className="text-lg font-semibold capitalize text-text-primary">
              {name}
            </h4>
            <StatusIndicator status={status} />
          </div>
          <div className="absolute top-3 right-3 h-5 w-5 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BrowserStatusGrid;