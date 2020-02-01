import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { withRouter } from "react-router-dom";

const options = {
  timeout: 5000,
  position: positions.TOP_RIGHT
};

const Layout = props => {
  const { pathname } = props.location;
  const theme = pathname === "/" ? "theme--purple" : "theme--default";
  return (
    <Provider template={AlertTemplate} {...options}>
      <div className={`wrapper ${theme}`}>
        <Header />
        {props.children}
        <Footer />
      </div>
    </Provider>
  );
};

export default withRouter(Layout);
