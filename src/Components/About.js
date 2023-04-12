import "./LandingPage.css";
import { Nav, Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const About = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <h2>Shopping Mart</h2>
          </Navbar.Brand>
          <Nav className="me-auto " style={{ display: "flex", gap: "1rem" }}>
            <NavLink
              style={{
                color: "rgba(255, 255, 255, 0.55",
                textDecoration: "none",
              }}
              className="nav-link"
              activeClassName="active"
              to="/home"
            >
              Home{" "}
            </NavLink>
            <NavLink
              style={{
                color: "rgba(255, 255, 255, 0.55",
                textDecoration: "none",
              }}
              className="nav-link"
              activeClassName="active"
              to="/Main"
            >
              Store
            </NavLink>
            <NavLink
              style={{
                color: "rgba(255, 255, 255, 0.55",
                textDecoration: "none",
              }}
              className="nav-link"
              activeClassName="active"
              to="/about"
            >
              About{" "}
            </NavLink>
            <NavLink
              style={{
                color: "rgba(255, 255, 255, 0.55",
                textDecoration: "none",
              }}
              className="nav-link"
              activeClassName="active"
              to="/Contact"
            >
              Contact{" "}
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
      <div className="container my-4">
        <div className="row featurette d-flex justify-content-center align-items-center">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              First featurette heading.{" "}
              <span className="text-muted">It’ll blow your mind.</span>
            </h2>
            <p className="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div className="col-md-5">
            <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
              alt=""
            />
          </div>
        </div>
        <div className="row featurette d-flex justify-content-center align-items-center">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
              First featurette heading.{" "}
              <span className="text-muted">It’ll blow your mind.</span>
            </h2>
            <p className="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
              alt=""
            />
          </div>
        </div>
        <div className="row featurette d-flex justify-content-center align-items-center">
          <div className="col-md-7 ">
            <h2 className="featurette-heading">
              First featurette heading.{" "}
              <span className="text-muted">It’ll blow your mind.</span>
            </h2>
            <p className="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div className="col-md-5">
            <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
