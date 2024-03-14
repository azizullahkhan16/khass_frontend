import "@styles/globals.css";

export const metadata = {
  title: "Khass Solutions",
  description: "SEO services",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default layout;
