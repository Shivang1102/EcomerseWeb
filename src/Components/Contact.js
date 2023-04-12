
import { useState } from "react";
import { Form,Button, Nav, Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Contact =()=>{

       const [enteredName , setEnteredName]=useState('');
        const [enteredEmail , SetEnteredEmail]= useState('');
    const [ entetrednumber, setEnteredNumber]= useState('');

    const NameChangeHandler =(event)=>{
        setEnteredName(event.target.value);

    }

    const EmailChangeHandler =(event)=>{
               SetEnteredEmail(event.target.value)
    }
    const NumberChangeHandler =(event)=>{
      setEnteredNumber(event.target.value);
    }
  
   const SubmitHandler=(event)=>{
        event.preventDefault();
        const newDetail={
            name:enteredName,
            email:enteredEmail,
            number:entetrednumber
        }
             setEnteredName('');
             SetEnteredEmail('');
             setEnteredNumber('');
        addMovieHandler(newDetail);
        
   }
   async function addMovieHandler(newDetail){
    const response = await fetch('https://react-tutorial-ea45d-default-rtdb.firebaseio.com/Details.json', {
       method: 'POST',
       body:JSON.stringify(newDetail),
       headers:{
         'Content-Type': 'application/json'
       }
      });

      const data= await response.json();
       console.log(data);
    }
    return  <> <Navbar bg="dark" variant="dark">
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
     <Form onSubmit={SubmitHandler}>
     <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Name" value={enteredName} onChange={NameChangeHandler}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" value={enteredEmail} onChange={EmailChangeHandler} />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicNumber">
      <Form.Label>Mobile No</Form.Label>
      <Form.Control type="Mobile" placeholder="Mobile No" value={entetrednumber}  onChange={NumberChangeHandler} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </>
}
 export default Contact;