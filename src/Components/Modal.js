import { Fragment } from "react-bootstrap/dist/react-bootstrap"
import { ReactDOM } from "react-dom";

const Backdrop=(props)=>{
     return <div></div>
}

const ModalOverlays=(props)=>{
   return (
    <div>
        <div>
            {props.children}
        </div>
    </div>
   )
}

const portalelememt= document.getElementById('overlays');

const Modal=(props)=>{
 return <Fragment>
   {ReactDOM.createPortal(<Backdrop/>,portalelememt)}
   {ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays>,portalelememt)}

 </Fragment>

}

export default Modal;