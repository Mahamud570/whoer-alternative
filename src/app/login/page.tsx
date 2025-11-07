"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Shield, Mail, Lock, AlertCircle } from "lucide-react";
import { toast } from "sonner";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await authClient.signIn.email({
        email,
        password,
        rememberMe,
        callbackURL: "/"
      });

      if (error?.code) {
        toast.error("Invalid email or password. Please make sure you have already registered an account and try again.");
        setIsLoading(false);
        return;
      }

      toast.success("Login successful!");
      router.push("/");
    } catch (err) {
      toast.error("An error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4A9FB8] to-[#1B5161] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-[#00d876] p-3 rounded-xl">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-center text-[--color-text-primary] mb-2">
            Welcome Back
          </h1>
          <p className="text-center text-[--color-text-secondary] mb-8">
            Sign in to your IP Checker account
          </p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[--color-text-primary] mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[--color-text-muted]" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-[--color-border] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5DBED8] focus:border-transparent transition-all"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[--color-text-primary] mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[--color-text-muted]" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-[--color-border] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5DBED8] focus:border-transparent transition-all"
                  placeholder="••••••••"
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-[#5DBED8] border-[--color-border] rounded focus:ring-2 focus:ring-[#5DBED8]"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-[--color-text-secondary]">
                Remember me for 30 days
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#FF5555] text-white py-3 rounded-full font-semibold hover:bg-[#FF4545] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="mt-6 p-4 bg-[#FFF9E6] border border-[#FFE8A3] rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#FF9955] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-[--color-text-secondary]">
              Don't have an account yet?{" "}
              <a href="/register" className="text-[#5DBED8] font-semibold hover:underline">
                Create one here
              </a>
            </p>
          </div>
        </div>

        <p className="text-center text-white/80 text-sm mt-6">
          Protected by industry-standard encryption
        </p>
      </div>
    </div>
  );
}
