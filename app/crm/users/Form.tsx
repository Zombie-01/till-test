import dayjs from "dayjs";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import { Button, Card, Col, DatePicker, Descriptions, Form, Input, Modal, Row, Select, Tag } from "antd";
import { useGroupCode, useUserForm } from "@/hooks";
import { CmmGroupCode, User } from "@/types";

const { Item } = Descriptions;

/**
 * User form
 */
export const UserForm = ({ show, close, userData }: UserFormProps) => {
  const { isPending, form, handleCloseModal, submit } = useUserForm({ userData, close });
  const { data: codeList, getCodeName } = useGroupCode([
    CmmGroupCode.departmentType,
    CmmGroupCode.positionType,
    CmmGroupCode.workStateType,
  ]);

  return (
    <Modal
      width={1040}
      open={show}
      title={userData ? "Хэрэглэгч засах" : "Шинэ хэрэглэгч үүсгэх"}
      onClose={handleCloseModal}
      onCancel={handleCloseModal}
      footer={[
        <Button disabled={isPending} key="close" icon={<CloseOutlined />} onClick={handleCloseModal}>
          Хаах
        </Button>,
        <Button loading={isPending} type="primary" key="save" icon={<CheckOutlined />} onClick={submit}>
          Хадгалах
        </Button>,
      ]}
    >
      <Form autoComplete="off" layout="vertical" form={form}>
        <Row gutter={[12, 12]}>
          <Col span={16}>
            <Card size="small">
              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item
                    label="Овог"
                    name="firstName"
                    rules={[{ required: true, message: "Энэ талбарыг заавал бөглөнө үү!" }]}
                    className="!mb-3"
                  >
                    <Input disabled={isPending} />
                  </Form.Item>
                  <Form.Item
                    label="Нэр"
                    name="lastName"
                    rules={[{ required: true, message: "Энэ талбарыг заавал бөглөнө үү!" }]}
                    className="!mb-3"
                  >
                    <Input disabled={isPending} />
                  </Form.Item>
                  <Form.Item
                    label="Хэлтэс"
                    name="departmentType"
                    rules={[{ required: true, message: "Энэ талбарыг заавал бөглөнө үү!" }]}
                    className="!mb-3"
                  >
                    <Select disabled={isPending}>
                      {codeList?.data?.[CmmGroupCode.departmentType].map((_code) => (
                        <Select.Option key={_code.dtlCode}>
                          {getCodeName(CmmGroupCode.departmentType, _code.dtlCode)}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item label="Албан тушаал" name="positionType" className="!mb-3">
                    <Select disabled={isPending}>
                      {codeList?.data?.[CmmGroupCode.positionType].map((_code) => (
                        <Select.Option key={_code.dtlCode}>
                          {getCodeName(CmmGroupCode.positionType, _code.dtlCode)}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Утасны дугаар" name="phone1" className="!mb-3">
                    <Input disabled={isPending} type="number" />
                  </Form.Item>
                  <Form.Item label="Гар утасны дугаар" name="phone2" className="!mb-3">
                    <Input disabled={isPending} type="number" />
                  </Form.Item>
                  <Form.Item label="Хөдөлмөр эрхлэлтийн ангилал" name="workStateType" className="!mb-3">
                    <Select disabled={isPending}>
                      {codeList?.data?.[CmmGroupCode.workStateType].map((_code) => (
                        <Select.Option key={_code.dtlCode}>
                          {getCodeName(CmmGroupCode.workStateType, _code.dtlCode)}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item label="Имейл" name="email" className="!mb-3">
                    <Input disabled={isPending} />
                  </Form.Item>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={8}>
            <Card size="small">
              <Form.Item
                label="Нэвтрэх нэр"
                name="username"
                rules={[{ required: true, message: "Энэ талбарыг заавал бөглөнө үү!" }]}
                className="!mb-3"
              >
                <Input disabled={isPending} />
              </Form.Item>
              <Form.Item
                label="ID хүчинтэй хугацаа"
                rules={[{ required: true, message: "Энэ талбарыг заавал бөглөнө үү!" }]}
                name="dateRange"
                className="!mb-3"
              >
                <DatePicker.RangePicker className="w-full" placeholder={["Эхлэх огноо", "Дуусах огноо"]} />
              </Form.Item>
              <Form.Item
                label="Нууц үг"
                name="password"
                className="!mb-3"
                rules={[
                  {
                    required: typeof userData === "undefined",
                    message: "Нууц үгээ давтан хийнэ үү.",
                  },
                ]}
              >
                <Input.Password disabled={isPending} />
              </Form.Item>
              <Form.Item
                label="Нууц үг давтах"
                name="verifyPassword"
                className="!mb-3"
                rules={[
                  {
                    required: typeof userData === "undefined",
                    message: "Нууц үгээ давтан хийнэ үү.",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (getFieldValue("password") !== value) {
                        return Promise.reject(new Error("Нууц үг таарахгүй байна."));
                      } else {
                        return Promise.resolve();
                      }
                    },
                  }),
                ]}
              >
                <Input.Password disabled={isPending} />
              </Form.Item>
            </Card>
          </Col>
          {/* User detail data */}
          <Col span={userData ? 24 : 0}>
            <Card size="small">
              <Descriptions column={3} size="small">
                <Item label="Ажилтны код" className="font-medium">
                  {userData?.username}
                </Item>
                <Item label="Блоклогдсон эсэх">
                  <Tag color="green">Үгүй</Tag>
                </Item>
                <Item label="Сүүлд нэвтэрсэн огноо" className="font-medium">
                  {dayjs(userData?.lastLoginAt).format("YYYY.MM.DD HH:mm")}
                </Item>
                <Item label="ERP хандалтын эрх">-</Item>
                <Item label="Гадаад хандалтын эрх">-</Item>
                <Item label="Бүртгэсэн огноо" className="font-medium">
                  {dayjs(userData?.createdAt).format("YYYY.MM.DD HH:mm")}
                </Item>
                <Item label="Бүртгэсэн хэрэглэгч" className="font-medium">
                  -
                </Item>
                <Item label="Сүүлд зассан огноо" className="font-medium">
                  {dayjs(userData?.updatedAt).format("YYYY.MM.DD HH:mm")}
                </Item>
                <Item label="Зассан хэрэглэгч" className="font-medium">
                  {userData?.updatedUserName}
                </Item>
              </Descriptions>
            </Card>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

/**
 * UserForm props type
 */
interface UserFormProps {
  show: boolean;
  close: () => void;
  userData?: User;
}
