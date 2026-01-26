"use client";
import React, { useEffect, useRef, useState } from "react";
import { CheckIcon, SparklesIcon } from "@heroicons/react/24/outline";

const PricingSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const classAFeatures = [
    "Student & Staff Management",
    "Fee Collection & Invoicing",
    "Basic Reports & Analytics",
    "SMS Notifications",
    "Email Support",
  ];

  const classBFeatures = [
    "Everything in Class A",
    "Exam Analysis & Grading",
    "E-Learning Platform",
    "Parent Mobile App",
    "Timetabling & Scheduling",
    "Library Management",
    "Priority Email Support",
  ];

  const classCFeatures = [
    "Everything in Class B",
    "Advanced HR/Payroll System",
    "Inventory Management",
    "Custom Reports & Dashboards",
    "API Access & Integrations",
    "Multi-Campus Support",
    "Dedicated Account Manager",
    "Phone & WhatsApp Support",
    "On-site Training",
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
    <div id="pricing" ref={sectionRef} className="bg-gray-900">
      <div className="px-6 pt-12 lg:px-8 lg:pt-20">
        <div
          className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
        >
          <div className="inline-block px-4 py-2 bg-[#39e114] bg-opacity-10 rounded-full border border-[#39e114] border-opacity-20 mb-6">
            <span className="text-[#39e114] text-sm font-semibold">
              FLEXIBLE PRICING
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            The Right Plan for Your School
          </h2>
          <p className="mx-auto mt-3 max-w-4xl text-xl text-gray-300 sm:mt-5 sm:text-2xl">
            Choose a plan based on your school's fee structure. All plans
            include setup, training, and VAT.
          </p>
        </div>
      </div>

      <div className="mt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
        <div className="relative z-0">
          <div className="absolute inset-0 h-5/6 bg-gray-900 lg:h-2/3" />
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative lg:grid lg:grid-cols-7">
              {/* Class A Plan */}
              <div
                className={`mx-auto max-w-md lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:mx-0 lg:max-w-none transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <div className="flex h-full flex-col overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-l-lg">
                  <div className="flex flex-1 flex-col">
                    <div className="bg-white px-6 py-10">
                      <div>
                        <h3
                          className="text-center text-2xl font-medium text-gray-900"
                          id="tier-class-a"
                        >
                          Class A
                        </h3>
                        <p className="text-center text-sm text-gray-500 mt-2">
                          Schools with fees below KES 5,000
                        </p>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="flex items-start px-3 text-6xl tracking-tight text-gray-900">
                            <span className="mt-2 mr-2 text-4xl font-medium tracking-tight">
                              KES
                            </span>
                            <span className="font-bold">29,000</span>
                          </span>
                          <span className="text-xl font-medium text-gray-500">
                            /year
                          </span>
                        </div>
                        <p className="text-center text-sm text-gray-500 mt-2">
                          or KES 9,667 per term
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-between border-t-2 border-gray-100 bg-gray-50 p-6 sm:p-10 lg:p-6 xl:p-10">
                      <ul role="list" className="space-y-4">
                        {classAFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon
                                className="h-6 w-6 flex-shrink-0 text-[#39e114]"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <div className="rounded-lg shadow-md">
                          <a
                            href="#"
                            className="block w-full rounded-lg border border-transparent bg-white px-6 py-3 text-center text-base font-medium text-[#39e114] hover:bg-gray-50 transition-all duration-300"
                            aria-describedby="tier-class-a"
                          >
                            Get Started
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Class B Plan - Most Popular */}
              <div
                className={`mx-auto mt-10 max-w-lg lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4 lg:mx-0 lg:mt-0 lg:max-w-none transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <div className="relative z-10 rounded-lg shadow-xl">
                  <div
                    className="pointer-events-none absolute inset-0 rounded-lg border-2 border-[#39e114]"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 top-0 translate-y-px transform">
                    <div className="flex -translate-y-1/2 transform justify-center">
                      <span className="inline-flex items-center gap-2 rounded-full bg-[#39e114] px-4 py-1 text-base font-semibold text-white">
                        <SparklesIcon className="w-5 h-5" />
                        Most Popular
                      </span>
                    </div>
                  </div>
                  <div className="rounded-t-lg bg-white px-6 pt-12 pb-10">
                    <div>
                      <h3
                        className="text-center text-3xl font-semibold tracking-tight text-gray-900 sm:-mx-6"
                        id="tier-class-b"
                      >
                        Class B
                      </h3>
                      <p className="text-center text-sm text-gray-500 mt-2">
                        Schools with fees KES 5,000 - 10,000
                      </p>
                      <div className="mt-4 flex items-center justify-center">
                        <span className="flex items-start px-3 text-6xl tracking-tight text-gray-900 sm:text-6xl">
                          <span className="mt-2 mr-2 text-4xl font-medium tracking-tight">
                            KES
                          </span>
                          <span className="font-bold">35,960</span>
                        </span>
                        <span className="text-2xl font-medium text-gray-500">
                          /year
                        </span>
                      </div>
                      <p className="text-center text-sm text-gray-500 mt-2">
                        or KES 11,987 per term
                      </p>
                    </div>
                  </div>
                  <div className="rounded-b-lg border-t-2 border-gray-100 bg-gray-50 px-6 pt-10 pb-8 sm:px-10 sm:py-10">
                    <ul role="list" className="space-y-4">
                      {classBFeatures.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon
                              className="h-6 w-6 flex-shrink-0 text-[#39e114]"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-10">
                      <div className="rounded-lg shadow-md">
                        <a
                          href="#"
                          className="block w-full rounded-lg border border-transparent bg-[#39e114] px-6 py-4 text-center text-xl font-medium leading-6 text-white hover:bg-emerald-600 transition-all duration-300"
                          aria-describedby="tier-class-b"
                        >
                          Get Started
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Class C Plan */}
              <div
                className={`mx-auto mt-10 max-w-md lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3 lg:m-0 lg:max-w-none transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <div className="flex h-full flex-col overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-r-lg">
                  <div className="flex flex-1 flex-col">
                    <div className="bg-white px-6 py-10">
                      <div>
                        <h3
                          className="text-center text-2xl font-medium text-gray-900"
                          id="tier-class-c"
                        >
                          Class C
                        </h3>
                        <p className="text-center text-sm text-gray-500 mt-2">
                          Schools with fees above KES 10,000
                        </p>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="flex items-start px-3 text-6xl tracking-tight text-gray-900">
                            <span className="mt-2 mr-2 text-4xl font-medium tracking-tight">
                              KES
                            </span>
                            <span className="font-bold">42,920</span>
                          </span>
                          <span className="text-xl font-medium text-gray-500">
                            /year
                          </span>
                        </div>
                        <p className="text-center text-sm text-gray-500 mt-2">
                          or KES 14,307 per term
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-between border-t-2 border-gray-100 bg-gray-50 p-6 sm:p-10 lg:p-6 xl:p-10">
                      <ul role="list" className="space-y-4">
                        {classCFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon
                                className="h-6 w-6 flex-shrink-0 text-[#39e114]"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <div className="rounded-lg shadow-md">
                          <a
                            href="#"
                            className="block w-full rounded-lg border border-transparent bg-white px-6 py-3 text-center text-base font-medium text-[#39e114] hover:bg-gray-50 transition-all duration-300"
                            aria-describedby="tier-class-c"
                          >
                            Get Started
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="px-6 pb-12 lg:px-8 lg:pb-20">
        <div
          className={`mx-auto max-w-4xl text-center transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-gray-400 text-sm">
            All prices include KES 7,000 one-time setup fee and 16% VAT. Annual
            payment saves you money compared to term-by-term payment.
            <span className="block mt-2 text-[#39e114]">
              Need a custom solution? Contact us for enterprise pricing.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
