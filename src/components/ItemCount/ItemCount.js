import { useState } from "react"
import "./ItemCount.css"

const ItemCount = ({stock, initial, onAdd,}) => {

    const [quantity, setQuantity] = useState(initial)
    
    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity-1)
        }
    }

    return(
        <div>
            <p id="contador">Cantidad: {quantity}</p>
            <div class="btn-group" id="divBotones" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-dark botones" onClick={decrement}>-</button>
                <button type="button" id="mas" className="btn btn-dark botones" onClick={increment}>+</button>
            </div>
            <div>
                <button id="btnAgregar" className="btn btn-dark" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount