import React, { FunctionComponent } from "react";
import { NavBar } from "@components";
// import styles from "./layout.module.css";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <footer className="container">This is the footer</footer>
      {/* I can also use styleJSX, a built-in framework solution. */}
      {/* <style jsx>{`
        .container {
          background-color: salmon;
        }
      `}</style> */}
    </div>
  );
};

export default Layout;
