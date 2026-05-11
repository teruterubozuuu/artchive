"use client";
import { menuItems } from "@/lib/constants";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../ui/sidebar";
import { Brush, Home, Palette, Settings, ShoppingBag } from "lucide-react";

export default function AppSidebar() {

  const { state } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarMenu className="p-2 space-y-4">
          <SidebarMenuItem>
            <div className="p-2 flex gap-2 items-center">
              <Palette className="size-5 shrink-0"/>
              {state!=="collapsed" && (<span>Artchive</span>)}
            </div>
          </SidebarMenuItem>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.id}>
              <SidebarMenuButton className="flex lg:justify-start [&_svg]:size-5 cursor-pointer">
                {item.icon}
                <span>{item.label}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
