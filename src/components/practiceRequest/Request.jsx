import React from "react";
import RequestContainer from "./RequestContainer";
import GeneralTittle from "../mainContainer/GeneralTitle";
import Banner from "../../commons/Banner";
import Navbar from "../../commons/Navbar";
import { type } from "@testing-library/user-event/dist/type";

const Request = (props) => {
  let { type } = props;

  let name = "CREAR SOLICTUD";
  let btn_name = "Crear";

  if (!type) {
    name = "ACTUALIZAR SOLICITUD";
    btn_name = "Guardar";
  }

  console.log(name);

  return (
    <div>
      <div>
        <GeneralTittle name={name} />
      </div>

      <div className="justify-content-center">
        <RequestContainer name={btn_name} />
      </div>
    </div>
  );
};

export default Request;
