"use client";

import React from "react";
import { AppLayout, NavItem } from "@/components/layout/app-layout";
import {
  LayoutDashboard,
  CircleDollarSign,
  UploadCloud,
  FileBadge,
  Trophy,
  ShieldCheck,
  ListChecks,
  BarChart2
} from "lucide-react";
import { usePathname } from "next/navigation";

const startupNavItems: NavItem[] = [
  { name: "Dashboard", href: "/startup", icon: LayoutDashboard },
  { name: "Milestones", href: "/startup/milestones", icon: ListChecks },
  { name: "My Grants", href: "/startup/grants", icon: CircleDollarSign },
  { name: "Upload Proof", href: "/startup/proof", icon: UploadCloud },
  { name: "Analytics", href: "/startup/analytics", icon: BarChart2 },
  { name: "Passport", href: "/startup/passport", icon: FileBadge },
  { name: "Challenges", href: "/startup/challenges", icon: Trophy },
  { name: "Verification", href: "/startup/verification", icon: ShieldCheck },
];

export default function StartupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  const getPageTitle = () => {
    const item = startupNavItems.find(item => item.href === pathname);
    return item ? item.name : "Dashboard";
  };

  return (
    <AppLayout
      navItems={startupNavItems}
      title={getPageTitle()}
      roleName="STARTUP"
      userName="John Doe"
      userRole="Founder, TechCorp"
    >
      {children}
    </AppLayout>
  );
}
