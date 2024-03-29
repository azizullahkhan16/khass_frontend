// import { Col, Row } from "antd";
import Link from "next/link";
import "@styles/Navbar.css";

const NavBar = () => {
  return (
    <div>
      <nav className="bg-white fixed top-0 z-50 w-full py-2 shadow-md">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-bg-primaryBlue hover:bg-primaryBlue hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"

              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex justify-center">
              <div className="flex items-center">
                <span className="text-lg font-semibold tracking-widest text-[#1572A1] uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
                  Brandify Solution
                </span>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a
                    href="/"
                    className="text-[#1572A1] hover:bg-[#1572A1] hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    HOME
                  </a>
                  <Link
                    href="/about"
                    className="text-[#1572A1] hover:bg-[#1572A1] hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    ABOUT
                  </Link>
                  <a
                    href="/blogs"
                    className="text-[#1572A1] hover:bg-[#1572A1] hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    WHO WE ARE
                  </a>
                  <a
                    href="/services"
                    className="text-[#1572A1] hover:bg-[#1572A1] hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    SERVICES
                  </a>
                  <a
                    href="/contact"
                    className="text-[#1572A1] hover:bg-[#1572A1] hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    CONTACT
                  </a>
                </div>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <a
                href="#"
                className="relative inline-flex items-center justify-center bg-[#1572A1] rounded-lg px-6 py-2 text-white text-sm font-medium"
              >
                GET STARTED
                <svg
                  className="h-5 w-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a
              href="#"
              className="bg-primaryBlue text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-primaryBlue hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-primaryBlue hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Who we are
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-primaryBlue hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-primaryBlue hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>





      </nav>
    </div>
  );
};

export default NavBar;

// <div className="navbar-container">
//   <Row */
//     justify="space-between"
//     align="middle"
//     className="navbar py-2"
//     style={{
//       backgroundColor: "white",
//       color: "#1572A1",
//       position: "fixed",
//       top: 0,
//       left: 0,
//       right: 0,
//       zIndex: 1000, // Ensure it's above other content
//       boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Add shadow
//       padding: "0 20px", // Add padding to the whole navbar
//     }}
//   >
//     <Col md={6} xs={24} className="logo-col">
//       <img src="./assets/images/logo.png" alt="logo" className="logo-img" />
//     </Col>
//     <Col md={18} xs={0} className="menu-col">
//       <Row justify="end" gutter={[20, 0]}> {/* Add gutter to create space between items */}
//         <Col className="menu-item">
//           <Link href="/">HOME</Link>
//         </Col>
//         <Col className="menu-item">
//           <Link href="/about">ABOUT</Link>
//         </Col>
//         <Col className="menu-item">
//           <Link href="/blogs">WHO WE ARE</Link>
//         </Col>
//         <Col className="menu-item">
//           <Link href="/services">SERVICES</Link>
//         </Col>
//         <Col className="menu-item">
//           <Link href="/contact">CONTACT</Link>
//         </Col>
//       </Row>
//     </Col>
//   </Row>
// </div>
