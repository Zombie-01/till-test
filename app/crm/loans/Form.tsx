import {
  Button,
  Card,
  Col,
  Descriptions,
  Divider,
  Form,
  Input,
  Modal,
  Row,
  Tag,
} from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

const { Item } = Descriptions;

/**
 * Loan form
 */
export const LoanForm = ({ close, formData }: LoanFormProps) => {
  const [form] = Form.useForm();

  const submit = () => {
    form.validateFields().then((data) => console.log(data));
  };

  return (
    <Modal
      title="Зээлийн дэлгэрэнгүй"
      footer={[
        <Button key="close" icon={<CloseOutlined />} onClick={close}>
          Хаах
        </Button>,
        <Button
          type="primary"
          key="save"
          icon={<CheckOutlined />}
          onClick={submit}>
          Хадгалах
        </Button>,
      ]}
      open={!!formData}
      onClose={close}
      onCancel={close}
      width={1200}>
      <Row gutter={[12, 12]}>
        <Col span={16}>
          <Card size="small">
            <Descriptions column={2} size="small">
              <Item label="Харилцагчийн дугаар" className="font-bold">
                9070000028
              </Item>
              <Item label="Ангилал">
                <Tag color="red">МУУ</Tag>
              </Item>
              <Item label="Нэр" className="font-bold">
                ТҮМЭНХҮҮ Д.
              </Item>
              <Item label="Үндсэн ангилал">-</Item>
              <Item label="РД">УУ65021735</Item>
              <Item label="Бүртгэсэн огноо">2024-06-25</Item>
              <Item label="Сүүлд залгасан хариуцагч">-</Item>
              <Item label="Сүүлд холбогдсон өдөр">2024-09-10</Item>
              <Item label="Утасны дугаар">
                <Tag color="blue">99114085</Tag>
              </Item>
              <Item label="Гар утасны дугаар">
                <Tag color="blue">93117733</Tag>
              </Item>
              <Item label="Утас">
                <Tag color="blue">99994085</Tag>
                <Tag color="blue">311832</Tag>
              </Item>
              <Item label="Ажлын утас">-</Item>
            </Descriptions>

            <Divider orientation="left" className="!mb-2">
              Зээлийн мэдээлэл
            </Divider>

            <Descriptions column={2} size="small">
              <Item label="Зээл олгосон огноо">2014-11-28</Item>
              <Item label="Зээлийн данс">1070000123</Item>
              <Item label="Зээлийн хэмжээ" className="font-bold">
                250,000,000
              </Item>
              <Item label="Зээлийн хүү">48</Item>
              <Item label="Зээлийн хуг.хэтэрсэн хоног">3380</Item>
              <Item label="Зээлийн үлдэгдэл" className="font-bold">
                250,000,000
              </Item>
              <Item label="Дуусах өдөр">2015-06-13</Item>

              <Item label="Хүүний зөрүү" className="font-bold">
                13,479,452.00
              </Item>
              <Item label="Хүүний хугацаа хэтэрсэн өдөр">3532</Item>
              <Item label="Хүүгийн өр үүсэх огноо">2015-01-01</Item>
              <Item label="Хуримтлагдсан хүү">0</Item>
              <Item label="Хүү үлдэгдэл">-</Item>

              <Item label="Эргэн төлөгдөх хэмжээ">0.00</Item>
              <Item label="Зөрүү хоног">41</Item>
              <Item label="Сүүлчийн төлбөрийн огноо">-</Item>
              <Item label="Нийт өр" className="font-bold">
                367,666,660
              </Item>
              <Item label="Үндсэн өр үүссэн огноо">2015-06-02</Item>
              <Item label="Хугацаа хэтэрсэн үлдэгдэл">-</Item>
            </Descriptions>
          </Card>
        </Col>
        <Col span={8}>
          <Card size="small">
            <Form autoComplete="off" layout="vertical" form={form}>
              <Form.Item
                label="Хариу үйлдэл"
                name="receiver"
                required
                className="!mb-3">
                <Input />
              </Form.Item>
              <Form.Item label="Нөхцөл байдал" name="type" className="!mb-3">
                <Input />
              </Form.Item>
              <Form.Item label="Тохирсон огноо" name="date" className="!mb-3">
                <Input />
              </Form.Item>
              <Form.Item label="Тайлбар" name="description" className="!mb-3">
                <Input.TextArea />
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </Modal>
  );
};

interface LoanFormProps {
  close: () => void;
  formData: any;
}
