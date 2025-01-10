import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const MasterLayout = (props) => {
  return (
    <div>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export default MasterLayout;
