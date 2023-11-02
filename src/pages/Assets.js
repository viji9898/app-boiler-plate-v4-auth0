import { Card, Col, Image, Row, Typography } from "antd";

export const Assets = () => {
  const { Paragraph } = Typography;

  const assetData = [
    {
      url: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tech-for-good/Learn/gmail-profile-pic-500px.png",
      size: "500px",
      type: ".png",
      title: "profile-logo",
    },
    {
      url: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tech-for-good/Learn/og-image-tfg-1200x630-01.png",
      size: "1200x630px",
      type: ".png",
      title: "og-image",
    },
    {
      url: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tech-for-good/Learn/linekdin-profile-300px.png",
      size: "1251px",
      type: ".png",
      title: "profile-logo",
    },
    {
      url: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tech-for-good/Learn/slack-logo-02.png",
      size: "550px",
      type: ".png",
      title: "slack-logo",
    },
    {
      url: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tech-for-good/Learn/cyber-sunil-outline-01.png",
      size: "420x406px",
      type: ".png",
      title: "outline-CS",
    },
    {
      url: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tech-for-good/Learn/cyberSunil-profile-01.png",
      size: "420x406px",
      type: ".png",
      title: "cyberSunil",
    },
    {
      url: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tech-for-good/Learn/tfg-logo-01.png",
      size: "387x143px",
      type: ".png",
      title: "navbar-logo",
    },
  ];

  const listAssetData = assetData.map((data) => {
    return (
      <Col xs={24} sm={24} md={8}>
        <div style={{ textAlign: "center" }}>
          <Card
            title={data.title}
            cover={<Image src={data.url} />}
            style={{ padding: "10px" }}
            actions={[
              data.size,
              data.type,
              <Paragraph
                copyable={{
                  text: data.url,
                }}
              ></Paragraph>,
            ]}
          ></Card>
        </div>
      </Col>
    );
  });

  return (
    <div className="main">
      <Row gutter={[18, 18]} style={{ maxWidth: "900px" }}>
        <Col span={24}>
          <h1>Collection of Creative Assets for Boiler Plate</h1>
          <p>
            {"For feedback "}
            <a href="mailto:hello@techforgood.lk">{"email us"}</a>
            {" illustrator size (.ai) "}
            <a target="_blank" rel="noreferrer" href="/">
              download
            </a>
          </p>
        </Col>
        {listAssetData}
      </Row>
    </div>
  );
};
