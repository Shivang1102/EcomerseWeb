import { Link } from "react-router-dom";

const Footer=()=>{
    return <> <footer className="container " >
       <p className="float-right"> <Link to="#">Back to top</Link> </p>
      <p>© 2022-2023 Shivang's Blog. <Link href="#">Privacy</Link> · <Link href="#">Terms</Link></p>
     </footer>
    
    </>
}

export default Footer;