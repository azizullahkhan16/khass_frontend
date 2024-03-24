import { Carousel } from "antd";

const HomeComponent1 = () => {
  return (
    <div className="mt-20">
      <Carousel autoplay>
        <div key={0}>
          <img
            src="./assets/images/carousel1.jpg"
            alt="carousel1"
            className="object-cover"
          />
        </div>
        <div key={1}>
          <img
            src="./assets/images/carousel2.jpg"
            alt="carousel2"
            className="object-cover"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default HomeComponent1;
