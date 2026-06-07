"use client";

import AppSidebar from "@/components/app/AppSidebar";
import MobileSidebar from "@/components/app/MobileBottomNav";
import SearchBar from "@/components/app/SearchBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SessionProvider } from "@/context/sessionContext";
import { usePathname } from "next/navigation";
import React from "react";

export default function MainAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <AppLayoutContent>{children}</AppLayoutContent>
    </SessionProvider>
  );
}

function AppLayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const exemptedRoutes = ["/create-post", "/settings"];
  const showSearchBar = !exemptedRoutes.includes(pathname)

  return (
    <div className="h-screen flex">
        <SidebarProvider>
          <AppSidebar />
          <MobileSidebar />
          <div className="flex-1 p-2">
          {showSearchBar && <SearchBar/>}
            <main className="pb-24 md:pb-0">{children}</main>
          </div>
        </SidebarProvider>
    </div>
  );
}
