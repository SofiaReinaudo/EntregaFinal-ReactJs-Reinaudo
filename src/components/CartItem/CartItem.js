import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartItem.css"

const CartItem = (p) => {
    const { eliminarItem } = useContext(CartContext);

    return (
        <div>
            <div className="cart" id="itemCard">
                <div className="row row2" style={{padding:"0px"}}>
                    <span className="cart-item-title span" style={{fontSize:"25px", paddingTop:"10px"}}><b>{p.nombre}</b></span>
                    <span className="span">Precio por unidad: ${p.precio}</span>
                    <span className="span">Cantidad: {p.cantidad}</span>
                    <strong className="span">Subtotal: ${p.precio * p.cantidad}</strong>
                </div>
            </div>
            <button id="btnEliminar" className="btn" type="button" onClick={() => eliminarItem(p.id)}>Eliminar</button>
        </div>
    )
};

export default CartItem;