import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../service/firebase/firebaseConfig";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = collection(db, "items")
        const filteredCollectionRef = query(
            collectionRef, 
            where("id", "==", itemId)
            );
        
        getDocs(filteredCollectionRef)
            .then((querySnapshot) => {
                if(!querySnapshot.empty){
                    const doc = querySnapshot.docs[0];
                    const data = doc.data();
                    const productAdapted = {id: doc.id, ...data};
                    setProduct(productAdapted);
                } else{
                    setProduct(null);
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    return(
        <div className="ItemDetailContainer">{loading ? ( <p>Cargando...</p>) : product ? (<ItemDetail {...product} />) : (<p>El producto no existe.</p>)}</div>
    )
}

export default ItemDetailContainer