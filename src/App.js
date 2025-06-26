import './App.css';
import React from "react";
import NavBar from "./NavBar/NavBar";
import ListFilmBlocks from "./ReadFilm/ListFilmBlocks/ListFilmBlocks";
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import InfoFilmBlocks from "./ReadFilm/InfoFilmBlocks/InfoFilmBlocks";

const NavbarLayout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
};

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Navigate to="/listFilms" replace />} />
              <Route path="/listFilms" element={<NavbarLayout />}>
                  <Route index element={<ListFilmBlocks />} />
                  <Route path="listFilms" element={<ListFilmBlocks />} />
                  <Route path=":id" element={<InfoFilmBlocks />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
