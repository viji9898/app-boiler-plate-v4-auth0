import { Button, Drawer, Grid, Menu } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
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
  const items = [
    {
      label: (
        <Link to="/" style={{ textDecoration: "none" }} onClick={onClose}>
          {"home"}
        </Link>
      ),
      key: "link1",
    },
    {
      label: (
        <Link to="/hello" style={{ textDecoration: "none" }} onClick={onClose}>
          {"Ooops"}
        </Link>
      ),
      key: "link2",
    },
  ];

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
