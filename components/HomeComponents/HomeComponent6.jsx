import { Col, Row } from "antd";

const HomeComponent6 = () => {
  const CustomBox = ({ figure, heading }) => {
    return (
      <Col md={6} sm={12} xs={12}>
        <div className="flex flex-col items-center justify-center bg-white rounded-3xl py-8 px-4">
          <h3 className="font-monts font-bold text-6xl mb-4">{figure}</h3>
          <h5 className="font-monts font-semibold text-2xl text-center">
            {heading}
          </h5>
        </div>
      </Col>
    );
  };

  const items = [
    {
      figure: "150+",
      heading: "ACTIVE CLIENT",
    },
    {
      figure: "780+",
      heading: "PROJECT DONE",
    },
    {
      figure: "6",
      heading: "TEAM ADIVSORS",
    },
    {
      figure: "15",
      heading: "GLORIOUS YEARS",
    },
  ];
  return (
    <Row justify="center" className="bg-blue-600 py-8">
      <Col md={20} sm={22} xs={22}>
        <Row justify="center" gutter={[32, 32]}>
          {items.map((item) => (
            <CustomBox figure={item.figure} heading={item.heading} />
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default HomeComponent6;
