"use client";

import React from "react";
import { AppLayout, NavItem } from "@/components/layout/app-layout";
import { 
  Grid,
  PieChart, 
  ShieldCheck, 
  ListChecks
} from "lucide-react";
import { usePathname } from "next/navigation";

const regulatorNavItems: NavItem[] = [
  { name: "Overview", href: "/regulator", icon: Grid },
  { name: "Sector Analytics", href: "/regulator/analytics", icon: PieChart },
  { name: "Compliance Monitoring", href: "/regulator/compliance", icon: ShieldCheck },
  { name: "Audit Logs", href: "/regulator/audit", icon: ListChecks },
];

export default function RegulatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  const getPageTitle = () => {
    const item = regulatorNavItems.find(item => item.href === pathname);
    return item ? item.name : "Regulatory Dashboard";
  };

  return (
    <AppLayout
      navItems={regulatorNavItems}
      title={getPageTitle()}
      roleName="REGULATOR"
      userName="Regulator #091"
      userRole="Internal Audit Unit"
      profileImage="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
    >
      {children}
    </AppLayout>
  );
}
