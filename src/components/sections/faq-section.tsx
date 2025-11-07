import Link from 'next/link';
import React from 'react';

const faqData = [
  {
    question: "How to see What is my IP?",
    answer: (
      <>
        Open this page - we show your IP, country, ISP, and ASN. It's an instant free IP lookup with your IP address at the top.
      </>
    ),
  },
  {
    question: "How to run a VPN check?",
    answer: (
      <>
        Use the <a href="#" className="text-link-blue hover:underline">VPN check</a> block - we compare network and browser signals for inconsistencies and tunneling signs that could reveal your real IP address.
      </>
    ),
  },
  {
    question: "How to test proxy/SOCKS5?",
    answer: "Start the proxy checker to analyze headers, check ports (8080/3128/1080), and detect tunneling patterns, including SOCKS5, that may affect how your IP address is seen.",
  },
  {
    question: "What is a browser fingerprint?",
    answer: "A set of device/browser attributes. The browser fingerprint checker highlights identification risks tied to your setup, alongside signals related to your IP address.",
  },
  {
    question: "Why do DNS/WebRTC leak tests matter?",
    answer: (
      <>
        They ensure your real IP address and DNS resolver don't leak outside a VPN/proxy. Use <Link href="/dns-leak-test" className="text-link-blue hover:underline">DNS leak test</Link> and <a href="#" className="text-link-blue hover:underline">WebRTC leak test</a> (plus IPv6 leak checks) for peace of mind.
      </>
    ),
  },
];

const FaqSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[900px] px-6">
        <h2 className="mb-12 text-center text-[40px] font-bold leading-tight text-text-primary">
          FAQ
        </h2>
        <div className="space-y-8">
          {faqData.map((item, index) => (
            <div key={index}>
              <h4 className="mb-4 text-xl font-semibold text-text-primary">
                {item.question}
              </h4>
              <p className="text-base leading-relaxed text-text-secondary">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;