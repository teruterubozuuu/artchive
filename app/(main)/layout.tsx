"use client";

import AppSidebar from "@/components/app/AppSidebar";
import MobileSidebar from "@/components/app/MobileSidebar";
import SearchBar from "@/components/app/SearchBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SessionProvider, useSessionContext } from "@/context/sessionContext";
import { Loader2 } from "lucide-react";
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
  return (
    <div className="h-screen flex">
        <SidebarProvider>
          <AppSidebar />
          <MobileSidebar />
          <div className="p-3 flex-1">
            <SearchBar />
            <main className="p-2">{children}</main>
          </div>
        </SidebarProvider>
    </div>
  );
}
