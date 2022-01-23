import React from "react";
import InputSearch from "../../../commons/InputSearch";
import NavTable from "../../../commons/NavTable";
import Table from "../../../commons/Table";

const TableRequest = (props) => {
  return (
    <div>
      <div className="container">
        <InputSearch />
        <NavTable />
      </div>
    </div>
  );
};

export default TableRequest;
