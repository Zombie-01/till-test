import { Datatable } from "@/components";
import { useTranslations } from "next-intl";

/**
 * Customer's error history datatable
 */
export const CustomerHistoryTable = () => {
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
          title: "Өдөр",
          dataIndex: "date",
          key: "date",
        },
        {
          title: "Файлын нэр",
          dataIndex: "fileName",
          key: "fileName",
        },
        {
          title: "Алдааны мессеж",
          dataIndex: "errorMessage",
          key: "errorMessage",
        },
        {
          title: "Алдааны мөр",
          dataIndex: "errorRow",
          key: "errorRow",
        },
      ]}
    />
  );
};
