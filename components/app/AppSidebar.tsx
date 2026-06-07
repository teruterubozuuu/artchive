"use client";
import { menuItems } from "@/lib/constants";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { Loader2, Palette, Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useSessionContext } from "@/context/sessionContext";
import NavUser from "./NavUser";

export default function AppSidebar() {
  const { session } = useSessionContext();

  return (
    <Sidebar variant="floating">
      <SidebarContent>
        <SidebarMenu className="px-3 py-4 space-y-6">
          <SidebarMenuItem>
            <div className="p-2 flex gap-4 items-center text-md font-medium">
              <Palette className="size-5 shrink-0 text-primary" />
              <span className="">Artchive</span>
            </div>
          </SidebarMenuItem>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.id}>
              <Link href={item.href}>
                <SidebarMenuButton className="flex lg:justify-start [&_svg]:size-5 cursor-pointer gap-4 text-md">
                  <span className="text-primary">{item.icon}</span>
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
          <SidebarMenuItem>
            <Link href="/create-post">
              <Button className="w-full py-5 cursor-pointer rounded-full font-semibold">
                <Plus />
                Post
              </Button>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        {session ? (
          <NavUser />
        ) : (
          <Button variant="outline" asChild className="w-full cursor-pointer">
            <Link href="/auth/login">Login</Link>
          </Button>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
