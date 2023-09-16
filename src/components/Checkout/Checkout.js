import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import {Timestamp, addDoc, collection, doc, documentId, getDocs, query, writeBatch, where,} from "firebase/firestore";
import { db } from "../../service/firebase/firebaseConfig";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { Link } from "react-router-dom";
import "./Checkout.css"

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");
  const { cart, total, limpiarCart } = useContext(CartContext);

  const crearOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const objOrden = {
        user: {
          name,
          phone,
          email,
        },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };
      const batch = writeBatch(db);
      const ids = cart.map((prod) => prod.id);
      const productsRef = collection(db, "items");
      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );
      const { docs } = productsAddedFromFirestore;
      let productosFueraDeStock = false;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;
        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodCantidad = productAddedToCart?.cantidad;

        if (stockDb >= prodCantidad) {
          batch.update(doc.ref, { stock: stockDb - prodCantidad });
        } else {
          productosFueraDeStock.push({ id: doc.id, ...dataDoc });
          productosFueraDeStock = true;
        }
      });

      if (productosFueraDeStock) {
        alert("productos fuera de stock");
      } else {
        await batch.commit();
        const orderRef = collection(db, "orders");
        const orderAgregar = await addDoc(orderRef, objOrden);
        setOrderId(orderAgregar.id);
        limpiarCart();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <div>
        <h1>Espere, estamos procesando su orden</h1>
      </div>
    );
  }
  if (orderId) {
    return (
      <div className="contenedor2">
        <h1 className="tittle">El ID de su orden es:</h1>
        <p id="orderId">{orderId}</p>
        <button className="btn btn-dark"><Link to={`/order/${orderId}`} className="btn2">Revisar Orden</Link></button>
      </div>
    );
  }

  return (
    <div className="contenedor2">
      <h1 className="tittle">Ingrese sus datos de contacto</h1>
      <CheckoutForm onConfirm={crearOrder} />
    </div>
  );
};

export default Checkout;