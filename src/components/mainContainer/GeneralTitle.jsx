import React from "react";
import PropTypes from "prop-types";
import "./GeneralTittle.css";

const GeneralTitle = (props) => {
  return (
    <div>
      <h4 className="text-center">
        {" "}
        <div className="txt-label p-3 text-white">{props.name}</div>{" "}
      </h4>
    </div>
  );
};

GeneralTitle.propTypes = {
  name: PropTypes.string,
};

export default GeneralTitle;
