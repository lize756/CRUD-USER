import React, { useState } from "react";
import "./ShowContainer.css";
import { Link } from "react-router-dom";

const ShowContainer = () => {
  const [dataVariable, setDataVariable] = useState({
    career: " Sistemas ----",
    practice: " 3 ",
    duraction: "1 Año",
    wage: "1.200.000",
    detail: " Buenas practicas",
    skills: "Buenas practicas",
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
            <div className="text-defaul col-sm-6  pull-left">
              <label htmlFor="validationDefault01">
                Carrera a solicitar practica
              </label>
            </div>

            <input
              type="text"
              className="form-control-plaintext"
              id="staticCareer"
              placeholder={dataVariable.career}
            />
          </div>

          <div className="p-3 col-sm-6 ">
            <div className="text-defaul col-sm-6  pull-left">
              <label htmlFor="validationDefault01">
                Número de practicantes
              </label>
            </div>
            <input
              type="text"
              className="form-control-plaintext"
              id="staticPractice"
              placeholder={dataVariable.practice}
            />
          </div>

          <div className="p-3 col-sm-6 ">
            <div className="text-defaul col-sm-6  pull-left">
              <label htmlFor="validationServer01">
                Salario de los practicante
              </label>
            </div>

            <input
              type="text"
              className="form-control-plaintext"
              id="staticWage"
              placeholder={dataVariable.wage}
            />
          </div>

          <div className="p-3 col-sm-6 ">
            <div className="text-defaul col-sm-6  pull-left">
              <label htmlFor="validationDefault01">
                Duración de la practica
              </label>
            </div>

            <input
              type="text"
              className="form-control-plaintext"
              id="staticDuration"
              placeholder={dataVariable.duraction}
            />
          </div>

          <div className="p-3 form-group">
            <div className="text-defaul">
              <label htmlFor="exampleFormControlTextarea1">
                Descripción de la practica
              </label>
            </div>

            <textarea
              className="form-control-plaintext"
              id="staticDetail"
              rows="3"
              placeholder={dataVariable.detail}
            ></textarea>
          </div>

          <div className="p-3 form-group">
            <div className="text-defaul">
              <label htmlFor="exampleFormControlTextarea1">
                Habilidades requeridas para la practica
              </label>
            </div>

            <textarea
              className="form-control-plaintext"
              id="staticSkills"
              rows="3"
              placeholder={dataVariable.skills}
            ></textarea>
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
