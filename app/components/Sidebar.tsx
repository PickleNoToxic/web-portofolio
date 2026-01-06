"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  Home,
  GraduationCap,
  FileText,
  Briefcase,
  Mail,
  Download,
} from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-full md:w-64 text-gray-700 bg-white flex-shrink-0">
      {/* Header */}
      <div className="flex-shrink-0 px-8 py-4 flex items-center justify-between">
        <span className="text-lg font-semibold tracking-widest text-gray-900 uppercase">
          Matthew Kevin
        </span>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Navigation */}
      <nav className={`${open ? "block" : "hidden"} md:block px-4 pb-4`}>
        {/* Profile */}
        <div className="space-y-6 my-5">
          <div className="space-y-3">
            <Image
              src="/images/foto.jpg"
              alt="Avatar user"
              width={128}
              height={128}
              className="rounded-full mx-auto"
            />
            <div>
              <h2 className="font-medium text-sm text-center text-cyan-900">
                Full-Stack Developer
              </h2>
            </div>
          </div>
        </div>
        <div className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-cyan-900"></div>

        {/* Menu */}
        <div className="flex flex-col space-y-2 my-5">
          <SidebarLink
            href="/"
            label="Home"
            icon={Home}
            active={pathname === "/"}
          />
          <SidebarLink
            href="/about"
            label="About Me"
            icon={GraduationCap}
            active={pathname === "/about"}
          />
          <SidebarLink
            href="/resume"
            label="Resume"
            icon={FileText}
            active={pathname === "/resume"}
          />
          <SidebarLink
            href="/portfolio"
            label="Portfolio"
            icon={Briefcase}
            active={pathname === "/portfolio"}
          />
          <SidebarLink
            href="/contact"
            label="Contact"
            icon={Mail}
            active={pathname === "/contact"}
          />
          {/* DOWNLOAD CV */}
          <div className="mt-6 px-2">
            <a
              href="/cv/Matthew_Kevin_CV.pdf"
              download
              className="
                flex items-center justify-center gap-2
                w-full py-2.5
                rounded-md
                bg-cyan-900 text-white
                font-semibold text-sm
                transition
                hover:bg-cyan-800 hover:scale-105
                shadow-sm
              "
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

function SidebarLink({
  href,
  label,
  icon: Icon,
  active,
}: {
  href: string;
  label: string;
  icon: React.ElementType;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center text-sm font-medium py-2 px-2 rounded-md transition hover:scale-105
        ${
          active
            ? "bg-cyan-900 text-white"
            : "text-gray-700 hover:bg-cyan-900 hover:text-white"
        }
      `}
    >
      <Icon className="w-5 h-5 mr-2" aria-hidden="true" />
      <span>{label}</span>
    </Link>
  );
}
