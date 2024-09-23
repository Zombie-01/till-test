import { Datatable } from "@/components";
import { useTranslations } from "next-intl";

/**
 * Dialed's history datatable
 */
export const DialedHistoryTable = () => {
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
          title: "Харилцагчийн дугаар",
          dataIndex: "date",
          key: "date",
        },
        {
          title: "Нэр",
          dataIndex: "fileNo",
          key: "fileNo",
        },
        {
          title: "Залгасан эсэх",
          dataIndex: "errorMessage",
          key: "errorMessage",
        },
        {
          title: "Зээлийн хэмжээ",
          dataIndex: "errorRow",
          key: "errorRow",
        },
        {
          title: "Үндсэн зээлийн х.хэтэрсэн хэмжээ",
          dataIndex: "errorRow",
          key: "errorRow",
        },
      ]}
    />
  );
};
