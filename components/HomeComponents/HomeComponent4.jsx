import { Col, Row } from "antd";

const HomeComponent4 = () => {
  const CustomBox = ({ image, heading, text }) => {
    return (
      <Col md={8} sm={20} xs={20}>
        <div className="flex flex-col bg-white rounded-lg shadow-3xl p-4 items-center justify-center">
          <img src={image} alt="pic1" className="mb-6" />
          <h5 className="font-monts mb-4 text-blue text-lg font-semibold text-center">
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
      heading: "Personalized Business Packages",
      text: "Being a leading digital marketing agency we cater all businesses needs as per their budgets and goals. We not only welcome small business but make sure they thrive online on search engine, social media and Google & youtube ads. Either you are start up or mid size business tight on budgets we will help you transform into a market leader with our customize packages.",
    },
    {
      image: "./assets/images/icon1.png",
      heading: "Personalized Business Packages",
      text: "Being a leading digital marketing agency we cater all businesses needs as per their budgets and goals. We not only welcome small business but make sure they thrive online on search engine, social media and Google & youtube ads. Either you are start up or mid size business tight on budgets we will help you transform into a market leader with our customize packages.",
    },
    {
      image: "./assets/images/icon1.png",
      heading: "Personalized Business Packages",
      text: "Being a leading digital marketing agency we cater all businesses needs as per their budgets and goals. We not only welcome small business but make sure they thrive online on search engine, social media and Google & youtube ads. Either you are start up or mid size business tight on budgets we will help you transform into a market leader with our customize packages.",
    },
  ];
  return (
    <Row justify="center" className="py-12 bg-gray-700">
      <Col md={20}>
        <Row justify="center">
          <div className="flex flex-col items-center justify-center mb-6">
            <h3 className="font-monts font-semibold text-3xl mb-4 text-center">
              Why Digital Minds Pakistan?
            </h3>
            <p className="font-monts font-normal text-xl mb-4 text-center">
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
