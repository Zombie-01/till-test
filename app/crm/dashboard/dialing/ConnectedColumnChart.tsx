import { useTheme } from "@/providers";
import { Column } from "@ant-design/charts";
import { Card } from "antd";

export const DialingConnectedColumnChart = () => {
  const { isDark } = useTheme();
  const config = {
    data: [
      { type: "Холбогдсон", value: 5, date: "2024.09.01" },
      { type: "Залгасан", value: 10, date: "2024.09.01" },
      { type: "Холбогдсон", value: 6, date: "2024.09.02" },
      { type: "Залгасан", value: 10, date: "2024.09.02" },
      { type: "Холбогдсон", value: 10, date: "2024.09.03" },
      { type: "Залгасан", value: 2, date: "2024.09.03" },
      { type: "Холбогдсон", value: 5, date: "2024.09.04" },
      { type: "Залгасан", value: 10, date: "2024.09.04" },
      { type: "Холбогдсон", value: 6, date: "2024.09.05" },
      { type: "Залгасан", value: 10, date: "2024.09.05" },
      { type: "Холбогдсон", value: 10, date: "2024.09.06" },
      { type: "Залгасан", value: 2, date: "2024.09.06" },
      { type: "Холбогдсон", value: 5, date: "2024.09.07" },
      { type: "Залгасан", value: 10, date: "2024.09.07" },
      { type: "Холбогдсон", value: 6, date: "2024.09.08" },
      { type: "Залгасан", value: 10, date: "2024.09.08" },
      { type: "Холбогдсон", value: 10, date: "2024.09.09" },
      { type: "Залгасан", value: 2, date: "2024.09.09" },
      { type: "Холбогдсон", value: 5, date: "2024.09.10" },
      { type: "Залгасан", value: 10, date: "2024.09.10" },
      { type: "Холбогдсон", value: 6, date: "2024.09.11" },
      { type: "Залгасан", value: 10, date: "2024.09.11" },
      { type: "Холбогдсон", value: 10, date: "2024.09.12" },
      { type: "Залгасан", value: 2, date: "2024.09.12" },
    ],
    xField: "date",
    yField: "value",
    colorField: "type",
    stack: true,
    interaction: {
      tooltip: {
        render: (_: any, { title, items }: any) => {
          return (
            <div key={title}>
              {items.map((item: any, index: number) => {
                const { name, value, color } = item;
                return (
                  <div key={index}>
                    <div className="m-0 flex justify-between">
                      <div>
                        <span
                          className="inline-block w-2 h-2 rounded-[50%], mr-2"
                          style={{
                            backgroundColor: color,
                          }}
                        />
                        <span>{name}</span>
                      </div>
                      <b>{value}</b>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        },
      },
    },
    theme: isDark ? "classicDark" : "classic",
  };
  return (
    <Card>
      <Column {...config} height={210} />
    </Card>
  );
};
