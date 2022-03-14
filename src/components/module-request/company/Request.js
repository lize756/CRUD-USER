import React from "react";
import { TableCell, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Request = ({ request, delRequest, editRequest }) => {
  return (
    <TableRow hover role="checkbox" tabIndex={-1} key={request.id}>
      <TableCell align="right">{request.faculty}</TableCell>
      <TableCell align="right">{request.career}</TableCell>
      <TableCell align="right">{request.acadperiod}</TableCell>
      <TableCell align="right">{request.studnumber}</TableCell>
      <TableCell align="scenter">
        <DeleteIcon
          color="error"
          onClick={() => {
            delRequest(request);
          }}
        />{" "}
        &nbsp;
        <EditIcon
          color="primary"
          onClick={() => {
            editRequest(request);
          }}
        />
      </TableCell>
    </TableRow>
  );
};

export default Request;
