import { Button, DatePicker, Form, FormProps, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useListContext } from "@/components";

/**
 * Dialed's all history filter
 */
export const DialedAllHistoryFilter = () => {
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
      <Form.Item<FieldType> label="Харилцагчийн дугаар" name="cusomerNo">
        <Input />
      </Form.Item>
      <Form.Item<FieldType> label="Утасны дугаар" name="phoneNo">
        <Input />
      </Form.Item>
      <Form.Item<FieldType> label="Огноо" name="dateRange">
        <DatePicker.RangePicker className="w-full" placeholder={["Эхлэх огноо", "Дуусах огноо"]} />
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
  cusomerNo?: string;
  phoneNo?: string;
  dateRange?: string[];
};
