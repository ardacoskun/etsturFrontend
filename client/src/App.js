import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EventPage, Home, SingleCategory } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:categoryName" element={<SingleCategory />}></Route>
        <Route path="/:categoryName/:id" element={<EventPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
