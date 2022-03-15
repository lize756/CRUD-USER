import React from "react";
import { TableCell, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const User = ({ user, delUser, editUser }) => {
  return (
    <TableRow hover role="checkbox" tabIndex={-1} key={user.id}>
      <TableCell align="right">{user.firstname}</TableCell>
      <TableCell align="right">{user.lastname}</TableCell>
      <TableCell align="right">{user.document}</TableCell>
      <TableCell align="right">{user.email}</TableCell>
      <TableCell align="center">
        <DeleteIcon
          color="error"
          onClick={() => {
            delUser(user);
          }}
        />{" "}
        &nbsp;
        <EditIcon
          color="primary"
          onClick={() => {
            editUser(user);
          }}
        />
      </TableCell>
    </TableRow>
  );
};

export default User;
