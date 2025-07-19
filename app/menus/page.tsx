'use client'

import DashboardLayout from "../../src/layout/Dashboard";
import Menus from "../../src/pages/Menus";

export default function MenusPage() {
  return <DashboardLayout child={<Menus />} />;
}