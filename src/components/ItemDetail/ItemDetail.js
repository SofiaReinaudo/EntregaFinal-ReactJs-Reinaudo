import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";

const ItemDetail = ({id, nombre, precio, img, stock, category, description}) => {

    const [cantidadAgregada, setCantidadAgregada] = useState(0);
    const { agregarItem } = useContext(CartContext)

    const handleOnAdd = (cantidad) => {
        setCantidadAgregada(cantidad);
    
        const item = {id, nombre, precio};
    
        agregarItem(item, cantidad);
    };


    return(
        <div>       
            <div className="card mb-3 container">
                <div className="row g-0 detailContainer">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start imgDetail" alt={nombre}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body itemDetail">
                            <h5 className="card-title titleDetail">{nombre}</h5>
                            <span><p id="precio">${precio}</p></span> 
                            <p className="card-text">Descripción: {description}</p>
                            <p className="card-text">Talle único</p>
                            <span><p>Categoria: {category}</p></span> 
                            <span><p>Stock disponible: {stock}</p></span> 
                            <p className="card-text"><small class="text-body-secondary">Envíos gratis en compras superiores a $40.000</small></p>
                            {cantidadAgregada > 0 ? (<button className="btn btn-dark"><Link to="/" id="linkTerminar">Seguir comprando</Link></button>) : (<ItemCount inicial={1} stock={stock} onAdd={handleOnAdd} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ItemDetail;