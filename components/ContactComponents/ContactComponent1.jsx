import { Col, Row } from "antd";

const ContactComponent1 = () => {
  return (
    <Row justify="center" className="pt-24 bg-purple-950">
      <Col md={22}>
        <Row justify="center" className="py-16">
          <Col md={24}>
            <h3 className="text-center text-5xl text-white font-bold font-play">
              Contact Us
            </h3>
          </Col>
        </Row>

        <Row justify="center" gutter={[32, 32]}>
          <Col md={12} className="self-center">
            <p className="font-monts text-3xl text-white">
              Email us with any questions or inquiries or call 0304-3444-825. We
              would be happy to answer your question and set up a meeting with
              you.
            </p>
          </Col>
          <Col md={12}>
            <img src=".\assets\images\contact.png" />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ContactComponent1;
