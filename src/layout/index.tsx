import React from "react";
import Navbar from "./components/Navbar";
import "./index.scss";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="main__layout">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
