import { menuItems } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-10 border-t bg-white pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] md:hidden">
      <div className="flex justify-around">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.id}
              href={item.href}
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
              className={isActive ? "text-primary" : "text-foreground"}
            >
              {React.cloneElement(item.icon, {
                className: "size-6",
                "aria-hidden": true,
              })}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
