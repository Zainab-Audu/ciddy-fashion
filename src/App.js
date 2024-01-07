import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import Aboutus from "./Pages/Aboutus";
import FemaleSection from "./Pages/FemaleSection";
import Cartpage from "./Pages/Checkoutpages/Cartpage";
import Cartcheckout from "./Pages/Checkoutpages/Cartcheckout";

const App = () => {
  return (
    <div className="bg-slate-300 w-full h-screen">
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/FemaleSection" element={<FemaleSection />} />
        <Route path="/Cartpage" element={<Cartpage />} />
        <Route path="/Cartcheckout" element={<Cartcheckout />} />
      </Routes>
    </div>
  );
};

export default App;
