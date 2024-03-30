import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/custom.css";
import Home from "./pages/Home";
import Update from "./pages/Update";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/edit/:id" element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
