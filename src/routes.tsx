import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import RTLDefault from "views/rtl/default";
import EmailVerification from "views/auth/EmailVerification";
import EnergieManagement from "views/admin/EnergieManagement";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GiRaining } from "react-icons/gi";
import { CiCloudOn } from "react-icons/ci";
import Source from "components/widget/water-management/Source";

// Auth Imports
import SignIn from "views/auth/SignIn";
import { IoHomeOutline } from "react-icons/io5";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";
import WaterManagement from "views/admin/WaterManagement";
import ServiceMeteo from "views/admin/ServiceMeteo";
import EnergieManagementDetail from "views/admin/EnergieManagement/EnergieManagementDetail";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "default",
    icon: <IoHomeOutline className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Energie Management",
    layout: "/admin",
    path: "energie-management",
    icon: <AiOutlineThunderbolt className="h-6 w-6" />,
    component: <EnergieManagement />,
  },
  {
    name: "Water Management",
    layout: "/admin",
    path: "water-management",
    icon: <CiCloudOn className="h-6 w-6" />,
    component: <WaterManagement />,
    children: [
      {
        name: "Source",
        layout: "/admin",
        path: "source",
        component: <Source />,
      }
    ]
  },
  {
    name: "Service Météo",
    layout: "/admin",
    path: "service-meteo",
    icon: <CiCloudOn className="h-6 w-6" />,
    component: <ServiceMeteo />,
  },
  {
    name: "Data Tables",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
  {
    name: "Email Verification",
    layout: "/auth",
    path: "emailVerification",
    icon: <MdLock className="h-6 w-6" />,
    component: <EmailVerification />,
  },
  {
    name: "RTL Admin",
    layout: "/rtl",
    path: "rtl",
    icon: <MdHome className="h-6 w-6" />,
    component: <RTLDefault />,
  },
];

export default routes;
