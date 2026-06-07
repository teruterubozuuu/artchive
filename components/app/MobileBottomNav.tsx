import { menuItems } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function MobileBottomNav() {
  return (
    <div className="md:hidden fixed bottom-0 z-10 w-full border-t bg-white py-3">
      <div className="flex justify-around">
        {menuItems.map((item) => {
          return (
            <Link key={item.id} href="#">
              {item.icon}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
