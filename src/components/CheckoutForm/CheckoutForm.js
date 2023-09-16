import { useState } from "react";
import "./CheckoutForm.css"

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();
    const userData = {
      name,
      phone,
      email,
    };
    onConfirm(userData);
  };

  return (
    <div >
      <form onSubmit={handleConfirm} id="form">
        <div>
          <label className="labels" htmlFor="name">Nombre</label>
          <input className="inputs rounded" type="text" id="name" value={name} onChange={({ target }) => setName(target.value)} required/>
        </div>
        <div>
          <label className="labels" htmlFor="phone">Teléfono</label>
          <input className="inputs rounded" type="number" id="phone" value={phone} onChange={({ target }) => setPhone(target.value)} required/>
        </div>
        <div className="mb-4">
          <label className="labels" htmlFor="email">Email</label>
          <input className="inputs rounded"type="email"  id="email" value={email} onChange={({ target }) => setEmail(target.value)} required/>
        </div>
        <div>
          <button className="btn btn-dark" type="submit">Crear Orden</button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;