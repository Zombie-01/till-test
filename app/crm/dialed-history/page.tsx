"use client";

import { Col, Row } from "antd";
import { FaPhone } from "react-icons/fa6";
import { List } from "@/components";
import { DialedHistoryTable } from "./Table";
import { DialedHistoryFilter } from "./Filter";
import { DialedHistoryChildTable } from "./ChildTable";

/**
 * Dialed history list page
 */
export default function DialedHistoryPage() {
  // Render
  return (
    <List title="Залгасан түүх" titleIcon={<FaPhone />} filterForm={<DialedHistoryFilter />} hideCreateButton>
      <Row gutter={24}>
        <Col span={12}>
          <DialedHistoryTable />
        </Col>
        <Col span={12}>
          <DialedHistoryChildTable />
        </Col>
      </Row>
    </List>
  );
}
