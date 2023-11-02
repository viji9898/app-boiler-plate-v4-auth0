import React from "react";

import { NavBar } from "../navigation/navBar";
import { Footer } from "../navigation/footer";

export const PageLayout = ({ children }) => {
  return (
    <div className="page-layout">
      <NavBar />
      <div
        style={{
          backgroundColor: "#f4f1ed",
          justifyContent: "center",
          display: "flex",
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};
