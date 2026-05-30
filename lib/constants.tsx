import { Brush, HomeIcon, Settings, ShoppingBag, UserCircle } from "lucide-react";

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
      href: "/commissions",
    },
    {
      id: "profile",
      label: "Profile",
      icon: <UserCircle/>,
      href: "/profile",
    },
  ];