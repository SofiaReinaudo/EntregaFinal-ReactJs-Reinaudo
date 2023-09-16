import { useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import "./Cart.css"

const Cart = ({ closeCart }) => {
    const {cart, limpiarCart, totalCantidad, total} = useContext(CartContext);

    const handleValidarCompra = () => {
        closeCart(); 
    };

    return (
        <div>
            <div className="border rounded bg-white" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title fs-4 cart-tittle" id="staticBackdropLabel">
                                <i className="fa-solid fa-cart-shopping fa-sm"></i>
                                Tu carrito</h3>
                        </div>
                        <div className="modal-body" id="modal-body">
                        {totalCantidad===0 ? (<div><h4 class='fs-4 text-center'>No hay productos cargados :(</h4></div>) : (cart.map((p) => (<CartItem key={p.id} {...p} />)))}
                        </div>
                        <div className="modal-footer">
                            <div id="pagoTotal" style={{fontSize: "25px", position: "relative", right:"50px"}}></div>
                            <button type="button" className="btn btn-outline-dark btn-rosa"  onClick={() => limpiarCart()}>Vaciar carrito</button>
                            <Link to="/login" >
                                {" "}
                                <button className="btn btn-dark" id="finalizar-compra" onClick={handleValidarCompra}>Finalizar Compra</button> 
                            </Link> 
                            <strong className="cart-total-title">Total: ${total} </strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;