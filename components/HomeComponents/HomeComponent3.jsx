import { Col, Row } from "antd";
import Link from "next/link";

const HomeComponent3 = () => {
  return (
    <Row justify="center py-2 bg-gray-300">
      <Col md={20}>
        <Row justify="center">
          <Col md={12}>
            <div className="flex flex-col p-8 md:border-r-2 border-black max-md:border-b-2 ">
              <p className="font-monts mb-6 text-sm">
                <span className="text-lg">
                  We are not just Digital Marketing Agency in Pakistan but your
                  business partner in advertising and growth.
                </span>
                <br />
                <br /> By signing Digital Minds Pakistan as your digital
                marketing advertising partner you meet with country’s most
                seasoned digital markers.
              </p>
              <div className="inline-block">
                <Link
                  href="/contact"
                  className="bg-white rounded-lg text-black px-4 py-2 font-monts font-normal "
                >
                  Contact Now
                </Link>
              </div>
            </div>
          </Col>
          <Col md={12}>
            <div className="flex flex-col p-8">
              <p className="font-monts mb-6 text-sm">
                <span className="text-lg">Digital Marketing Services</span>
                <br />
                <br /> We believe in transforming an start up and local business
                in to market leader in their niche by positioning them on Google
                Search, adopting unique strategies for Social media advertising
                and explore new avenues of business by tapping on right
                platforms for our clients.
              </p>
              <div className="inline-block">
                <Link
                  href="/contact"
                  className="bg-white rounded-lg text-black px-4 py-2 font-monts font-normal "
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default HomeComponent3;
