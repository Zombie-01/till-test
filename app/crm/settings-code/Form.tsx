import { Button, Card, Form, Input, Modal, Select } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

/**
 * Code form
 */
export const SettingsCodeForm = ({ show, close, formData }: CodeFormProps) => {
  const [form] = Form.useForm();

  const submit = () => {
    form.validateFields().then((data) => console.log(data));
  };

  return (
    <Modal
      title={formData ? "Код засах" : "Шинэ код үүсгэх"}
      footer={[
        <Button key="close" icon={<CloseOutlined />} onClick={close}>
          Хаах
        </Button>,
        <Button type="primary" key="save" icon={<CheckOutlined />} onClick={submit}>
          Хадгалах
        </Button>,
      ]}
      open={show}
      onClose={close}
      onCancel={close}
      width={400}
    >
      <Card size="small">
        <Form autoComplete="off" layout="vertical" form={form}>
          <Form.Item label="GROUP_CODE" name="GROUP_CODE" required className="!mb-3">
            <Input disabled={!!formData} />
          </Form.Item>
          <Form.Item label="GROUP_NAME" name="GROUP_NAME" required className="!mb-3">
            <Input />
          </Form.Item>
          <Form.Item label="GROUP_NAME /EN/" name="GROUP_NAME_EN" className="!mb-3">
            <Input />
          </Form.Item>
          <Form.Item label="GROUP_NAME /KR/" name="GROUP_NAME_KR" className="!mb-3">
            <Input />
          </Form.Item>
          <Form.Item label="Идэвхтэй эсэх" name="USE_YN" className="!mb-3">
            <Select />
          </Form.Item>
          <Form.Item label="CODE_SORT" name="CODE_SORT" className="!mb-3">
            <Input />
          </Form.Item>
        </Form>
      </Card>
    </Modal>
  );
};

interface CodeFormProps {
  show: boolean;
  close: () => void;
  formData: any;
}
