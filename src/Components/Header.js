
import {Navbar, Container,Nav, Carousel,Button,Modal} from 'react-bootstrap';
import CartIcon from  './CartIcon'
import React,{useState, useContext} from 'react';
import classes from './Headerbutton.module.css'
import Cart from './Cart';
import './LandingPage.css';
import CartContext from '../Store/card-context';
import { NavLink} from 'react-router-dom';


const Header=(props)=>{
    const [show, setShow] = useState(false);
    const cartctx= useContext(CartContext);

    const numberofcartItem= cartctx.items.reduce((currentnum, item)=>{
        return currentnum + item.amount;
    },0)
   
      
    const handleClose = () => setShow(false);
    const handleShow = () => {
        
        setShow(true)
     
    };

     const orderSucess=()=>{
        alert('Thank you for shopping! Order Sucessfull')
     }


    return<><Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand >
        <h2>Shopping Mart</h2>
      </Navbar.Brand>
      <Nav className="me-auto"  style={{display:'flex' , gap:'1rem',}}>
      <NavLink   style={{color:'rgba(255, 255, 255, 0.55', textDecoration:'none' }} className="nav-link"  activeClassName="active" to='/home'>Home </NavLink>
      <NavLink   style={{color:'rgba(255, 255, 255, 0.55', textDecoration:'none'}}  className="nav-link"   activeClassName="active" to='/'>Store</NavLink>
      <NavLink   style={{color:'rgba(255, 255, 255, 0.55', textDecoration:'none'}}  className="nav-link"   activeClassName="active"to='/about'>About </NavLink>
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
            <span >{numberofcartItem}</span>
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
          <Button variant="primary" onClick={orderSucess} >
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