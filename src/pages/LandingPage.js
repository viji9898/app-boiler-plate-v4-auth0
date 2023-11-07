import { Col, Row } from "antd";
import { Hero } from "../components/landingPage/hero";

import { DynamicMetaTags } from "../utils/dynamicMetaTags";
import { FaunaBd } from "../components/landingPage/faunaDb";
import React from "react";
import { PageLayout } from "../components/layout/pageLayout";
import { PurchaseButton } from "./PurchaseButton";

export const LandingPage = () => {
  return (
    <PageLayout>
      <DynamicMetaTags ogTitle={`boiler-plate-v3`} ogImage={""} />
      <Row style={{ maxWidth: "900px", height: "70vh" }}>
        <Hero />
        <Col style={{ textAlign: "center" }} span={24}>
          <h2>{"Test Envirnoment"}</h2>
          <p>Event: testing commits from mac mini 2014</p>
          <PurchaseButton />
          <FaunaBd />
        </Col>
      </Row>
    </PageLayout>
  );
};
