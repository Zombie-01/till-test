"use client";

import { FaClock } from "react-icons/fa6";
import { List } from "@/components";
import { CustomerHistoryTable } from "./Table";
import { CustomerHistoryFilter } from "./Filter";

/**
 * Customer error history list page
 */
export default function CustomerErrorHistoryPage() {
  // Render
  return (
    <List title="Алдааны түүх" titleIcon={<FaClock />} filterForm={<CustomerHistoryFilter />} hideCreateButton>
      {/* List table */}
      <CustomerHistoryTable />
    </List>
  );
}
