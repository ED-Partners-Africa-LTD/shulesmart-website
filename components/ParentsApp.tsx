"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  DevicePhoneMobileIcon,
  BellAlertIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentCheckIcon,
  CalendarIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import {
  HiBellAlert,
  HiClipboardDocumentCheck,
  HiCurrencyDollar,
} from "react-icons/hi2";
import { IoCalendar } from "react-icons/io5";
import { IconType } from "react-icons";
import { FaChartBar } from "react-icons/fa";

/**
 * The ParentAppSection component displays the features of the parent app.
 */

const ParentAppSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // The features of the parent app
  const features = [
    {
      icon: CurrencyDollarIcon,
      title: "Fee Management",
      description: "View balances, pay fees instantly, and download receipts",
    },
    {
      icon: ChartBarIcon,
      title: "Performance Reports",
      description:
        "Real-time access to grades, assessments, and progress tracking",
    },
    {
      icon: BellAlertIcon,
      title: "Instant Notifications",
      description:
        "Get alerts for important updates, events, and announcements",
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: "Direct Messaging",
      description: "Chat with teachers and staff in real-time",
    },
    {
      icon: ClipboardDocumentCheckIcon,
      title: "Attendance Tracking",
      description: "Monitor your child's attendance and punctuality",
    },
    {
      icon: CalendarIcon,
      title: "Event Calendar",
      description: "Never miss school events, meetings, or important dates",
    },
  ];

  // Animate the section when it is visible
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
      ref={sectionRef}
      className="relative min-h-screen bg-linear-to-br from-white via-gray-50 to-slate-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* The decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#39e114] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-400 opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* The left content */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="inline-block px-4 py-2 bg-[#39e114] bg-opacity-10 rounded-full border border-[#39e114] border-opacity-20 mb-6">
              <span className="text-[#white] text-sm font-semibold flex items-center gap-2">
                <DevicePhoneMobileIcon className="w-4 h-4" />
                MOBILE APP
              </span>
            </div>

            <h2 className="text-5xl font-bold mb-6 bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Keep Parents in the Loop
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Empower parents with real-time insights into their childs academic
              journey. Our mobile app puts everything parents need right at
              their fingertips.
            </p>

            {/* The feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  feature={feature}
                  index={index}
                  isVisible={isVisible}
                />
              ))}
            </div>

            {/* The call to action buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="group relative px-8 py-4 bg-[#39e114] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  <ArrowDownTrayIcon className="w-5 h-5" />
                  Download on App Store
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-emerald-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="group relative px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  <ArrowDownTrayIcon className="w-5 h-5" />
                  Get it on Google Play
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-gray-800 to-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* The stats */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <StatItem number="50K+" label="Active Users" />
              <StatItem number="4.8" label="App Rating" />
              <StatItem number="99%" label="Satisfaction" />
            </div>
          </div>

          {/* The phone mockup */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <PhoneMockup />
          </div>
        </div>
      </div>
    </div>
  );
};

// The props for the FeatureItem component
interface FeatureItemProps {
  index: number;
  isVisible: boolean;
  feature: {
    icon: React.ForwardRefExoticComponent<
      Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
        title?: string;
        titleId?: string;
      } & React.RefAttributes<SVGSVGElement>
    >;
    title: string;
    description: string;
  };
}

/**
 * The FeatureItem component displays a single feature of the parent app.
 * @param feature The feature to display
 * @param index The index of the feature
 * @param isVisible Whether the section is visible or not
 */

