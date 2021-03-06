import React from "react";
import swal from "sweetalert";
import "../page/style2.css";

export const Alert = () => {
  const showalert = () => {
    swal({
      title: "Are you sure?",
      text: " El Borrador de esta solicitud fue guardado correctamente,  ¿desea imprimir una constancia para el usuario?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    });
  };

  return (
    <div>
      <button
        id="borrador"
        type="button"
        className="btn btn-outline-secondary position-relative"
        onClick={() => showalert()}
      >
        Guardar Borrador
      </button>
    </div>
  );
};
