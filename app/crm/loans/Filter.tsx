import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  FormProps,
  Input,
  Select,
} from "antd";
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

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 11 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType> label="Дөхөлт огноо" name="col1" labelAlign="left">
        <DatePicker className="w-full" placeholder="Дөхөлт сонгох" />
      </Form.Item>
      <Form.Item<FieldType> label="Орох хил" name="col2" labelAlign="left">
        <Input />
      </Form.Item>
      <Form.Item<FieldType> label="Ирэх / явах" name="col3" labelAlign="left">
        <Select />
      </Form.Item>
      <Form.Item<FieldType>
        label="Чингэлэг дугаар"
        name="col4"
        labelAlign="left"
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType> label="Даац" name="col5" labelAlign="left">
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Хоосон / ачаатай"
        name="col6"
        labelAlign="left"
      >
        <Select />
      </Form.Item>
      <Form.Item<FieldType> label="Зарах эсэх" name="col7" labelAlign="left">
        <Select />
      </Form.Item>
      <Form.Item<FieldType> label="Зууч код" name="col8" labelAlign="left">
        <Input />
      </Form.Item>
      <Form.Item<FieldType> label="Байх №" name="col9" labelAlign="left">
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Талбайд задарсан"
        name="col10"
        labelAlign="left"
      >
        <Select />
      </Form.Item>
      <Form.Item<FieldType>
        label="Талбайд ирсэн"
        name="col11"
        labelAlign="left"
      >
        <Select />
      </Form.Item>
      <Form.Item<FieldType> label="Задарсан" name="col12" labelAlign="left">
        <Select />
      </Form.Item>
      <Form.Item<FieldType> label="Суларсан" name="col13" labelAlign="left">
        <Select />
      </Form.Item>
      <Form.Item<FieldType>
        label="Талбайгаас явсан"
        name="col14"
        labelAlign="left"
      >
        <Select />
      </Form.Item>
      <Form.Item<FieldType> label="Буцаж ирсэн" name="col15" labelAlign="left">
        <Select />
      </Form.Item>
      <Form.Item<FieldType> label="Ачилт хийсэн" name="col16" labelAlign="left">
        <Select />
      </Form.Item>
      <Form.Item<FieldType>
        label="Талбайд ирсэнээс хойш"
        name="col17"
        labelAlign="left"
      >
        <Select />
      </Form.Item>
      <Form.Item<FieldType>
        label="Задарснаас хойш суларсан"
        name="col18"
        labelAlign="left"
      >
        <Select />
      </Form.Item>
      <Form.Item<FieldType>
        label="Задарснаас хойш талбайгаас явсан"
        name="col19"
        labelAlign="left"
      >
        <Select />
      </Form.Item>
      <Form.Item<FieldType>
        label="Суларсанаас хойш ачилт хийсэн"
        name="col20"
        labelAlign="left"
      >
        <Select />
      </Form.Item>
      <Form.Item<FieldType>
        label="Буцаж ирсэнээс хойш ачилт хийсэн"
        name="col21"
        labelAlign="left"
      >
        <Select />
      </Form.Item>
      <Form.Item<FieldType>
        label="Операторгүй"
        name="noOperator"
        labelAlign="left"
      >
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
  col1?: string;
  col2?: string;
  col3?: string;
  col4?: string;
  col5?: string;
  col6?: string;
  col7?: string;
  col8?: string;
  col9?: string;
  col10?: string;
  col11?: string;
  col12?: string;
  col13?: string;
  col14?: string;
  col15?: string;
  col16?: string;
  col17?: string;
  col18?: string;
  col19?: string;
  col20?: string;
  col21?: string;

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
