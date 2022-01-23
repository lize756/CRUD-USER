import React, { useState } from "react";
import "./RequestContainer.css";

const RequestContainer = (props) => {
  const [selectedCareer, setSelectedCareer] = useState();
  const [selectedNumber, setSelectedNumber] = useState();
  const [selectedDuration, setSelectedDuration] = useState();
  const [dataVariable, setDataVariable] = useState({
    nameRequest: "",
    city: "",
    wage: "",
    detail: "",
    skills: "",
  });

  const careers = [
    {
      label: "Seleccionar una carrera",
      value: "seleccionar una carrera",
    },
    {
      label: "Administración de Empresas",
      value: "administración de empresas",
    },
    {
      label: "Contaduría Pública",
      value: "contaduría pública",
    },
    {
      label: "Economía",
      value: "economia",
    },
    {
      label: "Mercadeo Internacional y Publicidad",
      value: "mercadeo internacional y publicidad",
    },
    {
      label: "Economía y Negocios Internacionales",
      value: "economia y negocios internacionales",
    },
    {
      label: "Ingeniería de Sistemas",
      value: "ingenieria de sistemas",
    },
    {
      label: "Ingeniería Telemática",
      value: "ingenieria telematica",
    },
    {
      label: "Ingeniería Agronómica",
      value: "ingenieria agronomica",
    },
    {
      label: "Ingeniería Industrial",
      value: "ingenieria industrial",
    },
    {
      label: "Ingeniería Bioquimica",
      value: "ingenieria bioquimica",
    },
    {
      label: "Diseño Industrial",
      value: "diseño industrial",
    },
    {
      label: "Antropología",
      value: "antropologia",
    },
    {
      label: "Derecho",
      value: "derecho",
    },
  ];

  const numbers = [
    {
      label: "Seleccionar número de practicantes",
      value: "seleccionar numero de practicantes",
    },
    {
      label: "Uno",
      value: "uno",
    },
    {
      label: "Dos",
      value: "dos",
    },
    {
      label: "Tres",
      value: "tres",
    },
    {
      label: "Cuatro",
      value: "cuatro",
    },
    {
      label: "Cinco",
      value: "cinco",
    },
    {
      label: "Seis",
      value: "seis",
    },
    {
      label: "Siete",
      value: "siete",
    },
    {
      label: "Ocho",
      value: "ocho",
    },
    {
      label: "Nueve",
      value: "nueve",
    },
    {
      label: "Diez",
      value: "diez",
    },
  ];

  const durations = [
    {
      label: "Seleccionar la duración de la practica",
      value: "seleccionar la duracion de la practica",
    },
    {
      label: "6 Meses",
      value: "6 meses",
    },
    {
      label: "Un Año",
      value: "un año",
    },
    {
      label: "Un Año y Seis Meses",
      value: "un año y seis meses",
    },
    {
      label: "Dos Años",
      value: "dos años",
    },
  ];

  const printValues = (e) => {
    e.preventDefault();
    console.log(
      selectedCareer,
      selectedNumber,
      selectedDuration,
      dataVariable.wage,
      dataVariable.detail,
      dataVariable.skills,
      dataVariable.nameRequest,
      dataVariable.city
    );
  };

  const handleVariable = (e) => {
    setDataVariable({
      ...dataVariable,
      [e.target.id]: e.target.value,
    });
  };

  const handleChangeCareer = (e) => {
    setSelectedCareer(e.target.value);
  };

  const handleChangeNumber = (e) => {
    setSelectedNumber(e.target.value);
  };

  const handleChangeDuration = (e) => {
    setSelectedDuration(e.target.value);
  };

  return (
    <>
      <form onSubmit={printValues}>
        <div className="row px-5 gx-5">
          <div className="p-3 col-sm-6 ">
            <div className="textType p-2 col-sm-6  pull-left">
              <label htmlFor="validationServer01">Nombre de la practica</label>
            </div>

            <input
              type="text"
              className="textLabel form-control form-control-sm"
              placeholder="Vacante ..."
              value={dataVariable.nameRequest}
              id="nameRequest"
              onChange={handleVariable}
            />
          </div>

          <div className="p-3 col-sm-6 ">
            <div className="textType p-2 col-sm-6  pull-left">
              <label htmlFor="validationServer01">Ciudad practica</label>
            </div>

            <input
              type="text"
              className="textLabel form-control form-control-sm"
              placeholder="Cali"
              value={dataVariable.city}
              id="city"
              onChange={handleVariable}
            />
          </div>

          <div className="p-3 col-sm-6 ">
            <div className="textType p-2 col-sm-6  pull-left">
              <label htmlFor="validationDefault01">
                Carrera a solicitar practica
              </label>
            </div>

            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              style={{ width: "100%" }}
              placeholder="Seleccionar una carrera"
              value={selectedCareer}
              onChange={handleChangeCareer}
            >
              {careers.map((career) => (
                <option value={career.value} key={career.value}>
                  {career.label}
                </option>
              ))}
            </select>
          </div>

          <div className="p-3 col-sm-6 ">
            <div className="textType p-2 col-sm-6  pull-left">
              <label htmlFor="validationDefault01">
                Número de practicantes
              </label>
            </div>

            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              placeholder="Selecciona el número de practicantes"
              value={selectedNumber}
              onChange={handleChangeNumber}
            >
              {numbers.map((number) => (
                <option value={number.value} key={number.value}>
                  {number.label}
                </option>
              ))}
            </select>
          </div>

          <div className="p-3 col-sm-6 ">
            <div className="textType p-2 col-sm-6  pull-left">
              <label htmlFor="validationServer01">
                Salario de los practicante
              </label>
            </div>

            <input
              type="text"
              className="textLabel form-control form-control-sm"
              placeholder="0"
              value={dataVariable.wage}
              id="wage"
              onChange={handleVariable}
            />
          </div>

          <div className="p-3 col-sm-6 ">
            <div className="textType p-2 col-sm-6  pull-left">
              <label htmlFor="validationDefault01">
                Duración de la practica
              </label>
            </div>

            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              placeholder="Selecciona una duración"
              value={selectedDuration}
              onChange={handleChangeDuration}
            >
              {durations.map((duration) => (
                <option value={duration.value} key={duration.value}>
                  {duration.label}
                </option>
              ))}
            </select>
          </div>

          <div className="p-3 form-group">
            <div className="textType p-2">
              <label htmlFor="exampleFormControlTextarea1">
                Descripción de la practica
              </label>
            </div>

            <textarea
              className="textArea form-control"
              rows="3"
              value={dataVariable.detail}
              id="detail"
              onChange={handleVariable}
            ></textarea>
          </div>

          <div className="p-3 form-group">
            <div className="textType p-2">
              <label htmlFor="exampleFormControlTextarea1">
                Habilidades requeridas para la practica
              </label>
            </div>

            <textarea
              className="textArea form-control"
              id="skills"
              rows="3"
              onChange={handleVariable}
            ></textarea>
          </div>
        </div>

        <div className="container ">
          <div className="row justify-content-center p-3">
            <div className="col-4 p-3 ">
              <button className="btn btn-primary" type="submit">
                {props.name}
              </button>
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

export default RequestContainer;
