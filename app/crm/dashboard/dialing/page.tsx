"use client";
import { Card, Col, Divider, Row, Statistic } from "antd";
import { DialingDashboardFilter } from "./Filter";
import { DialingSituationTable } from "./SituationTable";
import { DialingSituationPie } from "./SituationPieChart";
import { DialingCountPieChart } from "./DialingCountPieChart";
import { DialingConnectetLineChart } from "./ConnectetLineChart";
import { DialingAvarageTimeLineChart } from "./AvarageTimeLineChart";
import { DialingConnectedColumnChart } from "./ConnectedColumnChart";
import { DialingAvarageTimeColumnChart } from "./AvarageTimeColumnChart";

export default function DashboardDialingPage() {
  return (
    <div>
      <DialingDashboardFilter />
      <Row gutter={[12, 12]}>
        <Col span={24}>
          <Divider orientation="left" className="!mb-0">
            Залгасан тоо
          </Divider>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <DialingCountPieChart />
        </Col>
        <Col xs={24} md={12} lg={16}>
          <DialingConnectedColumnChart />
          <div className="mt-[10px]">
            <DialingConnectetLineChart />
          </div>
        </Col>
        <Col span={24}>
          <Divider orientation="left" className="!m-0 !mt-5">
            Залгасан хугацаа
          </Divider>
        </Col>
        <Col xs={24} md={24} lg={8}>
          <Card>
            <Statistic title="Ажлын өдөр" value={9} />
          </Card>
        </Col>
        <Col xs={24} md={24} lg={8}>
          <Card>
            <Statistic title="Дундаж цаг" value="00:00:22" />
          </Card>
        </Col>
        <Col xs={24} md={24} lg={8}>
          <Card>
            <Statistic title="Дундаж минут" value="00:29" />
          </Card>
        </Col>
        <Col xs={24} md={12} lg={12}>
          <DialingAvarageTimeLineChart />
        </Col>
        <Col xs={24} md={12} lg={12}>
          <DialingAvarageTimeColumnChart />
        </Col>
        <Col span={24}>
          <Divider orientation="left" className="!m-0 !mt-5">
            Нөхцөл байдал
          </Divider>
        </Col>
        <Col xs={24} md={24} lg={12}>
          <DialingSituationTable />
        </Col>
        <Col xs={24} md={24} lg={12}>
          <DialingSituationPie />
        </Col>
      </Row>
    </div>
  );
}
