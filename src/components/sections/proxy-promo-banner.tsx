import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const features = [
  "High uptime (99%)",
  "Unlimited traffic",
  "Huge pool of IP addresses",
  "Flexible IP rotation system",
  "Automated testing and management",
  "Full compatibility with modern browsers",
];

const ProxyPromoBanner = () => {
  return (
    <section className="bg-gradient-to-r from-[#4A9FB8] to-[#5DBED8] text-white py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left Side: Content */}
          <div className="lg:w-[55%] xl:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-[40px] font-bold leading-tight mb-8">
              Enterprise Proxy Solutions
            </h2>
            <ul className="space-y-4 mb-10 text-base md:text-lg max-w-lg mx-auto lg:mx-0">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start md:items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-white mt-1 md:mt-0 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold h-12 px-10 rounded-full text-base hover:bg-red-600 transition-all duration-300 shadow-lg hover:-translate-y-0.5 transform"
            >
              Learn More
            </a>
          </div>

          {/* Right Side: Image */}
          <div className="lg:w-[45%] xl:w-1/2 flex justify-center lg:justify-end">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6563a65a-703b-4701-b362-471ce191f991-whoer-net/assets/images/proxy-4.png"
              alt="Illustration of servers and network infrastructure"
              width={540}
              height={420}
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProxyPromoBanner;