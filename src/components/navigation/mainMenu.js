import { Button, Drawer, Grid, Menu } from "antd";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "../../utils/auth0/logoutButton";
import { LoginButton } from "../../utils/auth0/loginButton";
import { SignupButton } from "../../utils/auth0/signupButton";
import { Link } from "react-router-dom";

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
    {
      label: (
        <Link to={"/profile"}>
          <Button>{"Profile"}</Button>
        </Link>
      ),
      key: "private",
    },
  ];

  console.log(isAuthenticated);

  const listMenu = items.map((data) => {
    return (
      <Menu.Item style={{ paddingInline: "0px" }} key={data.key}>
        {data.label}
      </Menu.Item>
    );
  });

  return (
    <div style={{ textAlign: "center" }}>
      {md ? (
        <div>
          <Menu
            onClick={onClick}
            disabledOverflow={true}
            style={{
              justifyContent: "right",
              borderBottom: "0px",
              padding: "0px",
              paddingInline: "0px",
            }}
            selectedKeys={[current]}
            mode="horizontal"
            // items={items}
          >
            {listMenu}
          </Menu>
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
