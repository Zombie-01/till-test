import { Button, Form, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useRoleFilter } from "@/hooks";
import { GetRoleListParams } from "@/types";

/**
 * Role filter
 */
export const SettingsRoleFilter = () => {
  const { form, handleFilter } = useRoleFilter();

  return (
    <Form layout="vertical" form={form} onFinish={handleFilter} autoComplete="off">
      <Form.Item<GetRoleListParams> label="Эрхийн код" name="roleCode">
        <Input />
      </Form.Item>
      <Form.Item<GetRoleListParams> label="Эрхийн нэр" name="roleName">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" size="large" block htmlType="submit" icon={<SearchOutlined />}>
          Хайх
        </Button>
      </Form.Item>
    </Form>
  );
};
