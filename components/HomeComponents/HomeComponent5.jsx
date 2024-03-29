import { Col, Row } from "antd";
import Link from "next/link";

const HomeComponent5 = () => {
  const CustomBox = ({ image, heading, text }) => {
    return (
      <Col md={8} sm={16} xs={16}>
        <div className="flex flex-col justify-center items-center rounded-xl shadow-xl" style={{ backgroundColor: '#1572A1', color: '#FFFFFF' }}>
          {/* <img src={image} alt="icon" className="py-8" /> */}
          <h5 className="text-base font-monts font-bold text-center mb-4 py-6">
            {heading}
          </h5>
          <p className="text-base font-monts font-normal text-center mb-4 px-4 py-6">
            {text}
          </p>
          <div className="inline-block w-full py-2 text-center rounded-b-xl bg-gray-300">
            <Link
              href="/services"
              className="text-base font-monts font-normal text-center"
              style={{ color: '#1572A1' }}
            >
              Explore Now
            </Link>
          </div>
        </div>
      </Col>

    );
  };

  const items = [
    {
      image: "./assets/images/icon1.png",
      heading: "Search Engine Optimization",
      text: "Enhance your website's presence in search engine results and elevate organic traffic.",
    },
    {
      image: "./assets/images/icon1.png",
      heading: "Social Media Marketing (SMM)",
      text: "End-to-end social media solutions including strategy, profile management, community engagement, and analytics.",
    },
    {
      image: "./assets/images/icon1.png",
      heading: "Content Marketing",
      text: "Comprehensive content services encompassing strategy, creation, promotion, and performance optimization.",
    },

  ];
  return (
    <Row justify="center" className="py-8" style={{ backgroundColor: '#FFFFFF' }}>
      <Col md={20}>
        <Row justify="center">
          <h3 className="font-monts text-4xl font-semibold mb-12" style={{ color: '#1572A1' }}>
            Our Services
          </h3>
        </Row>
        <Row justify="center" gutter={[16, 16]}>
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

export default HomeComponent5;
