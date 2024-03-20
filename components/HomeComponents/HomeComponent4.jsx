import { Col, Row } from "antd";

const HomeComponent4 = () => {
  const CustomBox = ({ image, heading, text }) => {
    return (
      <Col md={8} sm={20} xs={20}>
        <div className="flex flex-col bg-white rounded-lg shadow-3xl p-4 items-center justify-center">
          <img src={image} alt="pic1" className="mb-6" />
          <h5 className="font-monts mb-4 text-lg font-semibold text-center" style={{ color: '#1572A1' }}>
            {heading}
          </h5>
          <p className="font-monts mb-2 text-center text-sm">{text}</p>
        </div>
      </Col>
    );
  };

  const items = [
    {
      image: "./assets/images/icon1.png",
      heading: "Comprehensive Suite of Services",
      text: "At Brandify, we offer a wide range of services, from marketing strategies to financial guidance, all under one roof. This convenience saves our clients time and effort by eliminating the need to work with multiple agencies.",
    },
    {
      image: "./assets/images/icon1.png",
      heading: "Integrated Approach",
      text: "Our integrated approach ensures seamless coordination between marketing, media, and financial strategies. This holistic approach maximizes the effectiveness of our solutions and drives better results for our clients."
    },
    {
      image: "./assets/images/icon1.png",
      heading: "Commitment to Client Satisfaction",
      text: "We prioritize client satisfaction above all else and strive to exceed expectations with every project. Our dedication to excellence, creativity, and strategic thinking sets us apart as a trusted partner in our clients' business journey."
    },
  ];
  return (
    <Row justify="center" className="py-12" style={{ backgroundColor: '#1572A1' }}>
      <Col md={20}>
        <Row justify="center">
          <div className="flex flex-col items-center justify-center mb-6">
            <h3 className="font-monts font-semibold text-3xl mb-4 text-center" style={{ color: '#ffffff' }}>
              Why Brandify Pakistan?
            </h3>
            <p className="font-monts font-normal text-xl mb-4 text-center" style={{ color: '#ffffff' }}>
              Our Expertise and Commitment to Your Success Sets Us Apart
            </p>
          </div>
        </Row>
        <Row justify="center" gutter={[16, 8]}>
          {items.map((item) => (
            <CustomBox
              image={item.image}
              heading={item.heading}
              text={item.text}
            />
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default HomeComponent4;
