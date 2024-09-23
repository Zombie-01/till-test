import { Button, Card, Descriptions, Form, Input, Modal, Select } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import { useEffect } from "react";

/**
 * Code detail form
 */
export const SettingsCodeDtlForm = ({ show, close, formData }: CodeFormProps) => {
  const [form] = Form.useForm();

  const submit = () => {
    form.validateFields().then((data) => console.log(data));
  };

  useEffect(() => {
    if (formData) {
      form.setFields([
        { name: "DTL_CODE", value: formData.DTL_CODE },
        { name: "DTL_NAME", value: formData.DTL_NAME },
        { name: "DTL_CODE_EN", value: formData.DTL_CODE_EN },
        { name: "DTL_CODE_KR", value: formData.DTL_CODE_KR },
        { name: "USE_YN", value: formData.USE_YN },
        { name: "CODE_SORT", value: formData.CODE_SORT },
      ]);
    }
  }, [formData, form]);

  return (
    <Modal
      title={formData ? "Код засах (DTL_CODE)" : "Шинэ код үүсгэх (DTL_CODE)"}
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
        <Descriptions column={1}>
          <Descriptions.Item label="GROUP_CODE" className="font-bold">
            COM101
          </Descriptions.Item>
          <Descriptions.Item label="GROUP_NAME" className="font-bold">
            Үйл ажиллагааны чиглэл
          </Descriptions.Item>
        </Descriptions>
      </Card>
      <Card size="small" className="!mt-3">
        <Form autoComplete="off" layout="vertical" form={form}>
          <Form.Item label="DTL_CODE" name="DTL_CODE" required className="!mb-3">
            <Input />
          </Form.Item>
          <Form.Item label="DTL_NAME" name="DTL_NAME" required className="!mb-3">
            <Input />
          </Form.Item>
          <Form.Item label="DTL_CODE /EN/" name="DTL_CODE_EN" className="!mb-3">
            <Input />
          </Form.Item>
          <Form.Item label="DTL_CODE /KR/" name="DTL_CODE_KR" className="!mb-3">
            <Input />
          </Form.Item>
          <Form.Item label="Идэвхтэй эсэх" name="USE_YN" className="!mb-3">
            <Select>
              <Select.Option key="Y">Тийм</Select.Option>
              <Select.Option key="N">Үгүй</Select.Option>
            </Select>
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
