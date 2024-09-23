import { Datatable } from "@/components";
import { useTranslations } from "next-intl";

/**
 * Dialed's all history datatable
 */
export const DialedAllHistoryTable = () => {
  // Translation
  const t = useTranslations("common");

  // Render
  return (
    <Datatable
      dataSource={[]}
      hideDeleteButton
      hideEditButton
      columns={[
        {
          title: t("seq_no"),
          dataIndex: "seq_no",
          key: "seq_no",
        },
        {
          title: "Огноо",
          dataIndex: "date",
          key: "date",
        },
        {
          title: "Харилцагчийн дугаар",
          dataIndex: "fileNo",
          key: "fileNo",
        },
        {
          title: "Төлөв",
          dataIndex: "errorMessage",
          key: "errorMessage",
        },
        {
          title: "Илгээгч",
          dataIndex: "errorRow",
          key: "errorRow",
        },
        {
          title: "Хүлээн авагч",
          dataIndex: "errorRow",
          key: "errorRow",
        },
        {
          title: "Оператор",
          dataIndex: "errorRow",
          key: "errorRow",
        },
        {
          title: "Мессеж",
          dataIndex: "errorRow",
          key: "errorRow",
        },
        {
          title: "Тайлбар",
          dataIndex: "errorRow",
          key: "errorRow",
        },
        {
          title: "Хариу үйлдэл",
          dataIndex: "errorRow",
          key: "errorRow",
        },
        {
          title: "Нөхцөл байдал",
          dataIndex: "errorRow",
          key: "errorRow",
        },
        {
          title: "Тохирсон огноо",
          dataIndex: "errorRow",
          key: "errorRow",
        },
        {
          title: "Эргэн төлөгдөх хэмжээ",
          dataIndex: "errorRow",
          key: "errorRow",
        },
      ]}
    />
  );
};
