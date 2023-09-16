import { useState } from "react"
import "./ItemCount.css"

const ItemCount = ({stock, inicial, onAdd}) => {

    const [cantidad, setCantidad] = useState(inicial);
    
    const incrementar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    };
    
    const decrementar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    return(
        <div>
            <p id="contador">Cantidad: {cantidad}</p>
            <div class="btn-group" id="divBotones" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-dark botones" onClick={decrementar}>-</button>
                <button type="button" id="mas" className="btn btn-dark botones" onClick={incrementar}>+</button>
            </div>
            <div>
                <button id="btnAgregar" className="btn btn-dark" onClick={() => onAdd(cantidad)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount