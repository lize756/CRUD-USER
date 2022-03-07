import React from "react";
import Banner from "../../commons/Banner";
import Navbar from "../../commons/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RequestList from "../../components/module-request/company/RequestList";

const MainCompany = () => {
  return (
    <>
      <Router>
        <Banner />

        <Routes>
          <Route path="/request" element={<RequestList />} />
        </Routes>
      </Router>
    </>
  );
};

export default MainCompany;
