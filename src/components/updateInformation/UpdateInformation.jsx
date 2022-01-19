import React from "react";
import GeneralTittle from "../mainContainer/GeneralTitle";
import UpdateContainer from "./UpdateContainer";

const UpdateInformation = () => {
  return (
    <>
      <div>
        <GeneralTittle name={"ACTUALIZAR INFORMACION DE CONTACTO"} />
      </div>
      <div className="justify-content-center">
        <UpdateContainer />
      </div>
    </>
  );
};

export default UpdateInformation;
