import React from "react";
import "./style.css";
function Page1(props) {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <div className="row  ">
      <div className="mb-10px">
        {" "}
        <i className="material-icons mb-2">arrow_back</i> Regresar
      </div>
      <div className="col-sm-3 col-md-4 " id="depositante">
        <legend>Depositante</legend>
        <hr />
        <div className="form-group  mb-2">
          <label for="gender">Tipo de identificación</label>
          <select
            name="gender"
            id="gender"
            className="form-control custom-selec"
          >
            <option selected>Seleccionar tipo de identificación</option>
            <option value="male">Cedula</option>
            <option value="female">Pasaporte</option>
          </select>
        </div>
        <div className="form-group">
          <label for="username">Identificación</label>
          <input
            type="number"
            name="cedula"
            id="username"
            className="form-control  mb-2"
            placeholder="223-0032312-7"
            required
          />
        </div>
        <div className="form-group">
          <label for="username">Nombre Completo</label>
          <input
            type="text"
            name="nombre"
            id="username"
            className="form-control mb-2"
            placeholder="Ana Maria"
            value="Ana Maria"
            disabled
            required
          />
        </div>
        <div className="row mb-3">
          <div className="col">
            <div className="form-group">
              <label for="firstname">Corro electronico</label>
              <input
                type="email"
                name="email"
                placeholder="Ej.: Oscardiazaed@gmail.com"
                id="email"
                className="form-control"
              />
              <div className="invalid-feedback">Looks good!</div>
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label for="Sexo">Sexo</label>
              <select name="Sexo" id="Sexo" class="form-control">
                <option value="male">Masculino</option>
                <option value="female">Femenino</option>
              </select>
            </div>
          </div>
        </div>
        {/* telefono y celular */}
        <div className="row  mb-3">
          <div className="col ">
            <div className="form-group ">
              <label for="telefono">Telefono</label>
              <input
                type="tel"
                name="telefono"
                placeholder="Ej.: 809-555-555"
                id="email"
                className="form-control"
              />
              <div className="invalid-feedback">Looks good!</div>
            </div>
          </div>
          <div className="col ">
            <div className="form-group">
              <label for="telefono">Celular</label>
              <input
                type="tel"
                name="cel"
                placeholder="Ej.: 809-555-555"
                id="email"
                className="form-control"
              />
            </div>
          </div>
        </div>

        <div className="form-group  m-2">
          <label for="gender">Perfil de portal</label>
          <select
            name="gender"
            id="perfil"
            className="form-control custom-selec"
          >
            <option selected>Seleccione perfil</option>
            <option value="user">Usuario</option>
            <option value="admin">Admin</option>
          </select>
        </div>
      </div>
      {/* Fila #1  */}
      <div className="col-sm-3 col-md-7   " id="deposito">
        <legend>Deposito</legend>
        <hr />
        <div className="row  mb-3">
          <div className="col ">
            <div className="form-group">
              <label class="control-label" for="date">
                Fecha recepcion
              </label>
              <input
                class="form-control"
                id="date"
                name="date"
                placeholder="DD/MM/YYY hh:mm am/pm"
                type="text"
              />
            </div>
          </div>

          <div className="col ">
            <div className="form-group">
              <label for="Sexo"> Es un expediente nuevo? </label>
              <select name="expediente" id="expediente" class="form-control">
                <option selected>Seleccionar</option>
                <option value="si">Si</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
          <div className="col ">
            <div className="form-group">
              <label for="telefono">NUC</label>
              <input
                type="number"
                name="NUC"
                placeholder="2021-00015"
                id="nuc"
                className="form-control"
              />
            </div>
          </div>
        </div>

        {/* Fila #2  */}
        <legend>Ubicación</legend>
        <hr />
        <div className="row mb-3 ">
          <div className="col">
            <div className="form-group">
              <label for="categoria-tribunal"> Categoria Tribunal</label>
              <select name="categoria" id="categoria" className=" form-control">
                <option selected>Seleccione Categoria</option>
                <option value="si">Si</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label for="categoria-tribunal"> Materia</label>
              <select name="Materia" id="Materia" class="form-control">
                <option selected>Seleccionar Materia</option>
                <option value="si">Si</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label for="sede"> Sede</label>
              <select name="sede" id="sede" class="form-control">
                <option selected>Seleccionar sede</option>
                <option value="si">sede a</option>
                <option value="no">sede b</option>
              </select>
            </div>
          </div>
        </div>

        {/* Fila #3  */}

        <div className="row mb-3 ">
          <div className="col">
            <div className="form-group">
              <label for="departamento-judicial"> Departamento Judicial</label>
              <select
                name="departamento-judicia"
                id="departamento-judicia"
                className=" form-control"
              >
                <option selected>Seleccione distrito</option>
                <option value="si">Si</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label for="Distrito-judicial"> Distrito Judicial</label>
              <select
                name="Distrito-judicial"
                id="Distrito-judicial"
                class="form-control"
              >
                <option selected>Seleccionar distrito</option>
                <option value="si">Distrito 1</option>
                <option value="no">Distrito 2</option>
              </select>
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label for="tribunal"> Tribunal</label>
              <select name="tribunal" id="tribunal" class="form-control">
                <option selected>Seleccionar tribunal</option>
                <option value="si">sede a</option>
                <option value="no">sede b</option>
              </select>
            </div>
          </div>
        </div>

        {/* Fila only  */}
        <div className="row mb-3">
          <div className="col-3">
            <div className="form-group">
              <label for="sala"> Sala</label>
              <select name="sala" id="sala" className=" form-control">
                <option selected>Seleccionar sala</option>
                <option value="si">Si</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
        </div>

        {/* last row  */}

        <legend>Trámite</legend>
        <hr />
        <div className="row  ">
          <div className="col">
            <div className="form-group">
              <label for="procedimiento"> Tipo de procedimiento</label>
              <select
                name="procedimiento"
                id="categoria"
                className=" form-control"
              >
                <option selected>Seleccione tipo de procedimiento</option>
                <option value="si">procedimiento 1</option>
                <option value="no">procedimiento 2</option>
              </select>
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label for="categoria-tribunal"> Asunto</label>
              <select name="asunto" id="asunto" class="form-control">
                <option selected>Seleccionar asunto</option>
                <option value="asunto1">asunto 1</option>
                <option value="asunto2">asunto 2</option>
              </select>
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label for="objeto"> Objeto</label>
              <select name="objeto" id="objeto" class="form-control">
                <option selected>Seleccionar objeto</option>
                <option value="objeto1">objeto a</option>
                <option value="objeto2">objeto b</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
