import { Button, Card, Col, Descriptions, Form, Input, Modal, Row, Select } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import { useGroupCode, useRoleForm } from "@/hooks";
import { CmmGroupCode, Role } from "@/types";

const { Item } = Descriptions;

/**
 * Role form
 */
export const SettingsRoleForm = ({ show, close, roleData }: RoleFormProps) => {
  const { data: codeList, getCodeName } = useGroupCode([CmmGroupCode.YN]);
  const { form, handleCloseModal, isPending, submit } = useRoleForm({ close, roleData });

  return (
    <Modal
      title={roleData ? "Эрх засах" : "Шинэ эрх үүсгэх"}
      footer={[
        <Button key="close" icon={<CloseOutlined />} onClick={handleCloseModal}>
          Хаах
        </Button>,
        <Button type="primary" key="save" icon={<CheckOutlined />} onClick={submit}>
          Хадгалах
        </Button>,
      ]}
      open={show}
      onClose={handleCloseModal}
      onCancel={handleCloseModal}
      width={400}
    >
      <Row gutter={[12, 12]}>
        <Col span={24}>
          <Card size="small">
            <Form autoComplete="off" layout="vertical" form={form}>
              <Form.Item label="Эрхийн код" name="roleCode" required className="!mb-3">
                <Input disabled={!!roleData || isPending} />
              </Form.Item>
              <Form.Item label="Эрхийн нэр" name="roleName" required className="!mb-3">
                <Input disabled={isPending} />
              </Form.Item>
              <Form.Item label="Идэвхтэй эсэх" name="useYN" required className="!mb-3">
                <Select disabled={isPending}>
                  {codeList?.data?.[CmmGroupCode.YN].map((_code) => (
                    <Select.Option key={_code.dtlCode}>{getCodeName(CmmGroupCode.YN, _code.dtlCode)}</Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col span={roleData ? 24 : 0}>
          <Card size="small">
            <Descriptions column={1} size="small">
              <Item label="Сүүлд зассан огноо" className="font-bold">
                {roleData?.updatedAt ?? "-"}
              </Item>
              <Item label="Зассан хэрэглэгч" className="font-bold">
                {roleData?.updatedUserName ?? "-"}
              </Item>
            </Descriptions>
          </Card>
        </Col>
      </Row>
    </Modal>
  );
};

interface RoleFormProps {
  show: boolean;
  close: () => void;
  roleData?: Role;
}
