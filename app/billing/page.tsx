'use client'

import DashboardLayout from "../../src/layout/Dashboard";
import Billing from "../../src/pages/Billing";

export default function BillingPage() {
  return <DashboardLayout child={<Billing />} />;
}