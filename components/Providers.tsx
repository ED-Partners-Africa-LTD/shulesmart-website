"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  CheckBadgeIcon,
  CreditCardIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const PaymentProvidersSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const providers = [
    {
      name: "M-PESA",
      logo: "MPESA",
      description: "Kenya's leading mobile money service",
      color: "from-green-600 to-emerald-600",
    },
    {
      name: "Equity Bank",
      logo: "EQUITY",
      description: "Seamless bank integration",
      color: "from-red-600 to-rose-600",
    },
    {
      name: "Co-operative Bank",
      logo: "CO-OP",
      description: "Trusted banking partner",
      color: "from-orange-500 to-amber-600",
    },
    {
      name: "KCB Bank",
      logo: "KCB",
      description: "Kenya's premier bank",
      color: "from-blue-600 to-indigo-600",
    },
    {
      name: "NCBA Bank",
      logo: "NCBA",
      description: "Modern banking solutions",
      color: "from-emerald-600 to-teal-600",
    },
    {
      name: "DTB Bank",
      logo: "DTB",
      description: "Diamond Trust Bank integration",
      color: "from-cyan-600 to-blue-600",
    },
    {
      name: "Airtel Money",
      logo: "AIRTEL",
      description: "Mobile money convenience",
      color: "from-red-500 to-rose-500",
    },
    {
      name: "PayPal",
      logo: "PayPal",
      description: "International payments",
      color: "from-blue-500 to-sky-600",
    },
  ];

  const features = [
    {
      icon: ShieldCheckIcon,
      title: "Secure Transactions",
      description: "Bank-grade encryption",
    },
    {
      icon: CheckBadgeIcon,
      title: "Instant Verification",
      description: "Real-time payment confirmation",
    },
    {
      icon: CreditCardIcon,
      title: "Multiple Options",
      description: "Choose your preferred method",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="integrations"
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#39e114] opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500 opacity-5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
        >
          <div className="inline-block px-4 py-2 bg-[#39e114] bg-opacity-10 rounded-full border border-[#39e114] border-opacity-20 mb-6">
            <span className="text-[#39e114] text-sm font-semibold">
              TRUSTED BY THOUSANDS
            </span>
          </div>

          <h2 className="text-5xl font-bold mb-4 text-white">
            Integrated Payment Solutions
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-[#39e114] to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Accept payments from all major banks and mobile money providers in
            Kenya and beyond
          </p>
        </div>

        {/* Payment Providers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {providers.map((provider, index) => (
            <ProviderCard
              key={index}
              provider={provider}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Features */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
            <ShieldCheckIcon className="w-5 h-5 text-[#39e114]" />
            <span>PCI DSS Compliant • SSL Encrypted • 99.9% Uptime</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProviderCard = ({ provider, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative group transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${index * 80}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-gradient-to-br from-gray-800 to-slate-800 rounded-2xl p-8 h-full border border-gray-700 hover:border-[#39e114] transition-all duration-500 overflow-hidden group-hover:shadow-2xl group-hover:shadow-[#39e114]/20">
        {/* Glow effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${provider.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        ></div>

        {/* Shimmer effect */}
        <div
          className={`absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent ${isHovered ? "" : "hidden"}`}
        ></div>

        {/* Logo */}
        <div className="relative mb-4">
          <div
            className={`text-3xl font-bold bg-gradient-to-br ${provider.color} bg-clip-text text-transparent transform transition-all duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
          >
            {provider.logo}
          </div>
        </div>

        {/* Name */}
        <h3 className="text-lg font-semibold text-white mb-2 transition-colors duration-300">
          {provider.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-400">{provider.description}</p>

        {/* Status indicator */}
        <div className="mt-4 flex items-center gap-2">
          <div className="w-2 h-2 bg-[#39e114] rounded-full animate-pulse"></div>
          <span className="text-xs text-[#39e114]">Active</span>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-[#39e114] opacity-5 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500"></div>
      </div>
    </div>
  );
};

const FeatureCard = ({ feature, index }) => {
  const Icon = feature.icon;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-gradient-to-br from-gray-800/50 to-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-[#39e114]/50 transition-all duration-500">
        {/* Icon */}
        <div className="mb-4">
          <div
            className={`w-12 h-12 rounded-lg bg-gradient-to-br from-[#39e114]/20 to-emerald-600/20 flex items-center justify-center transform transition-all duration-500 ${isHovered ? "scale-110 rotate-6" : "scale-100 rotate-0"}`}
          >
            <Icon className="w-6 h-6 text-[#39e114]" />
          </div>
        </div>

        {/* Content */}
        <h4 className="text-lg font-semibold text-white mb-2">
          {feature.title}
        </h4>
        <p className="text-sm text-gray-400">{feature.description}</p>

        {/* Glow effect */}
        <div
          className={`absolute inset-0 bg-[#39e114] opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-500`}
        ></div>
      </div>
    </div>
  );
};

export default PaymentProvidersSection;
