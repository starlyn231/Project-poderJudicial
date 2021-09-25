import React from "react";

function Page3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <div className="row justify-content-md-center" id="table-row">
      <div className="iconos ml-10">
        {" "}
        <i className="material-icons ">
          <span class="material-icons-outlined">person_add_alt</span>
        </i>
        <i className="material-icons " id="delete">
          delete
        </i>
      </div>
      <div className="col-11 p-2" id="content">
        <table className="table" id="tabla-comp">
          <thead>
            <tr>
              <th scope="col">
                {" "}
                <input type="checkbox" value="" />
              </th>
              <th scope="col">Nombre Completo</th>
              <th scope="col">Identificacion</th>
              <th scope="col">Calidad</th>
              <th scope="col">Representante</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody className="cuerpo">
            <tr>
              <th scope="row">
                <input type="checkbox" value="" />
              </th>
              <td>Juan Arturo</td>
              <td>224-0035942-1</td>
              <td>Recurrente</td>
              <td>Polo Contreras</td>
              <td>
                <i class="material-icons">edit</i>
              </td>
            </tr>
            <tr>
              <th scope="row">
                {" "}
                <input type="checkbox" value="" />
              </th>
              <td>Polo Contreras</td>
              <td>224-0035942-1</td>
              <td>Representante</td>
              <td>N/A</td>
              <td>
                <span className="material-icons">edit</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Page3;
