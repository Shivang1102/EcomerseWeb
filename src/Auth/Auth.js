import { useState, useRef, useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import classes from "./AuthForm.module.css";
import CartContext from "../Store/card-context";

const AuthForm = () => {

  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const authCtx = useContext(CartContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const [isLoading, setIsLoading] = useState(false);

  const enteredEmailRef = useRef();
  const enteredPasswordRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = enteredEmailRef.current.value;
    const enteredPassword = enteredPasswordRef.current.value;

    setIsLoading(true);
    let url;

    if (isLogin) {
       url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDDc95s07l_05ScHudZioRknTJX8QvwBL8";
    
      } else {
        url ="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDDc95s07l_05ScHudZioRknTJX8QvwBL8";
       
      }
      fetch( url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          setIsLoading(false);
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = "Authenciation Failed";
              if (data && data.error && data.error.message) {
                errorMessage = data.error.message;
              }
  
              throw new Error(errorMessage);
              
            });
          }
        })
        .then((data) => {

          const expirationTime = new Date(
            new Date().getTime() + +data.expiresIn * 1000
          );
          console.log(data);
          authCtx.login(data.idToken,expirationTime.toISOString(),data.email)
          navigate('/Home');
       
        })
        .catch((err) => {
          alert(err.message);
        });
 
   
  };

  return (
    <>
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
            
            {!isLoggedIn && <NavLink
              style={{
                color: "rgba(255, 255, 255, 0.55",
                textDecoration: "none",
              }}
              className="nav-link"
              activeClassName="active"
              to="/login"
            >
              Login{" "}
            </NavLink>}
             {isLoggedIn && <button>Logout</button>}
          </Nav>
        </Container>
      </Navbar>

      <section className={classes.auth}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={enteredEmailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              required
              ref={enteredPasswordRef}
            />
          </div>
          <div className={classes.actions}>
            {!isLoading && (
              <button>{isLogin ? "Login" : "Create Account"}</button>
            )}
            {isLoading && <p>Sending Request...</p>}
            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default AuthForm;
