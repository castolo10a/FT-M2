import React from "react";
import { useDispatch } from "react-redux";
import { enviarForm }  from "../../redux/actions/actions";

const ContactUs = () => {
  const dispatch = useDispatch();


  const [form, setForm] = React.useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: ""
  })

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }
  const handleSubmit = () => {
    dispatch(enviarForm(form))
    setForm({
      nombre: "",
      email: "",
      asunto: "",
      mensaje: ""
    })
  }

  return (
    <div className="contactBg">
      <input name="nombre" onChange={handleInput} value={form.name}></input>
      <input name="email" onChange={handleInput} value={form.email}></input>
      <input name="asunto" onChange={handleInput} value={form.asunto}></input>
      <input name="mensaje" onChange={handleInput} value={form.mensaje}></input>
      <button onClick={handleSubmit}>ENVIAR</button>
    </div>
  );
};

export default ContactUs;
