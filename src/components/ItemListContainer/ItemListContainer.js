import { useEffect } from "react";
import { useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";
import "./ItemListContainer.css"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../service/firebase/firebaseConfig";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db, 'items'), where('category', '==', categoryId))
            : collection(db, 'items')
        
        getDocs(collectionRef) 
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return(
    <div>
        <h1 id="greeting">{greeting}</h1>
        {loading ? (<p>Cargando productos...</p>) : (<ItemList products={products} />)}
    </div>
    )
}

export default ItemListContainer