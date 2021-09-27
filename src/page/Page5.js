import React from "react";
import { Alert } from "../components/Alert";

function Page5(props) {
  if (props.currentStep !== 5) {
    return null;
  }

  return (
    <div>
      <div>
        <div className="row justify-content-md-center" id="table-row">
          <div className="iconos ml-10 col-sm-12 col-md-12 ">
            {" "}
            <i class="material-icons">description</i>
            <i className="material-icons " id="delete">
              delete
            </i>
          </div>
          <div
            className="col-sm-6 mt-20 col-md-8 mt-10  d-flex "
            id="page4-matriz"
          >
            <table className="table" id="tabla-comp">
              <thead>
                <tr>
                  <th scope="col">
                    {" "}
                    <input type="checkbox" value="" />
                  </th>
                  <th scope="col">tipo de documento</th>
                  <th scope="col">Nro. de documento</th>
                  <th scope="col">Valor Rd$</th>

                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody className="cuerpo">
                <tr>
                  <th scope="row">
                    <input type="checkbox" value="" />
                  </th>
                  <td>Recibido</td>
                  <td>056-563</td>
                  <td>RD$32.00</td>

                  <td>
                    <i class="material-icons">edit</i>
                    <i class="material-icons">link_off</i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {" "}
                    <input type="checkbox" value="" />
                  </th>
                  <td>Sello</td>
                  <td>10-695</td>
                  <td>RD$10.00</td>

                  <td>
                    <i class="material-icons">edit</i>
                    <i class="material-icons">link_off</i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-sm-6 col-md-3" id="cuadro-documentos">
            <h6 className="text-left mt-4">Matriz de documentos</h6>
            <hr />
            <div className="contenedor-list ">
              <ul className="">
                <li>No cargado</li>
                <li>Documento vinculado</li>
                <li>Archivo cargado</li>
              </ul>
            </div>

            <div className="m-2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit
              </p>
            </div>
            <div className="lista-tipo-doc">
              <ol>
                <li>Tipo de documentos 1</li>
                <li>Tipo de documentos 2</li>
                <li>Tipo de documentos 3</li>
                <li>Tipo de documentos 4</li>
                <li>Tipo de documentos 5</li>
                <li>Tipo de documentos 6</li>
              </ol>
            </div>
          </div>
        </div>
        <Alert />
      </div>
    </div>
  );
}

export default Page5;
