import React from 'react';

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start">
    <span className="mt-[9px] mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-[#5dbed8]"></span>
    <span className="leading-relaxed">{children}</span>
  </li>
);

const InfoContent = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8">
        <div>
          <div>
            <h1 className="text-5xl font-bold text-[#4a9eb8] md:text-[56px]">IP CHECKER</h1>
            <h2 className="mt-8 text-2xl font-semibold text-zinc-800 md:text-3xl">
              What is my IP — free IP lookup
            </h2>
            <h3 className="mt-2 text-xl font-semibold text-zinc-800 md:text-2xl">
              VPN check, proxy checker, DNS/WebRTC leak test
            </h3>
            <p className="mt-8 text-base text-zinc-600 leading-relaxed md:text-lg">
              This is your one-stop What is my IP tool to check your IP address quickly and clearly. In a few seconds you get an instant IP address lookup, a clear <a href="#" className="text-[#5dbed8] hover:underline">VPN check</a>, a smart <a href="#" className="text-[#5dbed8] hover:underline">proxy checker</a> (HTTP/HTTPS/SOCKS5), plus privacy tools like <a href="#" className="text-[#5dbed8] hover:underline">DNS leak test</a> and <a href="#" className="text-[#5dbed8] hover:underline">WebRTC leak test</a>. There's also an IP blacklist check, a browser fingerprint checker, and a basic port scan - all in one place.
            </p>
          </div>

          <div className="mt-8 space-y-8 border-t border-gray-200 pt-8">
            <div>
              <h4 className="text-xl font-semibold text-zinc-800 md:text-2xl">
                IP Check (country, ISP, ASN)
              </h4>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                Open the page and see your public IP address, country/city, ISP, and ASN right away. If you just need to check IP address for support, gaming, or remote access, it's right at the top.
              </p>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                If needed, run an <a href="#" className="text-[#5dbed8] hover:underline">IP blacklist check</a> against popular lists and follow the step-by-step guidance to get delisted. It's a fast, free IP lookup that answers "what's my location by IP" without extra clicks.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-zinc-800 md:text-2xl">
                VPN check & Proxy checker (HTTP/HTTPS/SOCKS5)
              </h4>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                The <a href="#" className="text-[#5dbed8] hover:underline">VPN check</a> detects VPNs (including OpenVPN/WireGuard) and TOR. We compare your IP country with time zone/locale and look for tunneling signs - so you'll know whether your IP address session might look suspicious to websites.
              </p>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                The <a href="#" className="text-[#5dbed8] hover:underline">proxy checker</a> validates HTTP/HTTPS/SOCKS5: it inspects headers, scans common proxy ports (8080/3128/1080), and catches fingerprintable patterns. We also flag datacenter IP vs residential/mobile and do transparent proxy detection.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-zinc-800 md:text-2xl">
                DNS/WebRTC/IPv6 leak tests
              </h4>
              <ul className="mt-4 space-y-3 text-base text-zinc-600">
                <ListItem>
                  <a href="#" className="font-semibold text-[#5dbed8] hover:underline">DNS leak test:</a> compared your DNS resolver's country with your IP country to confirm queries stay inside the tunnel and don't expose your real IP address.
                </ListItem>
                <ListItem>
                  <a href="#" className="font-semibold text-[#5dbed8] hover:underline">WebRTC leak test:</a> spots ICE tasks that could reveal your real IP address in the browser.
                </ListItem>
                <ListItem>
                  <a href="#" className="font-semibold text-[#5dbed8] hover:underline">IPv6 leak check:</a> makes sure IPv6 traffic isn't slipping outside your VPN. you can launch these directly from My IP, DNS leak test, and WebRTC leak test.
                </ListItem>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-zinc-800 md:text-2xl">
                Browser fingerprint checker
              </h4>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                The <a href="#" className="text-[#5dbed8] hover:underline">browser fingerprint checker</a> shows User-Agent + Client Hints, HTTP headers, screen details, language/time zone signals, navigator/device fields, WebRTC/JavaScript status, and plugins. It's handy for multi-account browsers and general privacy hardening when your IP address changes or stays static.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-zinc-800 md:text-2xl">
                Internet speed test
              </h4>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                Run a quick <a href="#" className="text-[#5dbed8] hover:underline">internet speed test</a> (download/upload, ping). It doubles as a wifi speed test for checking your provider's real speeds at home or in the office.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoContent;