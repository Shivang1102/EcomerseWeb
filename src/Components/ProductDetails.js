
import { useParams } from "react-router-dom";
const ProductDeatails =()=>{
  const params =useParams();

  console.log(params.productId)

   return <div>
    <p>{params.productId} </p>
   </div>
}

export default ProductDeatails;