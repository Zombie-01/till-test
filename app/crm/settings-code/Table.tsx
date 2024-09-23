import { Datatable } from "@/components";
import { useCodes, useGroupCode } from "@/hooks";
import { CmmCode, CmmGroupCode } from "@/types";

interface SettingsCodeTableProps {
  onEdit: (codeItem: any) => void;
  onSelectRow: (codeItem: CmmCode) => void;
  selectedGrp?: CmmCode;
}

export const SettingsCodeTable = ({ onEdit, onSelectRow, selectedGrp }: SettingsCodeTableProps) => {
  const { data, isLoading } = useCodes();
  const { getCodeName } = useGroupCode([CmmGroupCode.YN]);

  return (
    <Datatable
      dataSource={data}
      loading={isLoading}
      onEdit={onEdit}
      rowKey="grpCode"
      hideDeleteButton
      pagination={false}
      scroll={{ y: 240 }}
      rowSelection={{ onChange: (_, row) => onSelectRow(row[0]), type: "radio" }}
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
          title: "GROUP_CODE",
          dataIndex: "grpCode",
          key: "grpCode",
        },
        {
          title: "GROUP_NAME",
          dataIndex: "grpName",
          key: "grpName",
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
