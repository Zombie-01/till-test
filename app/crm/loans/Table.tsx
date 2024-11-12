import { useTranslations } from "next-intl";
import { Flex, TableColumnsType } from "antd";
import { useWindowSize } from "@/hooks";
import { Datatable } from "@/components";

/**
 * Loan datatable
 */
export const LoanTable = ({ onEdit }: { onEdit: (listItem: any) => void }) => {
  // Window size
  const size = useWindowSize();

  // Translation
  const t = useTranslations("common");
  const tc = useTranslations("customer");

  // Columns
  const columns: TableColumnsType<DataType> = [
    {
      title: t("seq_no"),
      width: 70,
      dataIndex: "seq_no",
      key: "seq_no",
      render: (text) => <Flex justify="center">{text}</Flex>,
      sorter: (a, b) => a.seq_no - b.seq_no,
    },
    {
      title: t("operator"),
      dataIndex: "operator",
      key: "operator",
      width: 150,
      render: (text) => <a>{text}</a>,
      sorter: (a, b) => a.operator.localeCompare(b.operator),
    },
    {
      title: "Дөхөлт огноо",
      dataIndex: "col1",
      key: "col1",
      width: 150,
      render: () => "-",
    },
    {
      title: "Орох хил",
      dataIndex: "col2",
      key: "col2",
      width: 150,
      render: () => "-",
    },
    {
      title: "Ирэх / явах",
      dataIndex: "col3",
      key: "col3",
      width: 100,
      render: () => "-",
    },
    {
      title: "Чингэлэг дугаар",
      dataIndex: "col4",
      key: "col4",
      width: 150,
      render: () => "-",
    },
    {
      title: "Даац",
      dataIndex: "col5",
      key: "col5",
      width: 150,
      render: () => "-",
    },
    {
      title: "Хоосон / ачаатай",
      dataIndex: "col6",
      key: "col6",
      width: 100,
    },
    {
      title: "Зарах эсэх",
      dataIndex: "col7",
      key: "col7",
      width: 100,
    },
    { title: "Зууч код", dataIndex: "col8", key: "col8", width: 200 },
    { title: "Байх №", dataIndex: "col9", key: "col9", width: 150 },
    { title: "Талбайд задарсан", width: 150, dataIndex: "col10", key: "col10" },
    { title: "Талбайд ирсэн", width: 150, dataIndex: "col11", key: "col12" },
    { title: "Задарсан", width: 150, dataIndex: "col13", key: "col13" },
    { title: "Суларсан", width: 150, dataIndex: "col14", key: "col14" },
    { title: "Талбайгаас явсан", width: 150, dataIndex: "col15", key: "col15" },
    { title: "Буцаж ирсэн", width: 150, dataIndex: "col16", key: "col16" },
    { title: "Ачилт хийсэн", width: 150, dataIndex: "col17", key: "col17" },
    {
      title: "Талбайд ирсэнээс хойш",
      width: 150,
      dataIndex: "col18",
      key: "col18",
    },
    {
      title: "Задарснаас хойш суларсан",
      width: 150,
      dataIndex: "col19",
      key: "col19",
    },
    {
      title: "Задарснаас хойш талбайгаас явсан",
      width: 150,
      dataIndex: "col20",
      key: "col20",
    },
    {
      title: "Суларсанаас хойш ачилт хийсэн",
      width: 150,
      dataIndex: "col21",
      key: "col21",
    },
    {
      title: "Буцаж ирсэнээс хойш ачилт хийсэн",
      width: 150,
      dataIndex: "col22",
      key: "col22",
    },
  ];

  // Render
  return (
    <Datatable
      hideDeleteButton
      columns={columns}
      onEdit={onEdit}
      dataSource={Array(10)
        .fill("")
        .map((_, i) => ({ key: i + 1, seq_no: i + 1, operator: "test " + i }))}
    />
  );
};

interface DataType {
  key: React.Key;
  seq_no: number;
  operator: string;
}
