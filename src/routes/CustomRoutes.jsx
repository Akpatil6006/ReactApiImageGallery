import { Route, Routes } from "react-router-dom";
import { Homepage } from "../Pages/Homepage";
import { SinglePage } from "../Pages/SinglePage";

export const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/:id" element={<SinglePage />} />
    </Routes>
  );
};
