import { Card } from "antd";
import { Column } from "@ant-design/charts";
import { useTheme } from "@/providers";

export const DialingAvarageTimeColumnChart = () => {
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
    height: 300,
    data: data,
    xField: "date",
    yField: "value",
    label: {
      text: (d: any) => `${d.value}`,
      textBaseline: "bottom",
    },
    axis: {
      y: {
        labelFormatter: ".0",
      },
    },
    style: {
      radiusTopLeft: 10,
      radiusTopRight: 10,
    },
    theme: isDark ? "classicDark" : "classic",
  };
  return (
    <Card title="Залгасан дундаж хугацаа">
      <Column {...config} />
    </Card>
  );
};
