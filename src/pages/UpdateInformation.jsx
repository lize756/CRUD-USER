import React from "react";
import GeneralTittle from "../components/mainContainer/GeneralTitle";
import UpdateContainer from "../components/companyView/updateInformation/UpdateContainer";

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
