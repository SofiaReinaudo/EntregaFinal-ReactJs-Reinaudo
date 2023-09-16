import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    //correo y contraseña definidos
    if (email === "MadeInHeaven@mail.com" && password === "tiendadechicas") {
      setIsLoggedIn(true);
    }
  };

  return (
    <div>
      <div className="contenedor">
        <h2 className="m-4">Iniciar sesión</h2>
        <div id="inputs">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className= "mb-2 border rounded inputs"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 border rounded contraseña inputs"
          required
        />
        </div>
        <div className="row">
          <strong>Correo definido: MadeInHeaven@mail.com</strong>
          <strong>Contraseña definida: tiendadechicas</strong>
        </div>
        <div className="mt-3">
        <button onClick={handleLogin}className="btn btn-outline-dark iniciar">Iniciar sesión</button>
        <button className="btn btn-dark inicio"><Link className="btn2" to="/">Ir al Inicio</Link></button>
        {isLoggedIn && (<Link to="/checkout"><button className="btn" id="IrCheckout">Ir al Checkout</button></Link>)}
        </div>
      </div>
    </div>
  );
};

export default Login;