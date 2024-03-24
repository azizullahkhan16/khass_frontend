import NavBar from "@components/LayoutComponents/NavBar";
import SubHeader from "@components/LayoutComponents/SubHeader";
import "@styles/globals.css";
import Footer from "./../components/LayoutComponents/Footer";

export const metadata = {
  title: "Brandify Solutions",
  description: "SEO services",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {/* <SubHeader /> */}
        <NavBar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
};

export default layout;
