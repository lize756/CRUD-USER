import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RequestList from "../../components/module-request/company/RequestList";
import Home from "../../components/module-request/company/HomeRequest";
import Create from "../../components/module-request/company/RequestCreate";
import Update from "../../components/module-request/company/RequestUpdate";

const MainCompany = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/company"
            element={
              <Home name="PORTAL DE SOLICITUDES PRACTICANTES DE LA UNIVERSIDAD ICESI" />
            }
          >
            <Route path="request" element={<RequestList />} />
          </Route>

          <Route
            path="/company"
            element={
              <Home name="PORTAL DE SOLICITUDES PRACTICANTES DE LA UNIVERSIDAD ICESI" />
            }
          >
            <Route path="create" element={<Create />} />
          </Route>

          <Route
            path="/company"
            element={
              <Home name="PORTAL DE SOLICITUDES PRACTICANTES DE LA UNIVERSIDAD ICESI" />
            }
          >
            <Route path="update" element={<Update />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default MainCompany;
