import { useTheme } from "@/providers";
import { Line } from "@ant-design/charts";
import { Card } from "antd";

export const CustomerClosedLineChart = () => {
  const { isDark } = useTheme();
  const data = [
    { date: "2024.09.01", value: 3 },
    { date: "2024.09.02", value: 4 },
    { date: "2024.09.03", value: 3.5 },
    { date: "2024.09.04", value: 5 },
    { date: "2024.09.05", value: 4.9 },
    { date: "2024.09.06", value: 6 },
  ];
  const config = {
    data,
    height: 260,
    xField: "date",
    yField: "value",
    point: {
      shapeField: "square",
      sizeField: 4,
    },
    interaction: {
      tooltip: {
        marker: false,
      },
    },
    style: {
      lineWidth: 2,
    },
    theme: isDark ? "classicDark" : "classic",
  };
  return (
    <Card title="Хаалттай">
      <Line {...config} />
    </Card>
  );
};
