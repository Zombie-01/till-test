import { CmmGroupCode } from "@/types";
import { Datatable } from "@/components";
import { useDtlCodes, useGroupCode } from "@/hooks";

export const SettingsCodeDtlTable = ({ onEdit, grpCode }: { onEdit: (codeItem: any) => void; grpCode: string }) => {
  const { data } = useDtlCodes({ grpCode });
  const { getCodeName } = useGroupCode([CmmGroupCode.YN]);
  return (
    <Datatable
      dataSource={data?.content ?? []}
      onEdit={onEdit}
      rowKey="dtlCode"
      hideDeleteButton
      pagination={false}
      scroll={{ y: 240 }}
      columns={[
        {
          title: "Д/д",
          dataIndex: "index",
          key: "index",
          width: 80,
          align: "center",
          render: (_, __, index) => index + 1,
        },
        {
          title: "DTL_CODE",
          dataIndex: "dtlCode",
          key: "dtlCode",
        },
        {
          title: "DTL_NAME",
          dataIndex: "dtlName",
          key: "dtlName",
        },
        {
          title: "CODE_SORT",
          dataIndex: "sort",
          key: "sort",
        },
        {
          title: "Хэрэглэх эсэх",
          dataIndex: "useYN",
          key: "useYN",
          render: (_value) => getCodeName(CmmGroupCode.YN, _value),
        },
      ]}
    />
  );
};
