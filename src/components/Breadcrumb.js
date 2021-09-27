import React from "react";
import { Link } from "react-router-dom";

import "./breadcrumb.css";
function Breadcrumb(props) {
  return (
    <>
      <div className="row crumbs">
        <ul className="col-sm col-12">
          <li>
            <a href="">Inmoliario</a>
          </li>
          <li>
            <a href="">partes</a>
          </li>
          <li>
            <a href="">Documentos</a>
          </li>
          <li>
            <a href="">Tasas Judiciales</a>
          </li>

          <li>
            <a href="">Verificacion</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Breadcrumb;
