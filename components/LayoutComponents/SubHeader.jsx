import React from 'react';
import { Row, Col } from 'antd'; // Assuming you're using Ant Design for grid layout

const SubHeader = () => {
  // Adjust this value according to the height of your navbar
  const navbarHeight = 60; // Example height of the navbar in pixels

  return (
    <Row
      justify="center"
      className="py-2 max-md:hidden"
      style={{
        background: "#1572A1", // Setting background color
        color: "#FFFFFF", // Setting text color to white for better visibility
        marginTop: navbarHeight + 'px', // Add top margin equal to navbar height
      }}
    >
      <Col md={20}>
        <Row justify="center">
          {/* Uncomment the following lines to render logo and other content */}
          {/* <Col md={8}>
            <img src="./assets/images/logo.png" alt="logo" />
          </Col> */}
          {/* <Col md={6} className="self-center">
            <div className="flex flex-col">
              <h5 className="font-monts text-lg font-semibold" style={{ color: '#1572A1' }}>
                FL 3/21, Block 5
              </h5>
              <p className="font-monts text-sm font-normal" style={{ color: '#1572A1' }}>
                Gulshan-e-Iqbal, Karachi
              </p>
            </div>
          </Col>
          <Col md={6} className="self-center">
            <div className="flex flex-col">
              <h5 className="font-monts text-lg font-semibold" style={{ color: '#1572A1' }}>
                0304-3444825
              </h5>
              <p className="font-monts text-sm font-normal" style={{ color: '#1572A1' }}>
                Call / Whatsapp
              </p>
            </div>
          </Col>
          <Col md={4} className="self-center">
            <div className="flex flex-col">
              <h5 className="font-monts text-lg font-semibold" style={{ color: '#1572A1' }}>
                Monday to Friday
              </h5>
              <p className="font-monts text-sm font-normal" style={{ color: '#1572A1' }}>
                11:00am - 08:00pm
              </p>
            </div>
          </Col> */}
          {/* Add the following row for the new text */}
          <Row justify="center" style={{ marginTop: '1rem' }}>
            <Col>
              <p className="font-palanquin text-lg font-normal" style={{ color: '#FFFFFF' }}>
                Avail 20% if you belong to IBA , LUMS , or IOBM
              </p>
            </Col>
          </Row>
        </Row>
      </Col>
    </Row>
  );
};

export default SubHeader;
