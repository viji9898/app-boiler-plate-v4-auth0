import { Button, Drawer, Grid, Menu } from "antd";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "../../utils/auth0/logoutButton";
import { LoginButton } from "../../utils/auth0/loginButton";
import { SignupButton } from "../../utils/auth0/signupButton";

export const MainMenu = () => {
  const { useBreakpoint } = Grid;
  const { md } = useBreakpoint();
  const [current, setCurrent] = useState("retreat");
  const onClick = (e) => {
    setCurrent(e.key);
  };
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const { isAuthenticated } = useAuth0();

  const items = [
    {
      label: !isAuthenticated && <SignupButton />,
      key: "sign-up",
    },
    {
      label: isAuthenticated ? <LogoutButton /> : <LoginButton />,
      key: "login-status",
    },
  ];

  console.log(isAuthenticated);

  return (
    <div style={{ textAlign: "center" }}>
      {md ? (
        <div>
          <Menu
            onClick={onClick}
            disabledOverflow={true}
            style={{ justifyContent: "right", borderBottom: "0px" }}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
        </div>
      ) : (
        <div>
          <Button
            type="primary"
            onClick={showDrawer}
            style={{ backgroundColor: "black" }}
          >
            <MenuOutlined style={{ verticalAlign: "middle" }} />
          </Button>
          <Drawer
            zIndex={1030}
            placement={"right"}
            // closable={false}
            width={300}
            onClose={onClose}
            open={open}
            key={"right"}
          >
            <Menu
              onClick={onClick}
              style={{ justifyContent: "right", borderBottom: "0px" }}
              selectedKeys={[current]}
              mode="inline"
              items={items}
            />
          </Drawer>
        </div>
      )}
    </div>
  );
};
