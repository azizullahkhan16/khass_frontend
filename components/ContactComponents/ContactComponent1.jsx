import { Col, Row } from "antd";

const ContactComponent1 = () => {
  return (
    <Row justify="center" className="pt-24 bg-white">
      <Col md={22}>
        <Row justify="center" className="py-16">
          <Col md={24}>
            <h3 className="text-center text-5xl text-primaryBlue font-monts font-semibold">
              Contact Us
            </h3>
          </Col>
        </Row>

        <Row justify="center" gutter={[32, 32]}>
          <Col md={12} className="self-center">
            <p className="font-monts text-xl text-primaryBlue">
              Email us with any questions or inquiries or call +92 331 3396981. We
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
