import { Col, Row } from "antd";
import Link from "next/link";

const HomeComponent3 = () => {
  return (
    <Row justify="center py-2 bg-gray-100">
      <Col md={20}>
        <Row justify="center">
          <Col md={12}>
            <div className="flex flex-col p-8 md:border-r-2 border-black max-md:border-b-2 ">
              <p className="font-monts mb-6 text-sm">
                <span className="text-lg" style={{ color: '#1572A1' }}>
                  Your business partner in strategy and growth.
                </span>
                <br />
                <br /> Fueling Your Business Ambitions with Tailored Strategies and Collaborative Growth Partnerships, We're Your Trusted Ally in Navigating the Path to Success.
              </p>
              <div className="inline-block">
                <Link
                  href="/contact"
                  className="rounded-lg px-4 py-2 font-monts font-normal"
                  style={{ backgroundColor: '#1572A1', color: '#FFFFFF' }}
                >
                  Contact Now
                </Link>

              </div>
            </div>
          </Col>
          <Col md={12}>
            <div className="flex flex-col p-8">
              <p className="font-monts mb-6 text-sm">
                <span className="text-lg" style={{ color: '#1572A1' }}>Digital Marketing Services</span>
                <br />
                <br /> Transforming Brands through Dynamic Digital Marketing Solutions, Brandify Offers Tailored Strategies and Innovative Campaigns to Propel Your Online Presence and Drive Business Growth.
              </p>
              <div className="inline-block">
                <Link
                  href="/contact"
                  className="rounded-lg px-4 py-2 font-monts font-normal"
                  style={{ backgroundColor: '#1572A1', color: '#FFFFFF' }}
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
