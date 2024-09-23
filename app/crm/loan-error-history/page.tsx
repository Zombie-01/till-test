"use client";

import { FaClock } from "react-icons/fa6";
import { List } from "@/components";
import { LoanErrorHistoryTable } from "./Table";
import { LoanErrorHistoryFilter } from "./Filter";

/**
 * Loan error history list page
 */
export default function LoanErrorHistoryPage() {
  // Render
  return (
    <List title="Алдааны түүх" titleIcon={<FaClock />} filterForm={<LoanErrorHistoryFilter />} hideCreateButton>
      <LoanErrorHistoryTable />
    </List>
  );
}
