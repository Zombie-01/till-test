import { Button, DatePicker, Form, FormProps, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useListContext } from "@/components";

/**
 * Dialed's history filter
 */
export const DialedHistoryFilter = () => {
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
      <Form.Item<FieldType> label="Харилцагчийн төрөл" name="customerType">
        <Input />
      </Form.Item>
      <Form.Item<FieldType> label="Нэр" name="name">
        <Input />
      </Form.Item>
      <Form.Item<FieldType> label="Огноо" name="date">
        <DatePicker className="w-full" placeholder="Огноо сонгох" />
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
  customerType?: string;
  name?: string;
  date?: string[];
};
