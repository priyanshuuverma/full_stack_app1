import React from "react";
import Footer from "./Footer.jsx";
import { Helmet } from "react-helmet";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
      </Helmet>
      
      <main style={{ minHeight: "80vh" }}>
        <ToastContainer />
        {children}
      </main>

      <Footer />
    </div>
  );
};
Layout.defaultProps = {
  title: "Train With Us:",
};
export default Layout;
