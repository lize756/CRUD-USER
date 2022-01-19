import React from "react";

const InputSearch = () => {
  return (
    <div className="container px-1">
      <div className="input-group mb-3 ">
        <input
          type="text"
          className="form-control"
          placeholder="Ingrese algo"
          aria-label="Ingrese algo"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Buscar
        </button>
      </div>
    </div>
  );
};

export default InputSearch;
