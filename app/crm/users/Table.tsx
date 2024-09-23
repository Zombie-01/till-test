import { CmmGroupCode } from "@/types";
import { Datatable } from "@/components";
import { useGroupCode, useUsers } from "@/hooks";

export const UsersTable = ({ onEdit }: { onEdit: (userItem: any) => void }) => {
  const { data, isLoading, pagination, deleteUser } = useUsers();
  const { getCodeName } = useGroupCode([
    CmmGroupCode.departmentType,
    CmmGroupCode.positionType,
    CmmGroupCode.workStateType,
  ]);
  return (
    <Datatable
      loading={isLoading}
      dataSource={data?.content ?? []}
      onEdit={onEdit}
      onDeleteConfirm={(e) => deleteUser(e.id)}
      pagination={pagination}
      rowSelection={undefined}
      rowKey="id"
      columns={[
        { title: "Нэвтрэх нэр", dataIndex: "username", key: "username", width: 150 },
        {
          title: "Ажилтны нэр",
          dataIndex: "firstName",
          key: "firstName",
          width: 150,
        },
        {
          title: "Хэлтэсийн нэр",
          dataIndex: "departmentType",
          key: "departmentType",
          width: 150,
          render: (_value) => getCodeName(CmmGroupCode.departmentType, _value),
        },
        {
          title: "Албан тушаал",
          dataIndex: "positionType",
          key: "positionType",
          render: (_value) => getCodeName(CmmGroupCode.positionType, _value),
        },
        { title: "Дотоод утас", dataIndex: "phone1", key: "phone1", width: 120 },
        { title: "Имейл", dataIndex: "email", key: "email" },
        {
          title: "Хөдөлмөр эрхлэлтийн ангилал",
          dataIndex: "workStateType",
          key: "workStateType",
          render: (_value) => getCodeName(CmmGroupCode.workStateType, _value),
        },
      ]}
    />
  );
};
