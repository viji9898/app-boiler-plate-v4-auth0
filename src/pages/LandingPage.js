import { Col, Row } from "antd";
import { Hero } from "../components/landingPage/hero";

import { DynamicMetaTags } from "../utils/dynamicMetaTags";
import { FaunaBd } from "../components/landingPage/faunaDb";
import React from "react";
import { AuthContext } from "../utils/AuthContext";
import { AuthIdentity } from "../components/navigation/authIdentity";

export const LandingPage = () => {
  const { user } = React.useContext(AuthContext);
  console.log(user);
  return (
    <div
      style={{
        backgroundColor: "#f4f1ed",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <DynamicMetaTags ogTitle={`boiler-plate-v3`} ogImage={""} />
      <Row style={{ maxWidth: "900px", height: "70vh" }}>
        <Hero />
        <AuthIdentity />
        <Col style={{ textAlign: "center" }} span={24}>
          <h2>{"Test Envirnoment"}</h2>
          <p>Event: testing commits from mac mini 2014</p>
          <FaunaBd />
        </Col>
      </Row>
    </div>
  );
};
