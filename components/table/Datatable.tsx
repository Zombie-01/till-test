import { Table, TableProps, TableColumnsType, Button, Space, Popconfirm, PopconfirmProps, notification } from "antd";
import { FaRegPenToSquare, FaXmark } from "react-icons/fa6";
import React, { useMemo } from "react";
import { useWindowSize } from "@/hooks";

const Context = React.createContext({ name: "Default" });

/**
 * Data table
 */
export const Datatable = <T extends Record<string, any>>({
  columns,
  hideDeleteButton,
  hideEditButton,
  onEdit,
  onDeleteConfirm,
  children,
  ...props
}: DatatableProps<T>) => {
  // Form context
  const [api, contextHolder] = notification.useNotification();
  const contextValue = useMemo(() => ({ name: "Ant Design" }), []);
  const size = useWindowSize();

  // Delete confirmation
  const confirm: PopconfirmProps["onConfirm"] = () => {
    api.success({
      message: "Deletion",
      description: "Successfully deleted",
    });
  };

  // Add edit button for each row
  let extendedColumns: TableColumnsType<T> = columns;

  if (!hideDeleteButton || !hideEditButton) {
    extendedColumns = [
      ...columns,
      {
        title: "",
        key: "operation",
        fixed: size.width < 768 ? false : "right",
        width: hideEditButton || hideDeleteButton ? 45 : 90,
        render: (_, record) => (
          <Space>
            {!hideEditButton && (
              <Button
                icon={<FaRegPenToSquare />}
                type="text"
                onClick={() => {
                  onEdit && onEdit(record);
                }}
              />
            )}
            {!hideDeleteButton && (
              <Popconfirm
                title="Анхааруулга"
                description="Та усгахдаа итгэлтэй байна уу?"
                onConfirm={() => onDeleteConfirm && onDeleteConfirm(record)}
                okText="Тийм"
                cancelText="Үгүй"
                okButtonProps={{ danger: true }}
                placement="left"
              >
                <Button icon={<FaXmark />} type="text" danger />
              </Popconfirm>
            )}
          </Space>
        ),
      },
    ];
  }

  // Render
  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
      {/* Table */}
      <Table
        columns={extendedColumns}
        rowSelection={{
          type: "checkbox",
        }}
        size="small"
        scroll={{ x: 1500 }}
        bordered
        {...props}
      >
        {children}
      </Table>
    </Context.Provider>
  );
};

export default Datatable;

/**
 * Data table props
 */
export interface DatatableProps<T> extends Omit<TableProps<T>, "columns"> {
  columns: TableColumnsType<T>;

  // Edit
  hideEditButton?: boolean;
  onEdit?: (record: Record<string, any>) => void;

  //
  hideDeleteButton?: boolean;
  onDeleteConfirm?: (record: Record<string, any>) => void;
}
