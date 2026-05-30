"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Bell, 
  Search, 
  Menu, 
  X,
  LucideIcon,
  LogOut,
  HelpCircle,
  Settings
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export interface NavItem {
  name: string;
  href: string;
  icon: LucideIcon;
}

interface AppLayoutProps {
  children: React.ReactNode;
  navItems: NavItem[];
  title: string;
  roleName: string;
  userName: string;
  userRole: string;
  profileImage?: string;
  bottomNavItems?: NavItem[];
}

export function AppLayout({
  children,
  navItems,
  title,
  roleName,
  userName,
  userRole,
  profileImage = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150",
  bottomNavItems = [
    { name: "Settings", href: "#", icon: Settings },
    { name: "Support", href: "#", icon: HelpCircle },
  ]
}: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="min-h-screen flex bg-slate-50 font-sans text-slate-900">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-slate-900/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky top-0 left-0 z-30 h-screen w-64 bg-white border-r border-slate-200 
        flex flex-col transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>
        {/* Sidebar Header */}
        <div className="h-20 flex items-center px-6 border-b border-slate-100">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-[#067a52]">BirrFlow</h1>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{roleName}</p>
          </div>
          <button 
            className="ml-auto lg:hidden text-slate-500 hover:text-slate-900"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto py-4 px-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.href} 
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                  isActive 
                    ? "bg-[#e0f5ea] text-[#067a52]" 
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-slate-100 space-y-1">
          {bottomNavItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-xl font-medium transition-colors"
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm">{item.name}</span>
            </Link>
          ))}
          <button className="w-full flex items-center gap-3 px-4 py-3 text-rose-600 hover:bg-rose-50 rounded-xl font-medium transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="text-sm">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        {/* Top Header */}
        <header className="h-20 bg-white/80 backdrop-blur-md px-4 lg:px-8 flex items-center justify-between sticky top-0 z-10 border-b border-slate-200">
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden text-slate-500 hover:text-slate-900"
              onClick={toggleSidebar}
            >
              <Menu className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-bold text-slate-900 hidden sm:block">{title}</h2>
          </div>
          
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="relative hidden md:block w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input 
                type="text" 
                placeholder="Search..." 
                className="pl-9 bg-slate-50 border-slate-200 rounded-full h-10 text-sm focus-visible:ring-[#067a52]"
              />
            </div>
            
            <div className="flex items-center gap-3 lg:gap-4">
              <button className="relative text-slate-500 hover:text-slate-900 transition-colors p-2 rounded-full hover:bg-slate-100">
                <Bell className="w-5 h-5" />
                <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></div>
              </button>
              
              <div className="flex items-center gap-3 border-l border-slate-200 pl-4">
                <div className="w-9 h-9 rounded-full bg-slate-200 overflow-hidden shadow-sm cursor-pointer border border-slate-200 flex-shrink-0">
                  <img src={profileImage} alt={userName} className="w-full h-full object-cover" />
                </div>
                <div className="hidden lg:block">
                  <div className="text-xs font-bold text-slate-900">{userName}</div>
                  <div className="text-[10px] font-medium text-slate-500">{userRole}</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 bg-slate-50">
          <div className="max-w-7xl mx-auto pb-12">
            {/* Mobile Title */}
            <div className="sm:hidden mb-6">
              <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
            </div>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
