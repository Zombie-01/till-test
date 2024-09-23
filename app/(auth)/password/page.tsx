"use client";

import {MailTwoTone} from "@ant-design/icons";
import {ValidateErrorEntity} from "rc-field-form/lib/interface";
import {Form, Input, Button, Flex, Typography, Divider} from "antd";

const RecoverPasswordPage = () => {
    const onFinish = (values: string) => {
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo: ValidateErrorEntity<string>) => {
        console.log("Failed:", errorInfo);
        return errorInfo;
    };

    return (
        <Flex className="py-20 w-full max-w-[440px]" vertical>
            <div className="mb-5">
                <Typography.Title style={{marginBottom: 0}} level={1}>
                    Нууц үгээ сэргээх
                </Typography.Title>
                <Typography.Paragraph>Заавар хүлээн авах имэйлээ оруулна уу</Typography.Paragraph>
            </div>
            <Form layout="vertical" name="recover_password_form" initialValues={{remember: true}} onFinish={onFinish} onFinishFailed={onFinishFailed}>
                <Form.Item label="Имэйл" name="email" rules={[{required: true, message: "Имэйлээ оруулна уу!"}]}>
                    <Input size="large" prefix={<MailTwoTone className="site-form-item-icon" />} placeholder="Имэйлээ оруулна уу" />
                </Form.Item>
                <Form.Item>
                    <Button size="large" className="" type="primary" htmlType="submit" block>
                        Илгээх
                    </Button>
                </Form.Item>
            </Form>
            <Divider>ЭСВЭЛ</Divider>
            <div>
                <Typography.Text style={{opacity: 0.5}}>Нууц үгээ санаж байна уу?</Typography.Text>
                <Typography.Link className="float-right" href="/login">
                    Нэвтрэх
                </Typography.Link>
            </div>
        </Flex>
    );
};

export default RecoverPasswordPage;
