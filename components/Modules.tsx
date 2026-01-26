"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  AcademicCapIcon,
  UserGroupIcon,
  ClipboardDocumentListIcon,
  CurrencyDollarIcon,
  CalendarDaysIcon,
  BookOpenIcon,
  ChartBarIcon,
  BellAlertIcon,
  ArchiveBoxIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

interface Module {
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string;
      titleId?: string;
    } & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
  color: string;
  href: string;
}

const ModulesSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const modules = [
    {
      icon: ClipboardDocumentListIcon,
      title: "Admissions",
      description:
        "Streamline student enrollment, application processing, and admission workflows from inquiry to acceptance.",
      color: "from-emerald-400 to-green-500",
      href: "/modules/admissions",
    },
    {
      icon: UserGroupIcon,
      title: "Admin",
      description:
        "Centralized administrative control for student records, staff management, and institutional operations.",
      color: "from-green-400 to-emerald-600",
      href: "/modules/admin",
    },
    {
      icon: CurrencyDollarIcon,
      title: "Finance",
      description:
        "Complete financial management with fee collection, invoicing, expense tracking, and comprehensive reporting.",
      color: "from-teal-400 to-green-500",
      href: "/modules/finance",
    },
    {
      icon: ChartBarIcon,
      title: "Exam Analysis",
      description:
        "Powerful analytics for exam performance, grade distribution, trends, and detailed student assessment insights.",
      color: "from-emerald-500 to-green-600",
      href: "/modules/exam",
    },
    {
      icon: BellAlertIcon,
      title: "Communications",
      description:
        "Instant notifications, SMS, email, and announcements to keep parents, students, and staff connected.",
      color: "from-green-500 to-emerald-600",
      href: "/modules/communication",
    },
    {
      icon: AcademicCapIcon,
      title: "E-Learning",
      description:
        "Digital classroom with online assignments, resources, virtual classes, and interactive learning materials.",
      color: "from-emerald-400 to-teal-500",
      href: "/modules/elearning",
    },
    {
      icon: UserGroupIcon,
      title: "HR/Payroll",
      description:
        "Automated payroll processing, leave management, staff performance tracking, and HR workflows.",
      color: "from-green-400 to-emerald-500",
      href: "/modules/hr",
    },
    {
      icon: ClipboardDocumentListIcon,
      title: "Attendance",
      description:
        "Real-time attendance tracking for students and staff with automated reports and absence notifications.",
      color: "from-teal-500 to-green-500",
      href: "/modules/attendance",
    },
    {
      icon: CalendarDaysIcon,
      title: "Timetabling",
      description:
        "Intelligent timetable generation with conflict detection, resource optimization, and scheduling automation.",
      color: "from-emerald-400 to-green-500",
      href: "/modules/timetable",
    },
    {
      icon: BookOpenIcon,
      title: "Library",
      description:
        "Digital catalog, book tracking, checkouts, returns, and automated fine management system.",
      color: "from-green-500 to-emerald-600",
      href: "/modules/library",
    },
    {
      icon: ArchiveBoxIcon,
      title: "Inventory",
      description:
        "Track and manage school assets, supplies, equipment, and resources with stock alerts and reporting.",
      color: "from-teal-400 to-green-500",
      href: "/modules/inventory",
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
      id="modules"
      ref={sectionRef}
      className="min-h-screen bg-linear-to-br from-slate-50 via-gray-50 to-slate-100 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
        >
          <h2 className="text-5xl font-bold mb-4 bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Powerful Modules
          </h2>
          <div className="w-24 h-1.5 bg-linear-to-r from-transparent via-[#39e114] to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to manage your institution efficiently, all in
            one integrated platform
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <ModuleCard
              key={index}
              module={module}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface ModuleCardProps {
  module: Module;
  index: number;
  isVisible: boolean;
}

const ModuleCard = ({ module, index, isVisible }: ModuleCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = module.icon;

  return (
    <div
      className={`relative group transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card */}
      <div className="relative bg-white rounded-2xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
        {/* Animated gradient background on hover */}
        <div
          className={`absolute inset-0 bg-linear-to-br ${module.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        ></div>

        {/* Animated border effect */}
        <div
          className={`absolute inset-0 rounded-2xl transition-all duration-500 ${isHovered ? "ring-2 ring-[#39e114] ring-opacity-50" : ""}`}
        ></div>

        {/* Icon container */}
        <div className="relative mb-4">
          <div
            className={`w-14 h-14 rounded-xl bg-linear-to-br ${module.color} p-3 transform transition-all duration-500 ${isHovered ? "scale-110 rotate-6" : "scale-100 rotate-0"}`}
          >
            <Icon className="w-full h-full text-white" />
          </div>

          {/* Decorative pulse effect */}
          <div
            className={`absolute inset-0 w-14 h-14 rounded-xl bg-[#39e114] opacity-0 ${isHovered ? "animate-ping" : ""}`}
          ></div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#39e114] transition-colors duration-300">
          {module.title}
        </h3>

        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          {module.description}
        </p>

        {/* Learn More Button */}
        <Link
          href={module.href}
          className="relative inline-flex items-center gap-2 text-sm font-semibold text-[#39e114] group/btn overflow-hidden"
        >
          <span className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1">
            Learn More
          </span>
          <svg
            className={`w-4 h-4 relative z-10 transition-all duration-300 ${isHovered ? "translate-x-2" : "translate-x-0"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>

          {/* Animated underline */}
          <span
            className={`absolute bottom-0 left-0 h-0.5 bg-[#39e114] transition-all duration-300 ${isHovered ? "w-full" : "w-0"}`}
          ></span>
        </Link>

        {/* Corner decoration */}
        <div
          className={`absolute top-0 right-0 w-20 h-20 bg-linear-to-br ${module.color} opacity-5 rounded-bl-full transform transition-all duration-500 ${isHovered ? "scale-150" : "scale-100"}`}
        ></div>
      </div>
    </div>
  );
};

export default ModulesSection;
