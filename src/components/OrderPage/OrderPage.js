import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../service/firebase/firebaseConfig";
import "./OrderPage.css"

const OrderPage = () => {
  const { orderId } = useParams();
  const [orderData, setOrderData] = useState({});
  const [loading, setLoading] = useState(true);
  const [orderDeleted, setOrderDeleted] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [total, setTotal] = useState(0);

  const handleEliminarOrden = (orderId) => {
    if (window.confirm("¿Estás seguro que deseas eliminar esta orden?")) {
      const orderRef = doc(db, "orders", orderId);

      deleteDoc(orderRef)
        .then(() => {
          //Actualizamos el estado
          setOrderDeleted(true);
          setConfirmationMessage("La orden ha sido eliminada correctamente.");
          //LIMPIAMOS LOS DATOS
          setOrderData({});
        })
        .catch((error) => {
          alert("Error al eliminar la orden:", error);
        });
    }
  };

  useEffect(() => {
    const orderRef = doc(db, "orders", orderId);

    getDoc(orderRef)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          setOrderData(data);
          const totalOrden = data.items.reduce((acc, product) => acc + product.precio * product.cantidad, 0);
          setTotal(totalOrden);
        } 
      })
      .catch((error) => {
        alert("Error al obtener la orden:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [orderId]);

  if (orderDeleted) {
    return (
      <div className="">
        <h1 className="t">
          {confirmationMessage}
        </h1>
        <button className=" 0">
          <Link to="/">Regresar al Inicio</Link>
        </button>
      </div>
    );
  }

  return (
    <div className="contenedor2">
      <div>
        {loading ? (
          <p>
            Cargando detalles de la orden...
          </p>
        ) : !orderData ? (
          <p>La orden no existe.</p>
        ) : (
          <div>
            <h2 className="tittle">
              Detalles de la Orden:{" "}
              <p>{orderId}</p>
            </h2>
            {orderData.user ? (
              <div>
                {/* EN ESTA SECCIÓN MOSTRAREMOS LOS DETALLES DE LA ORDEN */}
                <p>
                  <span className="font-bold text-blue-600">Nombre:</span>{" "}
                  {orderData.user.name || "No disponible"}
                </p>
                <p>
                  <span>Teléfono:</span>{" "}
                  {orderData.user.phone || "No disponible"}
                </p>
                <p>
                  <span>Email:</span>{" "}
                  {orderData.user.email || "No disponible"}
                </p>
                <h3>
                  Detalles del Producto:
                </h3>
                {orderData.items.map((product, index) => (
                  <div key={index}>
                    <p>
                      <span>
                        Nombre del Producto:
                      </span>{" "}
                      {product.nombre || "No disponible"}
                    </p>
                    <p>
                      <span>Cantidad:</span>{" "}
                      {product.cantidad || "No disponible"}
                    </p>
                    <p>
                      <span>Precio por unidad:</span> $
                      {product.precio || "No disponible"}
                    </p>
                    {index < orderData.items.length - 1 && (
                      <hr className="my-4" />
                    )}
                  </div>
                ))}
                <div>
                  <h3>
                    Total: ${total.toFixed(2)}
                  </h3>
                </div>
              </div>
            ) : (
              <p>Datos del usuario no disponibles.</p>
            )}
          </div>
        )}
      </div>
      <div className="">
        <button className="btn btn-outline-dark btn-rosa" style={{marginRight: "10px"}}>
          <Link className="btn2" style={{color: "black"}} to="/">Regresar al Inicio</Link>
        </button>
        <button onClick={() => handleEliminarOrden(orderId)} className="btn btn-dark">Eliminar Orden</button>
      </div>
    </div>
  );
};

export default OrderPage;