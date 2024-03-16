import { Col, Row } from "antd";

const HomeComponent2 = () => {
  const items = [
    {
      image: "/assets/images/icon3.png",
      text: "Transforming Local/International Small Businesses into Market Leaders since 2008",
    },
    {
      image: "/assets/images/icon2.png",
      text: "Spent Over $7 Million~ in advertising on Google, Youtube, Meta and Tiktok Platforms.",
    },
    {
      image: "/assets/images/icon1.png",
      text: "We are not just digital marketing agency in Pakistan but your business partner in advertising and growth.",
    },
  ];

  const CustomBox = ({ image, text }) => {
    return (
      <Col md={8}>
        <div className="flex flex-col items-center justify-center">
          <img src={image} alt="image" className="mb-2 py-12" />
          <p className="text-black text-center px-8 font-monts text-sm">
            {text}
          </p>
        </div>
      </Col>
    );
  };

  return (
    <Row justify="center" className="py-8">
      <Col md={20}>
        <Row justify="center">
          <div className="flex flex-col justify-center items-center mb-2">
            <h3 className="font-play text-3xl text-center">
              Leading{" "}
              <span className="font-bold">Digital Marketing Agency</span> in
              Pakistan
            </h3>
            <h5 className="font-play text-xl text-center">
              Transforming Local/International Small Businesses into Market
              Leaders <span className="text-red-500">since 2008</span>
            </h5>
          </div>
        </Row>

        <Row justify="center">
          {items.map((item, index) => (
            <CustomBox image={item.image} text={item.text} key={index} />
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default HomeComponent2;
