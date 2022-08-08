import React from "react";
import { useState } from "react";

//inicio por defecto
const initialState = {
  nombre: "",
  apellido: "",
  email: "",
  contraseña: "",
  descripcion: "",
}

const Home = () => {
const [value, setValue] = useState({ initialState });
const [error, setError] = useState({});
//desestruturacion de value
const { nombre, apellido, email, contraseña, descripcion } = value;

 const handleSubmit = (e) => {
   e.preventDefault();
   setValue(initialState);
 }
//evento onChange
const handleChange = (e) => {
  setValue((value)=>  ({...value, [e.target.name]: [e.target.value]}));
  setError(validarErrores({...value, [e.target.name]: [e.target.value]}));
}

//validar errores
const validarErrores = (value) => {
  let error = {};
  if (!value.email) {
      error.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(value.email)) {
       error.email = 'Email is invalid';
  }
  if (value.password && value.password === 'invalid password') {
       error.password = 'Password is required';
  } else if (!/(?=.*[0-9])/.test(value.password)) {
       error.password = 'Password is invalid';
  }
  return error;
};
console.log(value)

  return (
    <div>
      <h1>formulario</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label>Nombre: </label>
          <input 
           type="nombre" 
           name='nombre' 
           placeholder="Ingrese su nombre.."
           value={nombre || ""}
           onChange={handleChange}
            />
          <label>Apellido: </label>
          <input
            type="apellido"
            name="apellido"
            placeholder="Ingrese su apellido.."
            value={apellido || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            placeholder="Ingrese su contraseña.."
            value={email || ""}
            onChange={handleChange}
          />
           {error && error.email && <p style= {{color: "red"}}>{error.email}</p>}
          <label>Contraseña: </label>
          <input
            type="password"
            name="contraseña"
            placeholder="Ingrese su contraseña.."
            value={contraseña || ""}
            onChange={handleChange}
          />
          {error && error.contraseña && <p style= {{color: "red"}}>{error.contraseña}</p>}
        </div>
        <label>Descripcion: </label>
        <div>
          <textarea
            type="text"
            name="descripcion"
            placeholder="Ingrese su Descripcion.."
            value={descripcion || ""}
            onChange={handleChange}
          />
          <button>Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Home;
