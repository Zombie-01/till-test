import { Button, Card, Form, Input, Modal } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

/**
 * User form
 */
export const PasswordForm = ({ show, close }: PasswordFormProps) => {
  const [form] = Form.useForm();

  const submit = () => {
    form.validateFields().then((data) => console.log(data));
  };

  return (
    <Modal
      title="Нууц үг солих"
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
      <Card>
        <Form autoComplete="off" layout="vertical" form={form}>
          <Form.Item label="Хуучин нууц үг" name="oldPassword" required>
            <Input.Password placeholder="Хуучин нууц үгээ оруулна уу." />
          </Form.Item>
          <Form.Item label="Шинэ нууц үг" name="newPassword" required>
            <Input.Password placeholder="Шинэ нууц үгээ оруулна уу." />
          </Form.Item>
          <Form.Item label="Шинэ нууц үг давтах" name="repeatPassword" required>
            <Input.Password placeholder="Шинэ нууц үгээ давтан оруулна уу." />
          </Form.Item>
        </Form>
      </Card>
    </Modal>
  );
};

interface PasswordFormProps {
  show: boolean;
  close: () => void;
}
