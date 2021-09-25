import { Alert } from "../components/Alert";
import "./style2.css";
function Page2(props) {
  if (props.currentStep !== 2) {
    return null;
  }

  return (
    <div className="row justify-content-md-center" id="table-row">
      <div className="iconos ml-10">
        {" "}
        <i className="material-icons " id="storefront">
          storefront
        </i>
        <i className="material-icons " id="delete">
          delete_sweep
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
              <th scope="col">Distrito Catastral</th>
              <th scope="col">Tipo de Inmueble</th>
              <th scope="col">Titulo</th>
              <th scope="col">Teléfono</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody className="cuerpo">
            <tr>
              <th scope="row">
                <input type="checkbox" value="" />
              </th>
              <td>Santo Domingo</td>
              <td>Condominio</td>
              <td>Juan Maraca</td>
              <td>809-555-5555</td>
              <td>
                <i class="material-icons">edit</i>
              </td>
            </tr>
            <tr>
              <th scope="row">
                {" "}
                <input type="checkbox" value="" />
              </th>
              <td>San Juan</td>
              <td>Condominio</td>
              <td>Juan Maraca</td>
              <td>809-555-5555</td>
              <td>
                <span className="material-icons">edit</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Alert />
    </div>
  );
}

export default Page2;
