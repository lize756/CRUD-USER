import React from "react";
import GeneralTitle from "../components/mainContainer/GeneralTitle";

import ShowPromContainer from "../components/cooPromView/showRequest/ShowPromContainer";

const ShowPromRequest = () => {
  return (
    <div>
      <div>
        <GeneralTitle name={"VISUALIZAR SOLICITUD"} />
      </div>
      <div className="justify-content-center">
        <ShowPromContainer />
      </div>
    </div>
  );
};

export default ShowPromRequest;
