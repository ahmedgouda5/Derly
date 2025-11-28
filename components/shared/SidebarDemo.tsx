"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FaFileInvoice } from "react-icons/fa6";
export function SidebarDemo({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <IconBrandTabler className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Invoice",
      href: "/invoice",
      icon: (
        <FaFileInvoice className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Profile",
      href: "/profile",
      icon: (
        <IconUserBolt className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Settings",
      href: "/settings",
      icon: (
        <IconSettings className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Logout",
      href: "/logout",
      icon: (
        <IconArrowLeft className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];

  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-7xl flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col  gap-10">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>

          <SidebarLink
            link={{
              label: "Manu Arora",
              href: "/",
              icon: (
                <Image
                  src="/Subtract.jpg"
                  width={40}
                  height={40}
                  className="h-7 w-7 rounded-full"
                  alt="Avatar"
                />
              ),
            }}
          />
        </SidebarBody>
      </Sidebar>

      <Dashboard>{children}</Dashboard>
    </div>
  );
}

const Logo = () => (
  <Link
    href="/"
    className="flex items-center space-x-2 py-1 text-sm text-black"
  >
    <Image
      src="/Subtract.jpg"
      width={40}
      height={40}
      className="h-7 w-7 rounded-full"
      priority
      alt="Avatar"
    />
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-medium text-black dark:text-white"
    >
      Derly
    </motion.span>
  </Link>
);

const LogoIcon = () => (
  <Link href="/" className="flex items-center py-1">
    <Image
      src="/Subtract.jpg"
      width={40}
      height={40}
      className="h-7 w-7 rounded-full"
      priority
      alt="Avatar"
    />
  </Link>
);

const Topbar = () => {
  return (
    <div className=" hidden md:flex w-full h-14 border-b-2  py-5 border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900  items-center px-4 justify-between">
      <h2 className="text-lg font-semibold dark:text-white">Dashboard</h2>

      <div className="flex items-center gap-4">
        <button className="bg-[#6361e4] hover:bg-[#8280FF]/80 flex items-center gap-2 text-sm px-3 py-1 rounded-md border text-white">
          Login
        </button> 
      </div>
    </div>
  );
};
const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-1 flex-col">
      <Topbar />

      <div className="">
        {children}
      </div>
    </div>
  );
};
