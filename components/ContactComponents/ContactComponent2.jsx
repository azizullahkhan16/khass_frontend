"use client";
import { Col, Form, Row, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";

const ContactComponent2 = () => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    console.log("Received values of form: ", values);
    message.success("Submission successful!");
  };

  const handleFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("Submission failed!");
  };

  return (
    <Row justify="center" className="bg-primaryBlue py-16">
      <Col md={22}>
        <Form
          form={form}
          layout="vertical"
          autoComplete="off"
          onFinish={handleFinish}
          onFinishFailed={handleFinishFailed}
        >
          <Row justify="center" gutter={[32, 32]}>
            <Col md={8}>
              <Form.Item
                name="name"
                label=<p className="font-monts text-lg text-white">Name</p>
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                  },
                ]}
              >
                <Input type="text" />
              </Form.Item>
            </Col>
            <Col md={8}>
              <Form.Item
                name="email"
                label=<p className="font-monts text-lg text-white">Email</p>
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                  {
                    type: "email",
                    message: "Please input a valid email address!",
                  },
                ]}
              >
                <Input type="email" />
              </Form.Item>
            </Col>
            <Col md={8}>
              <Form.Item
                name="phone"
                label=<p className="font-monts text-lg text-white">Phone</p>
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input type="text" />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="center">
            <Col md={24}>
              <Form.Item
                name="subject"
                label=<p className="font-monts text-lg text-white">Subject</p>
                rules={[
                  {
                    required: true,
                    message: "Please input the subject!",
                  },
                ]}
              >
                <TextArea rows={4} type="text" />
              </Form.Item>
            </Col>
          </Row>

          <Row justify="center">
            <Col md={24}>
              <Form.Item>
                <SubmitButton form={form}>Submit</SubmitButton>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

const SubmitButton = ({ form }) => {
  return (
    <button
      type="submit"
      className="bg-yellow-500 font-monts text-lg text-black py-3 px-6 rounded-md hover:bg-yellow-600 transition-colors duration-300"
      onClick={() => form.submit()}
    >
      Submit
    </button>
  );
};

export default ContactComponent2;
