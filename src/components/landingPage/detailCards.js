import { Card, Col, Row } from "antd";
import { Location } from "./location";

export const DetailCards = () => {
  return (
    <Col
      span={24}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Row gutter={[18, 18]} style={{ maxWidth: "900px" }}>
        <Card title={" Components"} bordered={true}>
          <Col xs={24} sm={24} md={24}>
            <Card title={"Location"} bordered={true}>
              <Location />
            </Card>
          </Col>
        </Card>
      </Row>
    </Col>
  );
};
