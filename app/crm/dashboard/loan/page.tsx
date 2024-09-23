"use client";
import { Card, Col, Divider, Row, Statistic } from "antd";
import { LoanDashboardFilter } from "./Filter";
import { LoanLineChart } from "./LineChart";

export default function DashboardDialingPage() {
  return (
    <div>
      <LoanDashboardFilter />
      <Row gutter={[12, 12]}>
        <Col span={24}>
          <Divider orientation="left" className="!m-0 !mt-5">
            Хугацаа хэтэрсэн зээл
          </Divider>
        </Col>
        <Col xs={24} md={24} lg={8}>
          <Card>
            <Statistic title="Нийт" value={9} />
          </Card>
        </Col>
        <Col xs={24} md={24} lg={8}>
          <Card>
            <Statistic title="Шинэ" value={3} />
          </Card>
        </Col>
        <Col xs={24} md={24} lg={8}>
          <Card>
            <Statistic title="Дахин төлөлт" value={5} />
          </Card>
        </Col>
        <Col xs={24} md={24} lg={24}>
          <LoanLineChart />
        </Col>
      </Row>
    </div>
  );
}
