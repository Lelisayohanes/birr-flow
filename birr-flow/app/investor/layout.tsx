"use client";

import React from "react";
import { AppLayout, NavItem } from "@/components/layout/app-layout";
import { 
  PieChart, 
  ListChecks, 
  ShieldCheck, 
  Network
} from "lucide-react";
import { usePathname } from "next/navigation";

const investorNavItems: NavItem[] = [
  { name: "Portfolio", href: "/investor", icon: PieChart },
  { name: "Milestone Terms", href: "/investor/terms", icon: ListChecks },
  { name: "Proofs to Review", href: "/investor/proofs", icon: ShieldCheck },
  { name: "Cap Table", href: "/investor/cap-table", icon: Network },
];

export default function InvestorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  const getPageTitle = () => {
    const item = investorNavItems.find(item => item.href === pathname);
    return item ? item.name : "Investor Dashboard";
  };

  return (
    <AppLayout
      navItems={investorNavItems}
      title={getPageTitle()}
      roleName="INVESTOR"
      userName="Alice Smith"
      userRole="Managing Partner"
    >
      {children}
    </AppLayout>
  );
}
