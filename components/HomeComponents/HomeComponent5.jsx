import { Col, Row } from "antd";
import Link from "next/link";

const HomeComponent5 = () => {
  const CustomBox = ({ image, heading, text }) => {
    return (
      <Col md={8} sm={16} xs={16}>
        <div className="flex flex-col justify-center items-center rounded-xl bg-white shadow-xl">
          <img src={image} alt="icon" className="py-8" />
          <h5 className="text-sm font-monts font-semibold text-center text-blue-800">
            {heading}
          </h5>
          <p className="text-sm font-monts font-normal text-center my-4 px-8">
            {text}
          </p>
          <div className="inline-block w-full py-4 text-center rounded-b-xl bg-gray-300">
            <Link
              href="/services"
              className="text-sm font-monts font-normal text-center "
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
      heading: "Search Engine Optimization",
      text: "Enhance your website's presence in search engine results and elevate organic traffic.",
    },
    {
      image: "./assets/images/icon1.png",
      heading: "Search Engine Optimization",
      text: "Enhance your website's presence in search engine results and elevate organic traffic.",
    },
    {
      image: "./assets/images/icon1.png",
      heading: "Search Engine Optimization",
      text: "Enhance your website's presence in search engine results and elevate organic traffic.",
    },
    {
      image: "./assets/images/icon1.png",
      heading: "Search Engine Optimization",
      text: "Enhance your website's presence in search engine results and elevate organic traffic.",
    },
    {
      image: "./assets/images/icon1.png",
      heading: "Search Engine Optimization",
      text: "Enhance your website's presence in search engine results and elevate organic traffic.",
    },
  ];
  return (
    <Row justify="center py-8 bg-yellow-300">
      <Col md={20}>
        <Row justify="center">
          <h3 className="font-monts text-4xl font-semibold mb-12">
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
