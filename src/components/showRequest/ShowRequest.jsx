import React from "react";
import GeneralTitle from "../mainContainer/GeneralTitle";

import ShowContainer from "./ShowContainer";

const ShowRequest = () => {
  return (
    <div>
      <div>
        <GeneralTitle name={"VISUALIZAR SOLICITUD"} />
      </div>
      <div className="justify-content-center">
        <ShowContainer />
      </div>
    </div>
  );
};

export default ShowRequest;
