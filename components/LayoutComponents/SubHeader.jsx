import { Col, Row } from "antd";

const SubHeader = () => {
  return (
    <Row
      justify="center"
      className="py-0 max-md:hidden"
      style={{
        background: "linear-gradient(90deg, #ffffff 0%, #ffffff 100%)",
      }}
    >
      <Col md={20}>
        <Row justify="center">
          {/* <Col md={8}>
            <img src="./assets/images/logo.png" alt="logo" />
          </Col> */}
          {/* <Col md={6} className="self-center">
            <div className="flex flex-col">
              <h5 className="font-monts text-lg font-semibold" style={{ color: '#1572A1' }}>
                FL 3/21, Block 5
              </h5>
              <p className="font-monts text-sm font-normal" style={{ color: '#1572A1' }}>
                Gulshan-e-Iqbal, Karachi
              </p>
            </div>
          </Col>
          <Col md={6} className="self-center">
            <div className="flex flex-col">
              <h5 className="font-monts text-lg font-semibold" style={{ color: '#1572A1' }}>
                0304-3444825
              </h5>
              <p className="font-monts text-sm font-normal" style={{ color: '#1572A1' }}>
                Call / Whatsapp
              </p>
            </div>
          </Col>
          <Col md={4} className="self-center">
            <div className="flex flex-col">
              <h5 className="font-monts text-lg font-semibold" style={{ color: '#1572A1' }}>
                Monday to Friday
              </h5>
              <p className="font-monts text-sm font-normal" style={{ color: '#1572A1' }}>
                11:00am - 08:00pm
              </p>
            </div>
          </Col> */}
        </Row>
      </Col>
    </Row>
  );
};

export default SubHeader;
