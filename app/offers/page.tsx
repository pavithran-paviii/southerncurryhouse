'use client'

import DashboardLayout from "../../src/layout/Dashboard";
import Offers from "../../src/pages/Offers";

export default function OffersPage() {
  return <DashboardLayout child={<Offers />} />;
}