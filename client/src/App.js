import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  EventPage,
  Home,
  PastEvents,
  SearchPage,
  SearchToDate,
  SingleCategory,
} from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/arama/:keyword" element={<SearchPage />} />
        <Route path="/" element={<Home />}></Route>
        <Route path="/:categoryName" element={<SingleCategory />} />
        <Route path="/:categoryName/:id" element={<EventPage />} />
        <Route
          path="/gecmis-etkinlikler/:endDateTime"
          element={<PastEvents />}
        />
        <Route
          path="/etkinlik-bul/:location/:startDateTime/:endDateTime"
          element={<SearchToDate />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
