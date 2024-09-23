import { Button, Checkbox, DatePicker, Form, FormProps, Input, Select } from "antd";
import { useListContext } from "@/components";
import { SearchOutlined } from "@ant-design/icons";

/**
 * Loan filter
 */
export const LoanFilter = () => {
  // List context
  const { setShowFilterForm } = useListContext();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form name="basic" labelCol={{ span: 11 }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
      <Form.Item<FieldType> label="РД" name="rd" labelAlign="left">
        <Input />
      </Form.Item>
      <Form.Item<FieldType> label="Нэр" name="name" labelAlign="left">
        <Input />
      </Form.Item>
      <Form.Item<FieldType> label="Утасны дугаар" name="phoneNo" labelAlign="left">
        <Input />
      </Form.Item>
      <Form.Item<FieldType> label="Ангилал" name="type" labelAlign="left">
        <Select />
      </Form.Item>
      <Form.Item<FieldType> label="Бүтээгдэхүүн" name="product" labelAlign="left">
        <Select />
      </Form.Item>
      <Form.Item<FieldType> label="Поларис оператор" name="proOperator" labelAlign="left">
        <Select />
      </Form.Item>
      <Form.Item<FieldType> label="Зээлийн мэргэжилтэн" name="loanEmp" labelAlign="left">
        <Select />
      </Form.Item>
      <Form.Item<FieldType> label="Хариу үйлдэл" name="receiver" labelAlign="left">
        <Select />
      </Form.Item>
      <Form.Item<FieldType> label="Тохирсон огноо" name="currentDate" labelAlign="left">
        <DatePicker className="w-full" placeholder="Огноо сонгох" />
      </Form.Item>
      <Form.Item<FieldType> label="Оператор" name="operator" labelAlign="left">
        <Select />
      </Form.Item>
      <Form.Item<FieldType> label="Нөхцөл байдал" name="nowType" labelAlign="left">
        <Select />
      </Form.Item>
      <Form.Item<FieldType> label="Операторгүй" name="noOperator" labelAlign="left">
        <Checkbox />
      </Form.Item>
      <Form.Item wrapperCol={{ span: 26 }}>
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
  name?: string;
  rd?: string;
  phoneNo?: string;
  product?: string;
  type?: string;
  proOperator?: string;
  loanEmp?: string;
  receiver?: string;
  currentDate?: string;
  operator?: string;
  nowType?: string;
  noOperator?: boolean;
};
