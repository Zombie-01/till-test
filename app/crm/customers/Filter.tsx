import { useListContext } from "@/components";
import { Button, Checkbox, DatePicker, Divider, Form, FormProps, Input, Select, SelectProps } from "antd";
import { useTranslations } from "next-intl";

/**
 * Customers filter
 */
export const CustomersFilter = () => {
  // Translation
  const t = useTranslations("common");
  const tc = useTranslations("customer");

  // List context
  const { setShowFilterForm, setFilters } = useListContext();

  type FieldType = {
    name?: string;
    rd?: string;
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const options: SelectProps["options"] = [];
  options.push({ label: "Авто машины зээл", value: "1" });
  options.push({ label: "Том Авто машины зээл", value: "2" });
  options.push({ label: "Хэрэглээний зээл", value: "3" });

  const options1: SelectProps["options"] = [];
  options1.push({ label: "Бүрэндэлгэр", value: "1" });
  options1.push({ label: "Даваасүрэн", value: "2" });
  options1.push({ label: "Марал", value: "3" });

  const sampleFilters = [
    {
      filterName: "Оператор",
      filterField: "Operator",
      items: [{ id: "active", name: "Даваасүрэн" }],
    },
    {
      filterName: "Бүтээгдэхүүн",
      filterField: "Product",
      items: [
        { id: "admin", name: "Авто машины зээл" },
        { id: "user", name: "Хэрэглээний зээл" },
      ],
    },
  ];

  return (
    <Form
      name="basic"
      wrapperCol={{ span: 26 }}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item<FieldType> label={t("name")} name="name">
        <Input />
      </Form.Item>

      <Form.Item<FieldType> label={tc("rd")} name="rd">
        <Input />
      </Form.Item>

      <Form.Item name="gender" label="Бүтээгдэхүүн">
        <Select mode="multiple" style={{ width: "100%" }} defaultValue={["Авто машины зээл"]} options={options} />
      </Form.Item>

      <Divider />

      <Form.Item<FieldType> label={"Огноо"}>
        <DatePicker />
      </Form.Item>

      <Form.Item<FieldType> label={"Оператор"}>
        <Checkbox>Операторгүй</Checkbox>
      </Form.Item>

      <Form.Item name="operator" label="Оператор">
        <Select mode="multiple" style={{ width: "100%" }} defaultValue={[]} options={options1} />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 26 }}>
        <Button
          type="primary"
          block
          onClick={() => {
            setFilters(sampleFilters);
            setShowFilterForm(false);
          }}
        >
          Хайх
        </Button>
      </Form.Item>
    </Form>
  );
};
