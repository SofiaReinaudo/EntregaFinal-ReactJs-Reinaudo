import Item from '../Item/Item'
import "./ItemList.css"

const ItemList = ({products}) => {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div id="contenedorProductos" class="row row-cols-1 row-cols-md-3 g-4">
                    {products.map((prod) => (<Item key={prod.id} {...prod} />))}
                    </div>
                </div>
            </div>            
        </div>
    )
};

export default ItemList;
