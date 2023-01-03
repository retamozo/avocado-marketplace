import React, { FunctionComponent } from "react";
import { NavBar, Footer } from "@components";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="relative">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
