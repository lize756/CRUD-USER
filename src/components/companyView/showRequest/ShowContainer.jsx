import React, { useState } from "react";
import "./ShowContainer.css";
import { Link } from "react-router-dom";

const ShowContainer = () => {
  const [dataVariable, setDataVariable] = useState({
    career: " Lorem ipsum dolor sit amet",
    practice: " 3 ",
    duraction: "1 Año",
    wage: "1.200.000",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    skills:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  });

  const printValues = (e) => {
    e.preventDefault();
    console.log("QUIERO IR A EDITAR");
  };
  return (
    <>
      <form onSubmit={printValues}>
        <div className="row px-5 gx-5">
          <div className="p-3 col-sm-6 ">
            <div className=" p-2">
              <label htmlFor="validationDefault01">
                Carrera a solicitar practica
              </label>
            </div>

            <div className="showText p-2 col-sm-6">
              <label htmlFor="validationDefault01">{dataVariable.career}</label>
            </div>
          </div>

          <div className="p-3 col-sm-6 ">
            <div className="p-2">
              <label htmlFor="validationDefault01">
                Número de practicantes
              </label>
            </div>
            <div className="showText p-2 col-sm-6">
              <label htmlFor="validationDefault01">
                {dataVariable.practice}
              </label>
            </div>
          </div>

          <div className="p-3 col-sm-6 ">
            <div className="textType p-2 col-sm-6  pull-left">
              <label htmlFor="validationServer01">
                Salario de los practicante
              </label>
            </div>

            <div className="textLabel p-2  col-sm-6">
              <label htmlFor="validationDefault01">{dataVariable.wage}</label>
            </div>
          </div>

          <div className="p-3 col-sm-6 ">
            <div className="textType p-2 col-sm-6  pull-left">
              <label htmlFor="validationDefault01">
                Duración de la practica
              </label>
            </div>

            <div className="textLabel p-2  col-sm-6">
              <label htmlFor="validationDefault01">
                {dataVariable.duraction}
              </label>
            </div>
          </div>

          <div className="p-3 form-group">
            <div className="textType p-2">
              <label htmlFor="exampleFormControlTextarea1">
                Descripción de la practica
              </label>
            </div>

            <textarea
              className="textArea p-2 form-control-plaintext"
              id="staticDetail"
              rows="3"
              readonly="readonly"
            >
              {dataVariable.detail}
            </textarea>
          </div>

          <div className="p-3 form-group">
            <div className="textType p-2">
              <label htmlFor="exampleFormControlTextarea1">
                Habilidades requeridas para la practica
              </label>
            </div>

            <textarea
              className="textArea p-2 form-control-plaintext"
              id="staticSkills"
              rows="3"
              readonly="readonly"
            >
              {dataVariable.skills}
            </textarea>
          </div>
        </div>

        <div className="container ">
          <div className="row justify-content-center p-3">
            <div className="col-4 p-3 ">
              <Link to="/update-request">
                <button className="btn btn-primary" type="submit">
                  Editar
                </button>
              </Link>
            </div>
            <div className="col-4 p-3">
              <button type="button" className="btn btn-secondary">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ShowContainer;
