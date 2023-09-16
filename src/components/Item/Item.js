import { Link } from "react-router-dom";
import "./Item.css"

const Item = ({id, nombre, precio, img}) => {

    return(
            <div id="productoItem" className="card" >
                <Link to={`/item/${id}`}><img src={img} id="img" alt={nombre}/></Link>
                <div className="card-body">
                    <span><h2>{nombre}</h2></span>
                    <span><p>${precio}</p></span> 
                    <Link to={`/item/${id}`} className="btn btn-dark" id="btnComprar" >Comprar</Link>       
                </div>
            </div> 
    )
};

export default Item;