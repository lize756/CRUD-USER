import React from "react";
import { Link } from "react-router-dom";
import ModalDelete from "./ModalDelete";
import "./Table.css";

const Table = (props) => {
  return (
    <>
      <table className="table table-hover ">
        <thead className="table-light ">
          <tr>
            <th scope="col ">Id</th>
            <th scope="col ">Uno</th>
            <th scope="col ">Dos</th>
            <th scope="col ">Tres</th>
            <th scope="col ">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <Link to={`/update`} className="btn btn-info">
                Modificar
              </Link>
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className="btn  btn-danger"
                onClick={() => <ModalDelete />}
                style={{ marginLeft: "10px" }}
              >
                Borrar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
