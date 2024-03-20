import { Col, Row } from "antd";

const HomeComponent2 = () => {
  const items = [
    {
      image: "/assets/images/icon3.png",
      text: "Transforming Local/International Small Businesses into Market Leaders",
    },
    {
      image: "/assets/images/icon2.png",
      text: "Spent advertising on Google, Youtube, Meta and Tiktok Platforms.",
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
              <span className="font-bold" style={{ color: '#1572A1' }}>Business Solution Agency</span>
            </h3>
            <h5 className="font-play text-xl text-center">
              Transforming Local/International Small Businesses into Market
              Leaders
            </h5>
          </div>
        </Row>
        <div className="flex justify-center mt-4">
          <button style={{ backgroundColor: '#1572A1', padding: '1rem 10rem', fontSize: '1rem' }} className="hover:bg-blue-700 text-white font-bold rounded-xl">GROW WITH US →</button>
        </div>

        <Row justify="center">
          {items.map((item, index) => (
            <CustomBox image={item.image} text={item.text} key={index} />
          ))}
        </Row>
      </Col>
    </Row >
  );
};

export default HomeComponent2;
