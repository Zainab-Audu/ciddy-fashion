import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import Aboutus from "./Pages/Aboutus";

const App = () => {
  return (
    <div className="bg-slate-300 w-full h-screen ">
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="../Aboutus" element={<Aboutus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
