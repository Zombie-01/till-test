import { Datatable } from "@/components";
import { useGroupCode, useRoles } from "@/hooks";
import { CmmGroupCode } from "@/types";

export const SettingsRoleTable = ({ onEdit }: { onEdit: (roleItem: any) => void }) => {
  const { data, isLoading } = useRoles();
  const { getCodeName } = useGroupCode([CmmGroupCode.YN]);
  return (
    <Datatable
      dataSource={data}
      loading={isLoading}
      onEdit={onEdit}
      rowKey="id"
      hideDeleteButton
      rowSelection={undefined}
      columns={[
        {
          title: "Д/д",
          dataIndex: "id",
          key: "id",
          width: 50,
        },
        {
          title: "Бүртгэсэн огноо",
          dataIndex: "createdAt",
          key: "createdAt",
        },
        {
          title: "Бүртгэсэн хэрэглэгч",
          dataIndex: "createdUserName",
          key: "createdUserName",
        },
        {
          title: "Эрхийн код",
          dataIndex: "roleCode",
          key: "roleCode",
        },
        {
          title: "Эрхийн нэр",
          dataIndex: "roleName",
          key: "roleName",
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
