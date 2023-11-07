import { Button, Col, Row } from "antd";
import { Link } from "react-router-dom";

export const PurchaseButton = () => {
  return (
    <div className="main">
      <Row gutter={[18, 18]}>
        <Col span={24}>
          <h1>PurchaseButton</h1>
          <Button>
            <Link to={"/checkout"}>Buy Body By Rings</Link>
          </Button>
        </Col>
      </Row>
    </div>
  );
};
