import { useTheme } from "@/providers";
import { Pie } from "@ant-design/charts";
import { Card } from "antd";

export const CustomerOperatorPieChart = () => {
  const { isDark } = useTheme();
  const config = {
    data: MOCK_DATA,
    height: 300,
    angleField: "count",
    colorField: "title",
    legend: {
      color: {
        title: false,
        position: "right",
        rowPadding: 5,
      },
    },
    label: {
      text: ({ count }: any) => {
        return `${count}`;
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

const MOCK_DATA = [
  {
    title: "Бусад",
    count: 20,
  },
  { title: "Базар", count: 9 },
  {
    title: "Бархас",
    count: 5,
  },
  { title: "Оюунжаргал", count: 3 },
  {
    title: "Оюунжаргал(Х)",
    count: 4,
  },
  {
    title: "Пүрэвдулам",
    count: 2,
  },
  {
    title: "УЯНГА",
    count: 2,
  },
  {
    title: "энхчимэг",
    count: 3,
  },
];
