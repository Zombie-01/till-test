import { SearchOutlined } from "@ant-design/icons";
import { Button, Card, DatePicker, Form, Select, Space } from "antd";

export const DialingDashboardFilter = () => {
  return (
    <Card size="small">
      <Form layout="vertical">
        <Space>
          <Form.Item label="Өдөр" required className="!mb-0">
            <DatePicker.RangePicker className="w-full" placeholder={["Эхлэх огноо", "Дуусах огноо"]} />
          </Form.Item>
          <Form.Item label="Оператор" required className="w-[144px] !mb-0">
            <Select defaultValue="1">
              <Select.Option key="all">Бүгд</Select.Option>
              <Select.Option key="1">Оюунжаргал</Select.Option>
              <Select.Option key="2">Пүрэвдулам</Select.Option>
            </Select>
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
