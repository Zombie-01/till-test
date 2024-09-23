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
      fixed: size.width < 768 ? false : "left",
    },
    {
      title: t("operator"),

      dataIndex: "operator",
      key: "operator",
      render: (text) => <a>{text}</a>,
      sorter: (a, b) => a.operator.localeCompare(b.operator),
      fixed: size.width < 768 ? false : "left",
    },
    { title: "Бүтээгдэхүүн", dataIndex: "col1", key: "col1", render: () => "-" },
    { title: t("name"), dataIndex: "col2", key: "col2", render: () => "-" },
    { title: tc("rd"), dataIndex: "col3", key: "col3", render: () => "-" },
    { title: "Хариу үйлдэл", dataIndex: "col4", key: "col4", render: () => "-" },
    { title: "Тохирсон огноо", dataIndex: "col5", key: "col5", render: () => "-" },
    // { title: "Үндсэн зээлийн х.хэтэрсэн хоног", dataIndex: "col6", key: "col6", width: 150 },
    // { title: "Хүүний х.хэтэрсэн хоног", dataIndex: "col7", key: "col7", width: 150 },
    // { title: "Дуусах өдөр", dataIndex: "col8", key: "col8", width: 200 },
    // { title: "Сүүлд холбогдсон өдөр", dataIndex: "col9", key: "col9", width: 150 },
    // { title: t("operator"), width: 150, dataIndex: "col10", key: "col10" },
    // { title: "Ангилал", width: 150, dataIndex: "col11", key: "col12" },
    // { title: "Зээлийн мэргэжилтэн", width: 150, dataIndex: "col13", key: "col13" },
    // { title: "Зээл олгосон огноо", width: 150, dataIndex: "col14", key: "col14" },
    // { title: "Зөрүү огноо", width: 150, dataIndex: "col15", key: "col15" },
    // { title: "Зээлийн хэмжээ", width: 150, dataIndex: "col16", key: "col16" },
    // { title: "Үндсэн зээлийн үлдэгдэл", width: 150, dataIndex: "col17", key: "col17" },
    // { title: "Хүүний зөрүү", width: 150, dataIndex: "col18", key: "col18" },
    // { title: "Эргэн төлөгдөх хэмжээ", width: 150, dataIndex: "col19", key: "col19" },
    // { title: "Нийт өр", width: 150, dataIndex: "col20", key: "col20" },
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
