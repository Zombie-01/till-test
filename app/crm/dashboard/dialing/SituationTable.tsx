"use client";
import { Card, Table } from "antd";

export const DialingSituationTable = () => {
  return (
    <Card>
      <Table
        size="small"
        rowKey="rowNo"
        dataSource={[
          {
            rowNo: "1",
            name: "Эрсдлийн багийн харилцагчтэй уулзах шаардлагатай",
            count: 97,
            allTime: "07:42:32",
            avgTime: "04:46",
          },
          {
            rowNo: "2",
            name: "Шууд шүүх руу явуулах шаардлагатай",
            count: 9,
            allTime: "07:42:32",
            avgTime: "04:46",
          },
          {
            rowNo: "3",
            name: "Цалингаа буусны дараа эргэн төлөлт хийхээр төлөвлөж байна",
            count: 77,
            allTime: "07:42:32",
            avgTime: "04:46",
          },
          {
            rowNo: "4",
            name: "Харилцагч мэдээгүй байсан",
            count: 3,
            allTime: "07:42:32",
            avgTime: "04:46",
          },
          {
            rowNo: "5",
            name: "Шаардах бичиг хүргүүлэх шаардлагатай",
            count: 11,
            allTime: "07:42:32",
            avgTime: "04:46",
          },
          {
            rowNo: "6",
            name: "Мөнгө орж ирэхээр төлөлт хийхээр төлөвлөж байна",
            count: 271,
            allTime: "07:42:32",
            avgTime: "04:46",
          },
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
