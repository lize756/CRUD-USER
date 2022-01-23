import React from "react";
import Banner from "../commons/Banner";
import Navbar from "../commons/Navbar";
import CreateRequest from "../pages/Request";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SelectModule from "../components/companyView/selectModuleCompany/SelectModule";
import TableRequest from "../components/companyView/seePracticeRequest/TableRequest";
import UpdateInformation from "../pages/UpdateInformation";
import ShowRequest from "../pages/ShowRequest";
import ShowPromRequest from "../pages/ShowPromRequest";

const Main = () => {
  return (
    <>
      <Router>
        <Banner />
        <Navbar />
        <Routes>
          <Route path="/" element={<SelectModule />} />
          <Route path="/home" element={<TableRequest />} />

          <Route
            path="/crear-solicitud-practicante"
            element={<CreateRequest type={true} />}
          />

          <Route path="/update-information" element={<UpdateInformation />} />
          <Route path="/show-request" element={<ShowRequest />} />
          <Route
            path="/update-request"
            element={<CreateRequest type={false} />}
          />
          <Route path="/show-prom-request" element={<ShowPromRequest />} />
        </Routes>
      </Router>
    </>
  );
};

export default Main;
