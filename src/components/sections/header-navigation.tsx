"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Shield, LogOut, User } from "lucide-react";
import { authClient, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Logo = () => (
  <a href="/" className="flex items-center gap-2.5 group">
    <div className="bg-gradient-to-br from-[#00d876] to-[#00b865] p-2 rounded-lg group-hover:from-[#00e882] group-hover:to-[#00c870] transition-all shadow-lg">
      <Shield className="w-5 h-5 text-white" />
    </div>
    <span className="text-white text-xl font-bold tracking-tight">
      SecureTrace
    </span>
  </a>
);

export default function HeaderNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const { data: session, isPending, refetch } = useSession();
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSignOut = async () => {
    const { error } = await authClient.signOut();
    if (error?.code) {
      toast.error(error.code);
    } else {
      localStorage.removeItem("bearer_token");
      refetch();
      router.push("/");
      toast.success("Signed out successfully");
    }
  };

  const desktopNavItems = [
    { name: "My IP", href: "/", active: true },
  ];

  const servicesItems = [
    { name: "Speed test", href: "/speedtest" },
    { name: "Ping", href: "/ping" },
    { name: "Whois", href: "/checkwhois" },
    { name: "DNS leak test", href: "/dns-leak-test" },
    { name: "Port scanner", href: "/port-scanner-online" },
  ];

  const toolsItem = { name: "Tools", href: "/best-anonymity-tools?category=all" };

  const mobileNavItems = [
    { name: "My IP", href: "/" },
    { name: "Tools", href: "/best-anonymity-tools?category=all" },
    { name: "Speed test", href: "/speedtest" },
    { name: "Ping", href: "/ping" },
    { name: "Whois", href: "/checkwhois" },
    { name: "DNS leak test", href: "/dns-leak-test" },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleServicesMenu = () => setIsServicesOpen(!isServicesOpen);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 font-primary bg-[--color-dark-teal] shadow-md">
        <div className="mx-auto flex h-[70px] max-w-[1440px] items-center justify-between px-8">
          <Logo />

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center">
              <ul className="flex items-center space-x-8 text-white">
                {desktopNavItems.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className={`text-[15px] font-medium transition-colors hover:text-gray-300 ${item.active ? 'opacity-100' : 'opacity-90'}`}>
                      {item.name}
                    </a>
                  </li>
                ))}

                <li ref={servicesRef} className="relative">
                  <button onClick={toggleServicesMenu} className="flex items-center text-[15px] font-medium opacity-90 transition-colors hover:text-gray-300">
                    Services
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isServicesOpen && (
                    <div className="absolute top-full mt-3 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                      <ul className="py-1">
                        {servicesItems.map((item) => (
                          <li key={item.name}>
                            <a href={item.href} className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
                <li>
                  <a href={toolsItem.href} className="text-[15px] font-medium opacity-90 transition-colors hover:text-gray-300">
                    {toolsItem.name}
                  </a>
                </li>
              </ul>
            </nav>

            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-3">
              {!isPending && !session?.user ? (
                <>
                  <a
                    href="/login"
                    className="text-white text-[15px] font-medium hover:text-gray-300 transition-colors px-4 py-2"
                  >
                    Sign In
                  </a>
                  <a
                    href="/register"
                    className="bg-[#FF5555] text-white px-5 py-2 rounded-full text-[15px] font-semibold hover:bg-[#FF4545] transition-all shadow-lg hover:shadow-xl"
                  >
                    Get Started
                  </a>
                </>
              ) : session?.user ? (
                <div ref={userMenuRef} className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all"
                  >
                    <div className="w-8 h-8 bg-[#00d876] rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white text-[15px] font-medium">{session.user.name}</span>
                    <ChevronDown className={`w-4 h-4 text-white transition-transform ${isUserMenuOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isUserMenuOpen && (
                    <div className="absolute right-0 top-full mt-3 w-56 origin-top-right rounded-lg bg-white shadow-xl ring-1 ring-black ring-opacity-5">
                      <div className="p-3 border-b border-gray-100">
                        <p className="text-sm font-semibold text-gray-900">{session.user.name}</p>
                        <p className="text-xs text-gray-500 truncate">{session.user.email}</p>
                      </div>
                      <ul className="py-1">
                        <li>
                          <button
                            onClick={handleSignOut}
                            className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                          >
                            <LogOut className="w-4 h-4" />
                            Sign Out
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : null}
            </div>

            <button onClick={toggleMobileMenu} className="text-white md:hidden ml-4">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-[60] md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'visible' : 'invisible'}`}>
        <div onClick={toggleMobileMenu} className={`absolute inset-0 bg-black/30 transition-opacity ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} />
        <div className={`absolute top-0 right-0 h-full w-[300px] bg-[--color-dark-teal] p-6 text-white shadow-xl transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-end">
            <button onClick={toggleMobileMenu}>
              <X size={24} />
            </button>
          </div>

          {/* Auth Section - Mobile */}
          {!isPending && !session?.user ? (
            <div className="mt-6 space-y-3 pb-6 border-b border-white/20">
              <a
                href="/login"
                className="block w-full text-center bg-white/10 hover:bg-white/20 px-4 py-3 rounded-lg font-medium transition-all"
              >
                Sign In
              </a>
              <a
                href="/register"
                className="block w-full text-center bg-[#FF5555] hover:bg-[#FF4545] px-4 py-3 rounded-lg font-semibold transition-all"
              >
                Get Started
              </a>
            </div>
          ) : session?.user ? (
            <div className="mt-6 pb-6 border-b border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#00d876] rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{session.user.name}</p>
                  <p className="text-xs text-white/70 truncate">{session.user.email}</p>
                </div>
              </div>
              <button
                onClick={handleSignOut}
                className="w-full flex items-center justify-center gap-2 bg-red-500/20 hover:bg-red-500/30 px-4 py-3 rounded-lg font-medium transition-all"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          ) : null}

          <ul className="mt-8 flex flex-col space-y-6">
            {mobileNavItems.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="text-lg font-medium hover:text-gray-300">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}