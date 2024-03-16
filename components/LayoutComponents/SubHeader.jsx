import { Col, Row } from "antd";

const SubHeader = () => {
  return (
    <Row
      justify="center"
      className="py-2 max-md:hidden"
      style={{
        background: "linear-gradient(90deg, #001f3f 0%, #0d47a1 100%)",
      }}
    >
      <Col md={20}>
        <Row justify="center">
          <Col md={8}>
            <img src="./assets/images/logo.png" alt="logo" />
          </Col>
          <Col md={6} className="self-center">
            <div className="flex flex-col">
              <h5 className="font-monts text-lg text-white font-semibold">
                FL 3/21, Block 5
              </h5>
              <p className="font-monts text-sm text-white font-normal">
                Gulshan-e-Iqbal, Karachi
              </p>
            </div>
          </Col>
          <Col md={6} className="self-center">
            <div className="flex flex-col">
              <h5 className="font-monts text-lg text-white font-semibold">
                0304-3444825
              </h5>
              <p className="font-monts text-sm text-white font-normal">
                Call / Whatsapp
              </p>
            </div>
          </Col>
          <Col md={4} className="self-center">
            <div className="flex flex-col">
              <h5 className="font-monts text-lg text-white font-semibold">
                Monday to Friday
              </h5>
              <p className="font-monts text-sm text-white font-normal">
                11:00am - 08:00pm
              </p>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default SubHeader;
