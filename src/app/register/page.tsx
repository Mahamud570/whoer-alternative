"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Shield, Mail, Lock, User, AlertCircle, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await authClient.signUp.email({
        email,
        name,
        password
      });

      if (error?.code) {
        const errorMap: Record<string, string> = {
          USER_ALREADY_EXISTS: "Email already registered. Please use a different email or sign in.",
          INVALID_EMAIL: "Please enter a valid email address",
          WEAK_PASSWORD: "Password is too weak. Please use a stronger password"
        };
        toast.error(errorMap[error.code] || "Registration failed. Please try again.");
        setIsLoading(false);
        return;
      }

      toast.success("Account created successfully! Redirecting to login...");
      setTimeout(() => {
        router.push("/login?registered=true");
      }, 1500);
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
            Create Account
          </h1>
          <p className="text-center text-[--color-text-secondary] mb-8">
            Join IP Checker to access premium features
          </p>

          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[--color-text-primary] mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[--color-text-muted]" />
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-[--color-border] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5DBED8] focus:border-transparent transition-all"
                  placeholder="John Doe"
                  autoComplete="name"
                />
              </div>
            </div>

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
                  minLength={8}
                  className="w-full pl-10 pr-4 py-3 border border-[--color-border] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5DBED8] focus:border-transparent transition-all"
                  placeholder="••••••••"
                  autoComplete="off"
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-[--color-text-primary] mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[--color-text-muted]" />
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  minLength={8}
                  className="w-full pl-10 pr-4 py-3 border border-[--color-border] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5DBED8] focus:border-transparent transition-all"
                  placeholder="••••••••"
                  autoComplete="off"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#FF5555] text-white py-3 rounded-full font-semibold hover:bg-[#FF4545] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <div className="mt-6 p-4 bg-[#E8F8F5] border border-[#A3E4D7] rounded-lg flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-[#00d876] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-[--color-text-secondary]">
              Already have an account?{" "}
              <a href="/login" className="text-[#5DBED8] font-semibold hover:underline">
                Sign in here
              </a>
            </p>
          </div>
        </div>

        <p className="text-center text-white/80 text-sm mt-6">
          By creating an account, you agree to our Terms of Service
        </p>
      </div>
    </div>
  );
}
