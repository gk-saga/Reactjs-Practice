import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import phoenix from "../../assets/phoenix.jpg";
import "./Header.css";
import Navigation from "./Navigation";
import Banner from "../banner/Banner";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const Header = () => {
  return (
    <div className="row align-items-center">
      <div className="col-lg-4 text-left">
        <img src={phoenix} className="custom-logo w-75" alt="logo" />
      </div>
      <div className="col-lg-8">
      
        {/* <BrowserRouter>
          <Routes>
          <Route path="/" element={<Navigation />}></Route>
            <Route path="/banner" element={<Banner />}></Route>
          </Routes>
        </BrowserRouter> */}
        <Navigation/>
       
      </div>
    </div>
  );
};

export default Header;
