
import {Navbar, Container,Nav, Carousel,Button,Modal} from 'react-bootstrap';
import CartIcon from  './CartIcon'
import React,{useState} from 'react';
import classes from './Headerbutton.module.css'
import Cart from './Cart';



const Header=(props)=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

     const  opencart=(e)=>{
        props.onShowCart(e)
      }


    return<><Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand >
        <h2>Shopping Mart</h2>
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link  >Home</Nav.Link>
        <Nav.Link >Store</Nav.Link>
        <Nav.Link >About </Nav.Link>
      </Nav>
    </Container>
       {/* <form className="d-flex" role="search">
       
        <button className={classes.button} type="button" onClick={opencart}>
            <span  className={classes.icon}><CartIcon/></span>
            <span>Your Cart</span>
            <span >3</span>
        </button>
      </form> */}
      <Button variant="primary" onClick={handleShow}>
      <span  className={classes.icon}><CartIcon/></span>
            <span>Your Cart</span>
            <span >3</span>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart Items</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Cart/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
               Order
          </Button>
        </Modal.Footer>
      </Modal>
  </Navbar>
  <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/1400x400/?Shopping,Onlineshopping"
          alt="First slide"
          sizes="400x400"
        />
        <Carousel.Caption>
        <Button variant="success">Online Shopping</Button>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/1400x400/?Discount,sale"
          alt="Second slide"
        />
        <Carousel.Caption>
        <Button variant="warning">Heavy Discount</Button>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/1400x400/?CART,Ecommerce"
          alt="Third slide"
        />
        <Carousel.Caption>
        <Button variant="primary">Freedom Sale</Button>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    </>
}

export default Header;