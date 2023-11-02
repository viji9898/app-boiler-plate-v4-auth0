import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import logo from "../../images/logo.svg";

import { Link } from "react-router-dom";
import { MainMenu } from "./mainMenu";

export const NavBar = () => {
  return (
    <Navbar sticky="top">
      <Container>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Navbar.Brand>
            {"starter-app "}
            <img
              src={
                "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tech-for-good/Learn/tfg-logo-01.png"
              }
              className="d-inline-block align-top"
              height="40"
              alt="tech for good logo"
            />
          </Navbar.Brand>
        </Link>
        <Nav className="justify-content-end">
          <MainMenu />
        </Nav>
      </Container>
    </Navbar>
  );
};
