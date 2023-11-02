import { Col } from "antd";

export const Hero = () => {
  return (
    <Col
      xs={24}
      sm={24}
      md={24}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ margin: "10px", width: "100%", textAlign: "center" }}>
        <img
          src={
            "https://app-viji.s3.eu-west-2.amazonaws.com/rocket-icon-vector-starter-app.svg"
          }
          className="App-logo"
          alt="rocket ready to launch"
        />
      </div>
    </Col>
  );
};
