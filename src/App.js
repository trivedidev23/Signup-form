import React from "react";
import { Route, Routes } from "react-router-dom";
import Fan from "./components/auth/Fan";
import Talent from "./components/auth/Talent";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Fan />} />
      <Route path="/talent" exact element={<Talent />} />
    </Routes>
  );
};

export default App;
