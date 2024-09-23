import { useTheme } from "@/providers";
import { Line } from "@ant-design/charts";
import { Card } from "antd";

export const DialingConnectetLineChart = () => {
  const { isDark } = useTheme();
  const data = [
    { date: "2024.09.01", value: 3, count: 10, type: "Холбогдсон" },
    { date: "2024.09.02", value: 4, count: 4, type: "Залгасан" },
    { date: "2024.09.03", value: 3.5, count: 5, type: "Холбогдсон" },
    { date: "2024.09.04", value: 5, count: 5, type: "Холбогдсон" },
    { date: "2024.09.05", value: 4.9, count: 4.9, type: "Холбогдсон" },
    { date: "2024.09.06", value: 6, count: 12, type: "Холбогдсон" },
  ];
  const config = {
    data: data,
    xField: "date",
    legend: true,
    colorField: "type",
    children: [
      {
        type: "line",
        yField: "value",
        style: {
          stroke: "#5B8FF9",
          lineWidth: 2,
        },
        axis: {
          y: {
            title: "value",
            style: { titleFill: "#5B8FF9" },
          },
        },
        point: {
          shapeField: "circle",
          sizeField: 4,
        },
      },
      {
        type: "line",
        yField: "count",
        style: {
          stroke: "#5AD8A6",
          lineWidth: 2,
        },
        axis: {
          y: {
            position: "right",
            title: "count",
            style: { titleFill: "#5AD8A6" },
          },
        },
        point: {
          shapeField: "circle",
          sizeField: 4,
        },
      },
    ],
    theme: isDark ? "classicDark" : "classic",
  };
  return (
    <Card>
      <Line {...config} height={210} />
    </Card>
  );
};
