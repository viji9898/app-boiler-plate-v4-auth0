import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export const AuthenticationGuard = ({ component }) => {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 240,
      }}
      spin
    />
  );

  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div
        style={{
          margin: "100px 0px",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Spin indicator={antIcon} />
      </div>
    ),
  });

  return <Component />;
};
