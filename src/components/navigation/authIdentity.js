import { Button, Col } from "antd";
import { AuthContext } from "../../utils/AuthContext";
import { useContext } from "react";
import netlifyIdentity from "netlify-identity-widget";
import { Link } from "react-router-dom";

export const AuthIdentity = () => {
  const { user } = useContext(AuthContext);
  return (
    <Col span={24} style={{ textAlign: "center" }}>
      {!user ? (
        <Button
          onClick={() => {
            netlifyIdentity.open("login");
          }}
        >
          Login
        </Button>
      ) : (
        <div>
          <Button
            onClick={() => {
              netlifyIdentity.logout();
              netlifyIdentity.off("login");
            }}
          >
            Logout
          </Button>
          <br></br>
          <p>signed in as: {user.email}</p>
        </div>
      )}
      <p>userAdmin: vijitha.wijesuriya@gmail.com / pw: hatch2020</p>
      <p>userUser: vijithaw@gmail.com / pw: hatch1010</p>
      <Link to={"/assets"}>Assets</Link>
    </Col>
  );
};
