import HeaderNavigation from "@/components/sections/header-navigation";
import HeroIpDisplay from "@/components/sections/hero-ip-display";
import SecurityStatusGrid from "@/components/sections/security-status-grid";
import VpnPricingCards from "@/components/sections/vpn-pricing-cards";
import IpDetailsTabs from "@/components/sections/ip-details-tabs";
import BrowserStatusGrid from "@/components/sections/browser-status-grid";
import AdditionalInfoCards from "@/components/sections/additional-info-cards";
import ProxyPromoBanner from "@/components/sections/proxy-promo-banner";
import InfoContent from "@/components/sections/info-content";
import FaqSection from "@/components/sections/faq-section";
import Footer from "@/components/sections/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNavigation />
      
      <main className="pt-[70px]">
        <HeroIpDisplay />
        
        <section className="container py-8 md:py-10">
          <SecurityStatusGrid />
        </section>

        <VpnPricingCards />

        <section className="container py-8 md:py-10">
          <IpDetailsTabs />
        </section>

        <section className="container pb-8 md:pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <BrowserStatusGrid />
            </div>
            <div className="lg:col-span-1">
              <AdditionalInfoCards />
            </div>
          </div>
        </section>

        <ProxyPromoBanner />
        
        <InfoContent />
        
        <FaqSection />
      </main>

      <Footer />
    </div>
  );
}