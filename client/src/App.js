import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EventPage, Home, SearchPage, SingleCategory } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/arama/:keyword" element={<SearchPage />} />
        <Route path="/" element={<Home />}></Route>
        <Route path="/:categoryName" element={<SingleCategory />} />
        <Route path="/:categoryName/:id" element={<EventPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
