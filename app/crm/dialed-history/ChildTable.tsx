import { Datatable } from "@/components";
import { useTranslations } from "next-intl";

/**
 * Dialed's history datatable
 */
export const DialedHistoryChildTable = () => {
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
          title: "Оператор",
          dataIndex: "date",
          key: "date",
        },
        {
          title: "Тайлбар",
          dataIndex: "fileNo",
          key: "fileNo",
        },
        {
          title: "Хариу үйлдэл",
          dataIndex: "errorMessage",
          key: "errorMessage",
        },
        {
          title: "Нөхцөл байдал",
          dataIndex: "errorRow",
          key: "errorRow",
        },
        {
          title: "Огноо",
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
