import { Col, Row } from "antd";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  const iconNames = [
    "www.facebook.com/profile.php?id=61557688223223&mibextid=ZbWKwL",
    "www.linkedin.com/company/brandify-business-solutions/",
    "www.instagram.com/brandify.com.pk/?igsh=MXByZmh4czUzMWJ5eA%3D%3D",
  ];
  const customIcons = (name) => {
    return (
      <div>
        <SocialIcon
          url={`https://${name}`}
          style={{
            width: "32px",
            height: "32px",
            marginRight: "8px",
          }}
        />
      </div>
    );
  };
  return (
    <Row
      justify="center"
      className="py-16 max-md:py-4"
      style={{
        backgroundColor: "#ffffff",
        color: "#1572A1",
        fontWeight: "bold",
      }}
    >
      <Col sm={22} xs={22}>
        <Row>
          <Col md={10}>
            <div>
              <img src="./assets/images/logo.png" alt="logo" className="mb-4" />
              <div className="flex justify-start font-roboto text-base">
                {iconNames.map((icon) => customIcons(icon))}
              </div>
            </div>
          </Col>

          <Col md={14} className="max-sm:hidden">
            <Row justify="end">
              <Col md={6}>
                <div className="flex flex-col">
                  <p className="mb-4 font-roboto text-base font-thin max-xl:text-xs">
                    NAVIGATION
                  </p>

                  <p className="inline-block">
                    <Link
                      className="font-roboto max-xl:text-xs hover:text-gray-400"
                      href="/"
                    >
                      HOME
                    </Link>
                  </p>
                  <p className="inline-block">
                    <Link
                      className="font-roboto max-xl:text-xs hover:text-gray-400"
                      href="/about"
                    >
                      ABOUT US
                    </Link>
                  </p>

                  <p className="inline-block">
                    <Link
                      className="font-roboto max-xl:text-xs hover:text-gray-400"
                      href="/blogs"
                    >
                      WHO WE ARE
                    </Link>
                  </p>
                  <p className="inline-block">
                    <Link
                      className="font-roboto max-xl:text-xs hover:text-gray-400"
                      href="/services"
                    >
                      SERVICES
                    </Link>
                  </p>
                  <p className="inline-block">
                    <Link
                      className="font-roboto max-xl:text-xs hover:text-gray-400"
                      href="/contact"
                    >
                      CONTACT
                    </Link>
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="py-6" justify="center">
          <Col md={16} sm={24} xs={24} className="self-center">
            <div className="flex justify-center md:justify-start">
              <p className="font-roboto max-xl:text-xs ">
                Copyright@2023 Home Decor Health. All Right Reserved | Made by
                aktic.
              </p>
            </div>
          </Col>
          <Col md={8} sm={24} xs={24} className="self-center"></Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Footer;
