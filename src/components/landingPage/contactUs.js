import { Button, Col, Form, Input, Row, Space, Modal } from "antd";
import axios from "axios";
import {
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  FacebookOutlined,
  YoutubeOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

export const ContactUs = () => {
  const { TextArea } = Input;
  const [form] = Form.useForm();

  const postDiscordMessage = (values) => {
    return axios
      .post(".netlify/functions/postDiscordMessage", {
        values,
      })
      .then((response) => {
        console.log(response);
      })
      .catch(function error(error) {
        const errorMessage = error.response.data;
        console.log(errorMessage);
      });
  };

  // use discord webhook for communication

  //   const postSlackMessage = ({ params }) => {
  //     return axios
  //       .post(".netlify/functions/postSlackMessageChannel", {
  //         params,
  //       })
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch(function error(error) {
  //         const errorMessage = error.response.data;
  //         console.log(errorMessage);
  //       });
  //   };

  const onFinish = (values) => {
    form.validateFields().then((values) => {
      const success = () => {
        Modal.success({
          content:
            "Thanks for getting in touch with us... Will get in touch ASAP!!",
        });
      };

      // const slackMessageData = {
      //   enter slack url here
      //   params: {
      //     url: "",
      //     blocks: [
      //       {
      //         type: "header",
      //         text: {
      //           type: "plain_text",
      //           text: "Contact Message from storage.lk!",
      //           emoji: true,
      //         },
      //       },
      //       {
      //         type: "section",
      //         text: {
      //           type: "mrkdwn",
      //           text: `Name: ${values.name} \n\n Email: ${values.email} \n\n Contact Number: ${values.number} \n\n Comments: ${values.message}  `,
      //         },
      //       },
      //     ],
      //   },
      // };
      // postSlackMessage(slackMessageData);
      postDiscordMessage(values);
      success();
      form.resetFields();
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const ContactForm = () => {
    return (
      <Form
        name="basic"
        form={form}
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row gutter={18}>
          <Col xs={24} sm={24} md={12} lg={24}>
            <Form.Item
              style={{ margin: "5px" }}
              label=""
              name="name"
              rules={[{ required: true, message: "Please input your name" }]}
            >
              <Input placeholder="name" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={24}>
            <Form.Item
              style={{ margin: "5px" }}
              label=""
              name="number"
              rules={[
                {
                  required: true,
                  message: "Please input your contact number!",
                },
              ]}
            >
              <Input placeholder="Contact Number" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          style={{ margin: "5px" }}
          label=""
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="email" />
        </Form.Item>
        <Form.Item
          style={{ margin: "5px" }}
          label=""
          name="message"
          rules={[{ required: false, message: "Please input your email!" }]}
        >
          <TextArea placeholder="send us details of your enquiry" rows={3} />
        </Form.Item>
        <Form.Item style={{ margin: "5px" }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ backgroundColor: "black" }}
          >
            Submit
          </Button>
        </Form.Item>
        <p style={{ fontWeight: "700", margin: "5px", marginTop: "15px" }}>
          GET SOCIAL
        </p>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Space>
            <a
              href="https://instagram.com"
              rel="noreferrer"
              target="_blank"
              style={{ textDecoration: "none", color: "black" }}
            >
              <InstagramOutlined />
            </a>
            <LinkedinOutlined />
            <TwitterOutlined />
            <FacebookOutlined />
            <YoutubeOutlined />
          </Space>
          <br></br>
          <div>
            <Button
              size="small"
              style={{
                marginTop: "5px",
                backgroundColor: "black",
                color: "white",
                fontSize: "12px",
                verticalAlign: "bottom",
                padding: "2px 10px 2px 10px",
              }}
              target="_blank"
              rel="noreferrer"
              href="https://wa.me/94777322500?text=I'm%20interested%20in%20your%20bootcamp!"
            >
              <WhatsAppOutlined
                style={{ verticalAlign: "middle", fontSize: "14px" }}
              />
              {"WhatsApp Us"}
            </Button>
            <br></br>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:hello@techforgood.lk"
              style={{ color: "salmon" }}
            >
              hello@techforgood.lk
            </a>
          </div>
        </Col>
      </Form>
    );
  };

  return <ContactForm />;
};
