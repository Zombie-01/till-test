import { useTheme } from "@/providers";
import { Pie } from "@ant-design/charts";
import { Card } from "antd";

export const DialingCountPieChart = () => {
  const isDark = useTheme();
  const config = {
    data: [
      { title: "Амжилттай", percent: 14.3, count: 1 },
      { title: "Амжилтгүй", percent: 85.7, count: 6 },
    ],
    angleField: "percent",
    colorField: "title",
    legend: true,
    label: {
      text: ({ percent, count }: any) => {
        return `${percent}% (${count})`;
      },
      fill: "#fff",
      fontSize: 12,
    },
    theme: isDark ? "classicDark" : "classic",
  };
  return (
    <Card>
      <Pie {...config} />
    </Card>
  );
};
