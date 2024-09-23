import { SearchOutlined } from "@ant-design/icons";
import { Button, Card, DatePicker, Form, Space } from "antd";

export const CustomerDashboardFilter = () => {
  return (
    <Card size="small">
      <Form layout="vertical">
        <Space>
          <Form.Item label="Өдөр" required className="!mb-0">
            <DatePicker.RangePicker className="w-full" placeholder={["Эхлэх огноо", "Дуусах огноо"]} />
          </Form.Item>
          <Form.Item className="!mt-[30px] !mb-0">
            <Button type="primary" icon={<SearchOutlined />}>
              Хайх
            </Button>
          </Form.Item>
        </Space>
      </Form>
    </Card>
  );
};
