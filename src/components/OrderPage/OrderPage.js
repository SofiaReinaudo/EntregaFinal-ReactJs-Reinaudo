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
      <div className=" ">
        {loading ? (
          <p className="">
            Cargando detalles de la orden...
          </p>
        ) : !orderData ? (
          <p className="">La orden no existe.</p>
        ) : (
          <div className="">
            <h2 className="tittle">
              Detalles de la Orden:{" "}
              <p className="">{orderId}</p>
            </h2>
            {orderData.user ? (
              <div>
                {/* EN ESTA SECCIÓN MOSTRAREMOS LOS DETALLES DE LA ORDEN */}
                <p>
                  <span className="font-bold text-blue-600">Nombre:</span>{" "}
                  {orderData.user.name || "No disponible"}
                </p>
                <p>
                  <span className="">Teléfono:</span>{" "}
                  {orderData.user.phone || "No disponible"}
                </p>
                <p>
                  <span className="">Email:</span>{" "}
                  {orderData.user.email || "No disponible"}
                </p>
                <h3 className="">
                  Detalles del Producto:
                </h3>
                {orderData.items.map((product, index) => (
                  <div key={index}>
                    <p>
                      <span className="">
                        Nombre del Producto:
                      </span>{" "}
                      {product.nombre || "No disponible"}
                    </p>
                    <p>
                      <span className="">Cantidad:</span>{" "}
                      {product.cantidad || "No disponible"}
                    </p>
                    <p>
                      <span className="">Precio por unidad:</span> $
                      {product.precio || "No disponible"}
                    </p>
                    {index < orderData.items.length - 1 && (
                      <hr className="my-4" />
                    )}
                  </div>
                ))}
                <div className="">
                  <h3 className="">
                    Total: ${total.toFixed(2)}
                  </h3>
                </div>
              </div>
            ) : (
              <p className="">Datos del usuario no disponibles.</p>
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