import { Button, Form, FormProps, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useListContext } from "@/components";

/**
 * Code filter
 */
export const SettingsCodeFilter = () => {
  // List context
  const { setShowFilterForm } = useListContext();

  // Functions
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
      <Form.Item<FieldType> label="Эрхийн код" name="roleCode">
        <Input />
      </Form.Item>
      <Form.Item<FieldType> label="Эрхийн нэр" name="roleName">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          size="large"
          block
          icon={<SearchOutlined />}
          onClick={() => {
            setShowFilterForm(false);
          }}
        >
          Хайх
        </Button>
      </Form.Item>
    </Form>
  );
};

type FieldType = {
  roleCode?: string;
  roleName?: string;
};
