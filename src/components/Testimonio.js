import React from "react";
import '../stylesheets/Testimonio.css';

function Testimonio(props){
  return(
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio" src={require(`../img/testimonio-${props.imagen}.jpg`)}alt="imagen de persona 1" />
      <div className="contenedor-txt-testimonio">
        <p className="nombre-testimonio"><b>{props.nombre}</b> en {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} en <b>{props.empresa}</b></p>
        <p className="texto-testimonio">"<i>{props.testimonio}</i>"</p>
      </div>

    </div>

  );
}
export default Testimonio;