import React, { useState } from "react";
import "./UpdateContainer.css";

const UpdateContainer = () => {
  const [data, setData] = useState({
    name: "Clark Kent",
    nit: "",
    address: "",
    number: "",
    email: "",
  });

  const handleVariable = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  const printValues = (e) => {
    e.preventDefault();
    console.log(data.name, data.nit, data.address, data.number, data.email);
  };

  return (
    <>
      <form onSubmit={printValues}>
        <div className="updateContainer row px-5 gx-5">
          <div className="p-3 col-sm-6">
            <div className="p-2">
              <label htmlFor="formGroupExampleInput">Nombre Empresa</label>
            </div>

            <input
              type="text"
              className="form-control-sm"
              placeholder=" "
              value={data.name}
              id="name"
              onChange={handleVariable}
            />
          </div>

          <div className="p-3 col-sm-6">
            <div className="p-2">
              <label htmlFor="formGroupExampleInput">Nit</label>
            </div>

            <input
              type="text"
              className="form-control-sm"
              placeholder="123###### "
              value={data.nit}
              id="nit"
              onChange={handleVariable}
            />
          </div>

          <div className="p-3 col-sm-6">
            <div className="p-2">
              {" "}
              <label htmlFor="inputAddress">Direccion</label>
            </div>

            <input
              type="text"
              className="form-control-sm"
              id="inputAddress"
              placeholder="1234 Main St"
              value={data.address}
              id="address"
              onChange={handleVariable}
            />
          </div>

          <div className="p-3 col-sm-6">
            <div className="p-2">
              {" "}
              <label htmlFor="formGroupExampleInput">
                Numero Telefonico
              </label>{" "}
            </div>

            <input
              type="text"
              className="form-control-sm"
              placeholder=" 3444444 "
              value={data.number}
              id="number"
              onChange={handleVariable}
            />
          </div>

          <div className="p-3 col-sm-6">
            <div className="p-2">
              {" "}
              <label htmlFor="formGroupExampleInput">
                Correo Electronico
              </label>{" "}
            </div>

            <input
              type="email"
              className="form-control-sm"
              placeholder=" Email@correo.com "
              value={data.email}
              id="email"
              onChange={handleVariable}
            />
          </div>
        </div>
        <div className="container">
          <div className="p-5 ">
            <button className="btn btn-primary" type="submit">
              Actualizar
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default UpdateContainer;
