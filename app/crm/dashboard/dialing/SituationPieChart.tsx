import { useTheme } from "@/providers";
import { Pie } from "@ant-design/charts";
import { Card } from "antd";

export const DialingSituationPie = () => {
  const { isDark } = useTheme();
  const config = {
    data: [
      {
        title: "Эрсдлийн багийн харилцагчтэй уулзах шаардлагатай",
        count: 97,
      },
      { title: "Шууд шүүх руу явуулах шаардлагатай", count: 9 },
      {
        title: "Цалингаа буусны дараа эргэн төлөлт хийхээр төлөвлөж байна",
        count: 77,
      },
      { title: "Харилцагч мэдээгүй байсан", count: 3 },
      {
        title: "Шаардах бичиг хүргүүлэх шаардлагатай",
        count: 11,
      },
      {
        title: "Мөнгө орж ирэхээр төлөлт хийхээр төлөвлөж байна",
        count: 271,
      },
    ],
    height: 273,
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
