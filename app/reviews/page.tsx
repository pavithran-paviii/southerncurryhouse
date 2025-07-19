'use client'

import DashboardLayout from "../../src/layout/Dashboard";
import Reviews from "../../src/pages/Reviews";

export default function ReviewsPage() {
  return <DashboardLayout child={<Reviews />} />;
}