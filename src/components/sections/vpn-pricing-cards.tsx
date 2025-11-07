import { ExternalLink } from 'lucide-react';

interface PricingCardProps {
  plan: string;
  price: string;
  save: string;
  billing: string;
  isFeatured?: boolean;
}

const PricingCard = ({ plan, price, save, billing, isFeatured = false }: PricingCardProps) => {
  const headerBg = isFeatured ? 'bg-[#ff5555]' : 'bg-[#29a4a3]';
  const cardClasses = `bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col text-center ${
    isFeatured ? 'lg:scale-105 z-10 shadow-[0_8px_24px_rgba(0,0,0,0.1)]' : 'z-0'
  }`;

  return (
    <div className={cardClasses}>
      <div className={`${headerBg} text-white py-4`}>
        <h3 className="font-bold text-lg">{plan}</h3>
      </div>
      <div className="p-8 flex flex-col items-center flex-grow">
        <p className="flex items-baseline justify-center text-[#212529] mb-2">
          <span className="text-3xl font-medium">$</span>
          <span className="text-5xl font-bold ml-1">{price}</span>
          <span className="text-xl text-[#6c757d] font-normal">/month</span>
        </p>
        <p className="text-[#6c757d] text-base mb-6">{save}</p>
        <a
          href="#"
          className="bg-[#ff8833] text-white font-semibold h-12 w-full max-w-[200px] rounded-full text-lg flex items-center justify-center gap-2 hover:bg-[#e67a2e] transition-colors"
        >
          Get Started
          <ExternalLink size={18} />
        </a>
        <p className="text-[#6c757d] text-sm mt-auto pt-6">{billing}</p>
      </div>
    </div>
  );
};

export default function VpnPricingCards() {
  return (
    <section className="bg-[#EDF8FC] py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[32px] md:text-[40px] font-bold text-[#212529] text-center max-w-3xl mx-auto mb-16 leading-tight">
          Premium Privacy Protection Plans
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          <PricingCard
            plan="1 month"
            price="9.90"
            save="0% save"
            billing="$9.90 every month"
          />
          <PricingCard
            plan="1 year"
            price="2.49"
            save="75% save"
            billing="$29.90 every 12 months"
            isFeatured={true}
          />
          <PricingCard
            plan="2 year"
            price="2.08"
            save="79% save"
            billing="$49.90 every 24 months"
          />
        </div>
      </div>
    </section>
  );
}