const FeatureItem = ({ feature, index, isVisible }: FeatureItemProps) => {
  const Icon = feature.icon;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex items-start gap-3 p-4 rounded-xl transition-all duration-500 hover:bg-white hover:shadow-lg ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      style={{ transitionDelay: `${index * 100 + 400}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`shrink-0 w-10 h-10 bg-linear-to-br from-[#39e114] to-emerald-600 rounded-lg flex items-center justify-center transform transition-all duration-300 ${isHovered ? "scale-110 rotate-6" : "scale-100 rotate-0"}`}
      >
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
        <p className="text-sm text-gray-600">{feature.description}</p>
      </div>
    </div>
  );
};

// The props for the StatItem component
interface StatItemProps {
  number: string;
  label: string;
}
/**
 * The StatItem component displays a single stat.
 * @param number The number to display
 * @param label The label for the number
 */
const StatItem = ({ number, label }: StatItemProps) => {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-[#39e114] mb-1">{number}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
};

/**
 * The PhoneMockup component displays a mockup of the parent app.
 */
const PhoneMockup = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="relative mx-auto max-w-sm">
      {/* The floating elements */}
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#39e114] opacity-20 rounded-full animate-pulse"></div>
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-emerald-500 opacity-20 rounded-full animate-pulse delay-1000"></div>

      {/* The phone frame */}
      <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl transform hover:scale-105 transition-transform duration-500">
        {/* The notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-10"></div>

        {/* The screen */}
        <div className="relative bg-white rounded-[2.5rem] overflow-hidden h-[600px]">
          {/* The status bar */}
          <div className="bg-linear-to-br from-[#39e114] to-emerald-600 px-6 py-4 text-white">
            <div className="flex justify-between items-center text-xs mb-4">
              <span>9:41</span>
              <div className="flex gap-1">
                <div className="w-4 h-4 border border-white rounded-sm"></div>
                <div className="w-4 h-4 border border-white rounded-sm"></div>
                <div className="w-4 h-4 border border-white rounded-sm"></div>
              </div>
            </div>
            <h3 className="text-2xl font-bold">Parent Portal</h3>
            <p className="text-sm opacity-90">Welcome back, John Doe</p>
          </div>

          {/* The content area */}
          <div className="p-6 space-y-4">
            {/* The quick stats cards */}
            <div className="grid grid-cols-2 gap-3">
              <QuickStatCard
                title="Fee Balance"
                value="KES 15,000"
                color="from-blue-500 to-blue-600"
                Icon={HiCurrencyDollar}
              />
              <QuickStatCard
                title="Average Grade"
                value="B+"
                color="from-[#39e114] to-emerald-600"
                Icon={FaChartBar}
              />
            </div>

            {/* The recent activity */}
            <div className="bg-gray-50 rounded-2xl p-4 space-y-3">
              <h4 className="font-semibold text-gray-900 text-sm">
                Recent Updates
              </h4>

              <ActivityItem
                Icon={HiBellAlert}
                title="Math Exam Tomorrow"
                time="2 hours ago"
                color="text-orange-500"
              />
              <ActivityItem
                Icon={HiClipboardDocumentCheck}
                title="Report Card Available"
                time="1 day ago"
                color="text-[#39e114]"
              />
              <ActivityItem
                Icon={IoCalendar}
                title="Parent-Teacher Meeting"
                time="3 days ago"
                color="text-blue-500"
              />
            </div>

            {/* The action button */}
            <button className="w-full bg-linear-to-r from-[#39e114] to-emerald-600 text-white font-semibold py-3 rounded-xl shadow-lg">
              Pay Fees Now
            </button>
          </div>

          {/* The bottom navigation */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-around">
            {[
              { icon: "🏠", label: "Home" },
              { icon: "📊", label: "Reports" },
              { icon: "💬", label: "Messages" },
              { icon: "👤", label: "Profile" },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex flex-col items-center gap-1 transition-colors duration-300 ${activeTab === index ? "text-[#39e114]" : "text-gray-400"}`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// The props for the QuickStatCard component
interface QuickStatCardProps {
  title: string;
  value: string;
  color: string;
  Icon: IconType;
}
/**
 * The QuickStatCard component displays a single stat in a card.
 * @param title The title of the stat
 * @param value The value of the stat
 * @param color The color of the card
 * @param Icon The icon to display
 */
const QuickStatCard = ({ title, value, color, Icon }: QuickStatCardProps) => {
  return (
    <div
      className={`bg-linear-to-br ${color} rounded-xl p-3 text-white shadow-lg`}
    >
      <Icon className="w-5 h-5 mb-2 opacity-80" />
      <div className="text-xs opacity-90 mb-1">{title}</div>
      <div className="text-lg font-bold">{value}</div>
    </div>
  );
};

// The props for the ActivityItem component
interface ActivityItemProps {
  title: string;
  time: string;
  color: string;
  Icon: IconType;
}
/**
 * The ActivityItem component displays a single activity item.
 * @param Icon The icon to display
 * @param title The title of the activity
 * @param time The time of the activity
 * @param color The color of the icon
 */
const ActivityItem = ({ Icon, title, time, color }: ActivityItemProps) => {
  return (
    <div className="flex items-start gap-3 pb-3 border-b border-gray-200 last:border-0 last:pb-0">
      <div
        className={`w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center shrink-0`}
      >
        <Icon className={`w-4 h-4 ${color}`} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">{title}</p>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
    </div>
  );
};

export default ParentAppSection;
