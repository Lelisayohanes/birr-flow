"use client";

import React from "react";
import { AppLayout, NavItem } from "@/components/layout/app-layout";
import { 
  Inbox, 
  ShieldAlert, 
  BarChart2, 
  Users, 
  History,
  ShieldCheck,
  CircleDollarSign
} from "lucide-react";
import { usePathname } from "next/navigation";

const operationsNavItems: NavItem[] = [
  { name: "Queue", href: "/operations", icon: Inbox },
  { name: "Investigations", href: "/operations/investigations", icon: ShieldAlert },
  { name: "Compliance", href: "/operations/compliance", icon: ShieldCheck },
  { name: "Disbursements", href: "/operations/disbursements", icon: CircleDollarSign },
  { name: "Analytics", href: "/operations/analytics", icon: BarChart2 },
  { name: "Partners", href: "/operations/partners", icon: Users },
  { name: "Audit Log", href: "/operations/audit-log", icon: History },
];

export default function OperationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  const getPageTitle = () => {
    const item = operationsNavItems.find(item => item.href === pathname);
    return item ? item.name : "Dashboard";
  };

  return (
    <AppLayout
      navItems={operationsNavItems}
      title={getPageTitle()}
      roleName="OPERATIONS"
      userName="Sarah Connor"
      userRole="Grant Manager"
      profileImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    >
      {children}
    </AppLayout>
  );
}
