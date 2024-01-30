import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import Main from "../pages/Main";
import Game from "../pages/Game";

const RoutesWrapper: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.main} element={<Main />} />
      <Route path={ROUTES.game} element={<Game />} />
    </Routes>
  );
};

export default RoutesWrapper;
