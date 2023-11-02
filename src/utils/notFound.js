import { Avatar, Col, Row } from "antd";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <Row>
      <Col span={24} style={{ textAlign: "center" }}>
        <Avatar
          src={
            "https://app-viji.s3.eu-west-2.amazonaws.com/cyver-sunil-profile-px512-01.png"
          }
          size={350}
        ></Avatar>

        <h1>Oooops!</h1>
        <h2>We can't seem to find the page you're looking for.</h2>
        <strong>
          <p>{"Error code: 404 - I don't know why :)"}</p>
        </strong>
        <Link to="/">Home</Link>
      </Col>
    </Row>
  );
};
