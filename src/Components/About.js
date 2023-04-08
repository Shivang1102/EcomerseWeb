
import { Nav, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const About =()=>{
  return<div>
   <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand >
        <h2>Shopping Mart</h2>
      </Navbar.Brand>
      <Nav className="me-auto " style={{display:'flex' , gap:'1rem',}}>
      <Link   style={{color:'rgba(255, 255, 255, 0.55',textDecoration:'none'}} to='/home'>Home </Link>
        <Link style={{color:'rgba(255, 255, 255, 0.55',textDecoration:'none'}} to='/'>Store</Link>
        <Link   style={{color:'rgba(255, 255, 255, 0.55',textDecoration:'none'}} to='/about'>About </Link>
      </Nav>
    </Container>
    </Navbar>
    <div className="container my-4">
        <div className="row featurette d-flex justify-content-center align-items-center">
            <div className="col-md-7">
                <h2 className="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your
                        mind.</span></h2>
                <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis
                    euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus,
                    tellus ac cursus commodo.</p>
            </div>
            <div className="col-md-5">
                <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                    src="https://source.unsplash.com/500x500/?coder,Enginner" alt=""/>

            </div>
        </div>
        <div className="row featurette d-flex justify-content-center align-items-center">
            <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your
                        mind.</span></h2>
                <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis
                    euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus,
                    tellus ac cursus commodo.</p>
            </div>
            <div className="col-md-5 order-md-1">
                <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                    src="https://source.unsplash.com/500x500/?Developer,Enginner" alt=""/>
            </div>
        </div>
        <div className="row featurette d-flex justify-content-center align-items-center">
            <div className="col-md-7 ">
                <h2 className="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your
                        mind.</span></h2>
                <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis
                    euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus,
                    tellus ac cursus commodo.</p>
            </div>
            <div className="col-md-5">
                <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                    src="https://source.unsplash.com/500x500/?programer,Laptop" alt=""/>
            </div>
        </div>
    </div>

  </div>

}

export default About;