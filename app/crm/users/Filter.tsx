import { SearchOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select } from "antd";
import { useUserFilter } from "@/hooks";
import { GetUserListParams } from "@/types";

/**
 * Users filter
 */
export const UsersFilter = () => {
  const { form, codeList, isLoading, getCodeName, handleFilter } = useUserFilter();

  return (
    <Form layout="vertical" onFinish={handleFilter} autoComplete="off" form={form}>
      <Form.Item<GetUserListParams> label="Ажилтны нэр" name="name">
        <Input />
      </Form.Item>
      <Form.Item<GetUserListParams> label="Хэлтэс" name="departmentType">
        <Select disabled={isLoading}>
          {codeList?.data?.["COM120"].map((_code) => (
            <Select.Option key={_code.dtlCode}>{getCodeName("COM120", _code.dtlCode)}</Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item<GetUserListParams> label="Хөдөлмөр эрхлэлтийн ангилал" name="workStateType">
        <Select disabled={isLoading}>
          {codeList?.data?.["COM122"].map((_code) => (
            <Select.Option key={_code.dtlCode}>{getCodeName("COM122", _code.dtlCode)}</Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" size="large" block htmlType="submit" icon={<SearchOutlined />}>
          Хайх
        </Button>
      </Form.Item>
    </Form>
  );
};
