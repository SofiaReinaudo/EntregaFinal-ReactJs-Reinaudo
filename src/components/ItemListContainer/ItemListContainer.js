import { useEffect } from "react";
import { useState } from "react"
import { getProducts, getProductsByCategory, getProductsById} from "../../asyncMock";
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";
import "./ItemListContainer.css"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);

    const {categoryId} = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [categoryId])

    return(
        <div>
            <h1 id="greeting" >{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer