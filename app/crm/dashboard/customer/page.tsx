"use client";
import { Card, Col, Divider, Row, Statistic } from "antd";
import { CustomerDashboardFilter } from "./Filter";
import { CustomerOperatorTable } from "./OperatorTable";
import { CustomerOpenedLineChart } from "./OpenedLineChart";
import { CustomerClosedLineChart } from "./ClosedLineChart";
import { CustomerOperatorPieChart } from "./OperatorPieChart";

export default function DashboardDialingPage() {
  return (
    <div>
      <CustomerDashboardFilter />
      <Row gutter={[12, 12]}>
        <Col span={24}>
          <Divider orientation="left" className="!m-0 !mt-5">
            Залгасан хугацаа
          </Divider>
        </Col>
        <Col xs={24} md={12} lg={12}>
          <Card>
            <Statistic title="Нээлттэй" value={0} />
          </Card>
        </Col>
        <Col xs={24} md={12} lg={12}>
          <Card>
            <Statistic title="Хаалттай" value={0} />
          </Card>
        </Col>
        <Col xs={24} md={24} lg={12}>
          <CustomerOpenedLineChart />
        </Col>
        <Col xs={24} md={24} lg={12}>
          <CustomerClosedLineChart />
        </Col>
        <Col span={24}>
          <Divider orientation="left" className="!m-0 !mt-5">
            Оператор
          </Divider>
        </Col>
        <Col xs={24} md={24} lg={12}>
          <CustomerOperatorTable />
        </Col>
        <Col xs={24} md={24} lg={12}>
          <CustomerOperatorPieChart />
        </Col>
      </Row>
    </div>
  );
}
