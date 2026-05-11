import { Brush, HomeIcon, Settings, ShoppingBag } from "lucide-react";

 export const menuItems = [
    { id: "home", label: "Home", icon: <HomeIcon />, href: "/home" },
    {
      id: "marketplace",
      label: "Marketplace",
      icon: <ShoppingBag />,
      href: "/marketplace",
    },
    {
      id: "commission",
      label: "Commissions",
      icon: <Brush />,
      href: "/commission",
    },
    {
      id: "settings",
      label: "Settings",
      icon: <Settings />,
      href: "/settings",
    },
  ];