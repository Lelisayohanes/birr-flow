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
  { name: "Challenges", href: "/startup/challenges", icon: Trophy },
  { name: "My Proposals", href: "/startup/proposals", icon: FileBadge },
  { name: "My Grants", href: "/startup/grants", icon: CircleDollarSign },
  { name: "Passport", href: "/startup/passport", icon: ShieldCheck },
];

export default function StartupLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ startupId: string }>;
}) {
  const resolvedParams = React.use(params);
  const pathname = usePathname();
  
  const getPageTitle = () => {
    const basePath = `/startup/${resolvedParams.startupId}`;
    
    // Check exact match for dashboard first
    if (pathname === basePath) return "Dashboard";

    // Then check startsWith for other items, ordered by length descending so longer paths match first
    const sortedItems = [...startupNavItems].sort((a, b) => b.href.length - a.href.length);
    const item = sortedItems.find(item => {
      const targetHref = item.href.replace('/startup', basePath);
      return targetHref !== basePath && (pathname === targetHref || pathname.startsWith(targetHref + '/'));
    });
    
    return item ? item.name : "Dashboard";
  };

  // Replace generic links with user-specific ones
  const navItems = startupNavItems.map(item => ({
    ...item,
    href: item.href.replace('/startup', `/startup/${resolvedParams.startupId}`)
  }));

  return (
    <AppLayout
      navItems={navItems}
      title={getPageTitle()}
      roleName="STARTUP"
      userName="Startup User"
      userRole="Startup"
    >
      {children}
    </AppLayout>
  );
}
