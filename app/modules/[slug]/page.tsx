import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

// This would be the actual import
// import { modules } from "@/data/modules";

// Mock module data - to be replaced with actual data structure
const modules = [
  {
    slug: "admissions",
    icon: "ClipboardDocumentListIcon",
    title: "Admissions",
    description:
      "Streamline student enrollment, application processing, and admission workflows from inquiry to acceptance.",
    color: "from-emerald-400 to-green-500",
  },

  {
    slug: "finance",
    icon: "MoneyIcon",
    title: "Finance",
    description:
      "The Finance module brings together all key financial tools, Payments, Fees, Collections, Accounts, Incomes, Expenses, Transport, Pocket Money, and Budgets so schools can manage finances confidently from one place",
    color: "from-emerald-400 to-green-500",
  },
  {
    slug: "communication",
    icon: "ChatBubbleBottomCenterIcon",
    title: "Communication",
    description:
      "The communication Module Manage all school communications efficiently with a Dashboard, SMS, Notices, Newsletters, and Sender Ids panels to facilitate timely, organized, and transparent updates for your school community.",
    color: "from-green-400 to-emerald-500",
  },
  {
    slug: "hr",
    icon: "UserGroupIcon",
    title: "HR/Payroll",
    description:
      "Automated payroll processing, leave management, staff performance tracking, and HR workflows.",
    color: "from-green-400 to-emerald-500",
  },
  {
    slug: "exam",
    title: "Exam Analysis",
    icon: "AcademicCapIcon",
    description:
      "Manage all assessment activities with the Exams module, featuring a central Dashboard, tools to create and track Exams, access Lesson Plans, organize My Subjects, run Coding Exams, review Shared Exams, and adjust Settings—all designed to simplify exam preparation, administration, and oversight.",
    color: "from-green-400 to-emerald-500",
  },
  {
    slug: "elearning",
    icon: "ComputerDesktopIcon",
    title: "E-Learning",
    description:
      "E-Learning module, features a Dashboard for quick insights, Assignments/Tests for continuous assessment, Live Classes for real-time teaching, Video Lessons for flexible learning, and Generate Exams tools to create assessments, all in one integrated platform.",
    color: "from-emerald-400 to-teal-500",
  },
  {
    slug: "attendance",
    icon: "CalendarCheckIcon",
    title: "Attendance",
    description:
      "Attendance module, provides a Dashboard for quick insights, Students, Teachers, and Staff attendance records, Classes and Register tools for daily marking, Reasons for absence tracking, Gadgets for biometric device management, Sent SMS for attendance notifications, and Settings to customize your attendance workflows. ",
    color: "from-emerald-400 to-teal-500",
  },
  {
    slug: "timetable",
    icon: "CalendarIcon",
    title: "Timetable",
    description:
      "Create and manage school schedules effortlessly with the Timetabling module, featuring Subjects, Classes, Rooms, and Teachers panels with aa Generate tool to automatically create timetables and Settings to customize your scheduling preferences—ensuring a smooth, efficient, and well-structured timetable for your school.",
    color: "from-emerald-400 to-teal-500",
  },
  {
    slug: "library",
    icon: "BookOpenIcon",
    title: "Library",
    description:
      "Manage your school library efficiently with the Library module, featuring a Dashboard for quick insights, Books Management for organizing inventory, Issue/Return Books for tracking circulation, Fines & Penalties for managing overdue charges, Library Settings for customization, and Reports for data-driven library oversight.",
    color: "from-teal-400 to-cyan-500",
  },
  {
    slug: "inventory",
    title: "Inventory",
    icon: "CubeTransparentIcon",
    description:
      "Inventory module, provides a Dashboard for real-time insights, Items tracking, Inventory Adjustments, Vendors management, Requisition and Purchase Orders, Bills and Payment Requests, Asset Management, Issue/Return Items, and Reports, ensuring accurate, efficient, and transparent inventory control across your school.",
    color: "from-teal-400 to-cyan-500",
  },
  {
    slug: "admin",
    icon: "BuildingLibraryIcon",
    title: "Administration",
    description:
      "The Administration module, features School details, Users management, Routes, Classes and Streams, Courses, Departments, Terms/Semesters, and Hostels, all designed to keep your institution organized, efficient, and fully aligned for smooth operations.",
    color: "from-teal-400 to-cyan-500",
  },
];

/**
 * The page for a single module.
 * @param params The parameters for the page
 */
const ModulePage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  // Find the module
  const module_single = modules.find((m) => m.slug === slug);

  // If module not found, show 404
  if (!module) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-gray-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* The breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-12">
          <Link href="/" className="hover:text-[#39e114] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/#modules"
            className="hover:text-[#39e114] transition-colors"
          >
            Modules
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">
            {module_single?.title}
          </span>
        </nav>

        {/* The main content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* The image */}
          <div className="relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              {/* The placeholder for the image */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${module_single?.color} opacity-20`}
              ></div>
              <Image
                src={`/images/${slug}.png`}
                alt={module_single?.title || ""}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* The decorative elements */}
            <div
              className={`absolute -bottom-6 -right-6 w-32 h-32 bg-linear-to-br ${module_single?.color} opacity-20 rounded-full blur-2xl -z-10`}
            ></div>
            <div
              className={`absolute -top-6 -left-6 w-24 h-24 bg-linear-to-br ${module_single?.color} opacity-20 rounded-full blur-2xl -z-10`}
            ></div>
          </div>

          {/* The content */}
          <div>
            {/* The badge */}
            <div className="inline-block px-4 py-2 bg-[#39e114] bg-opacity-10 rounded-full border border-[#39e114] border-opacity-20 mb-6">
              <span className="text-[#39e114] text-sm font-semibold">
                MODULE
              </span>
            </div>

            {/* The title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              {module_single?.title}
            </h1>

            {/* The description */}
            <p className="text-2xl lg:text-3xl text-gray-700 leading-relaxed font-light mb-12">
              {module_single?.description}
            </p>

            {/* The call to action buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 bg-[#39e114] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
                Get Started
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
              </button>

              <button className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold border-2 border-gray-200 hover:border-[#39e114] transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModulePage;
