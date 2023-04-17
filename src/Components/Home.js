import { Nav, Container, Navbar, Row, Col, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import "./LandingPage.css";
import { useContext } from "react";
import CartContext from "../Store/card-context";


const Home = () => {
 
  const navigate= useNavigate();
  const authCtx= useContext(CartContext);
  const logoutHandler =()=>{
    authCtx.logout();
    navigate('/auth')
  }

  const loginHandler=()=>{
    navigate('/auth')
  }
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <h2>Shopping Mart</h2>
          </Navbar.Brand>
          <Nav className="me-auto" style={{ display: "flex", gap: "1rem" }}>
            {isLoggedIn && <NavLink
              style={{
                color: "rgba(255, 255, 255, 0.55",
                textDecoration: "none",
              }}
              className="nav-link"
              activeClassName="active"
              to="/home"
            >
              Home{" "}
            </NavLink>}
           {isLoggedIn &&  <NavLink
              style={{
                color: "rgba(255, 255, 255, 0.55",
                textDecoration: "none",
              }}
              className="nav-link"
              activeClassName="active"
              to="/Main"
            >
              Store
            </NavLink>}
           {isLoggedIn &&  <NavLink 
              style={{
                color: "rgba(255, 255, 255, 0.55",
                textDecoration: "none",
              }}
              className="nav-link"
              activeClassName="active"
              to="/about"
            >
              About{" "}
            </NavLink>}
         {isLoggedIn &&    <NavLink
              style={{
                color: "rgba(255, 255, 255, 0.55",
                textDecoration: "none",
              }}
              className="nav-link"
              activeClassName="active"
              to="/Contact"
            >
              Contact{" "}
            </NavLink>}
          </Nav>

        </Container>
        {!isLoggedIn && <button  onClick={loginHandler}>Login</button>}
       {isLoggedIn &&  <button style={{color:'white',backgroundColor:'black'}} onClick={logoutHandler}>Logout</button>}
      </Navbar>
      <div>
        {/* Banner */}
        <div className="banner">
          <h1>Welcome to MyShop!</h1>
          <p>Get the best deals on everything you need.</p>
          <Button variant="primary">Shop Now</Button>
        </div>

        {/* Categories */}
        <Container className="categories">
          <h2>Browse by Category</h2>
          <Row>
            <Col xs={12} md={4}>
              <div className="category">
                <img
                  src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
                  alt="category"
                />
                <h3>Category 1</h3>
                <p>Shop Now</p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="category">
                <img
                  src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
                  alt="category"
                />
                <h3>Category 2</h3>
                <p>Shop Now</p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="category">
                <img
                  src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
                  alt="category"
                />
                <h3>Category 3</h3>
                <p>Shop Now</p>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Top Products */}
        <Container className="top-products">
          <h2>Top Products</h2>
          <Row>
            <Col xs={12} md={4}>
              <div className="product">
                <img
                  src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
                  alt="product"
                />
                <h3>Product 1</h3>
                <p>$19.99</p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="product">
                <img
                  src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
                  alt="product"
                />
                <h3>Product 2</h3>
                <p>$24.99</p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="product">
                <img
                  src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
                  alt="product"
                />
                <h3>Product 3</h3>
                <p>$29.99</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;