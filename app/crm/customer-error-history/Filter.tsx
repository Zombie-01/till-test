import { Button, Form, FormProps, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useListContext } from "@/components";

/**
 * Customer's error history filter
 */
export const CustomerHistoryFilter = () => {
  // List context
  const { setShowFilterForm } = useListContext();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
      <Form.Item<FieldType> label="Файлын нэр" name="fileName">
        <Input />
      </Form.Item>
      <Form.Item<FieldType> label="Хуулсан огноо" name="date">
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
  fileName?: string;
  date?: string;
};
