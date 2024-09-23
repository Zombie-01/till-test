"use client";
import { Card, Table } from "antd";

export const CustomerOperatorTable = () => {
  return (
    <Card>
      <Table
        scroll={{ y: 260 }}
        size="small"
        dataSource={[
          { rowNo: "1", name: "Бусад", count: 20 },
          { rowNo: "2", name: "Базар", count: 9 },
          { rowNo: "3", name: "Бархас", count: 77 },
          { rowNo: "4", name: "Оюунжаргал", count: 3 },
          { rowNo: "5", name: "Оюунжаргал(Х)", count: 11 },
          { rowNo: "6", name: "Пүрэвдулам", count: 3 },
          { rowNo: "7", name: "УЯНГА", count: 2 },
          { rowNo: "8", name: "энхчимэг", count: 4 },
        ]}
        pagination={false}
        columns={[
          { key: "rowNo", dataIndex: "rowNo", title: "Д/д" },
          { key: "name", dataIndex: "name", title: "Нэр" },
          { key: "count", dataIndex: "count", title: "Тоо" },
          { key: "allTime", dataIndex: "allTime", title: "Нийт" },
          { key: "avgTime", dataIndex: "avgTime", title: "Дундаж" },
        ]}
      />
    </Card>
  );
};
