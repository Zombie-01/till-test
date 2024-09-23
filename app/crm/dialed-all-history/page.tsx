"use client";

import { FaHeadset } from "react-icons/fa6";
import { List } from "@/components";
import { DialedAllHistoryTable } from "./Table";
import { DialedAllHistoryFilter } from "./Filter";

/**
 * Dialed all history list page
 */
export default function DialedAllHistoryPage() {
  // Render
  return (
    <List
      title="Холбоо барьсан түүх"
      titleIcon={<FaHeadset />}
      filterForm={<DialedAllHistoryFilter />}
      hideCreateButton
    >
      {/* List table */}
      <DialedAllHistoryTable />
    </List>
  );
}
