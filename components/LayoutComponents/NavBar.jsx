import { Col, Row } from "antd";
import Link from "next/link";

const NavBar = () => {
  return (
    <Row justify="center" className=" bg-gray-400 py-2">
      <Col md={20}>
        <Row justify="center">
          <Col md={4} className="inline-block">
            <div className="inline-block">
              <Link
                className="text-lg font-monts font-semibold cursor-pointer"
                href="/"
              >
                HOME
              </Link>
            </div>
          </Col>
          <Col md={4}>
            <div className="inline-block">
              <Link
                className="text-lg font-monts font-semibold cursor-pointer"
                href="/about"
              >
                ABOUT
              </Link>
            </div>
          </Col>
          <Col md={4}>
            <div className="inline-block">
              <Link
                className="text-lg font-monts font-semibold cursor-pointer"
                href="/blogs"
              >
                WHO WE ARE
              </Link>
            </div>
          </Col>
          <Col md={4}>
            <div className="inline-block">
              <Link
                className="text-lg font-monts font-semibold cursor-pointer"
                href="/services"
              >
                SERVICES
              </Link>
            </div>
          </Col>
          <Col md={4}>
            <div className="inline-block">
              <Link
                className="text-lg font-monts font-semibold cursor-pointer"
                href="/contact"
              >
                CONTACT
              </Link>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default NavBar;
