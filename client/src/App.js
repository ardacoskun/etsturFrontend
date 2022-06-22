import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, SingleCategory } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:categoryName" element={<SingleCategory />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
