import React from "react";
import Navbar from "./components/Navbar";
import styles from "styles/layout.module.scss";

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.main__layout}>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
