import { Form, FormProps, Modal, Select, SelectProps } from "antd";
import { useEffect } from "react";

/**
 * Customers form
 */
export const CustomersForm = ({ show, close, formData }: CustomersFormProps) => {
  // Translation
  const [form] = Form.useForm<FormType>();

  const onFinish: FormProps<FormType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FormType>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const options: SelectProps["options"] = [];
  options.push({ label: "Бүрэндэлгэр", value: "1" });
  options.push({ label: "Даваасүрэн", value: "2" });
  options.push({ label: "Марал", value: "3" });

  useEffect(() => {
    if (formData) {
      form.setFields([
        { name: "name", value: formData?.name },
        { name: "rd", value: formData?.rd },
      ]);
    }
  }, [formData, form]);

  return (
    <Modal
      title={formData ? "Харилцагчийн мэдээлэл засах" : "Шинээр харилцагч үүсгэх"}
      open={show}
      onClose={close}
      onCancel={close}
    >
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 26 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item name="gender" label="Оператор" rules={[{ required: true }]}>
          <Select
            // mode="multiple"
            // disabled
            style={{ width: "100%" }}
            placeholder=""
            // defaultValue={["Авто машины зээл"]}
            // onChange={handleChange}
            options={options}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

interface CustomersFormProps {
  show: boolean;
  close: () => void;
  formData: any;
}

type FormType = {
  name?: string;
  rd?: string;
};
