import { Navbar } from "@material-tailwind/react";
import React from "react";
import Footer from "../footer/Footer";
import Navbars from "../navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbars></Navbars>
      <div className="main-content min-h-screen">{children}</div>

      <Footer></Footer>
    </div>
  );
};

export default Layout;
