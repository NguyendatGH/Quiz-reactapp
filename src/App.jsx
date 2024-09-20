// import React from "react";
import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
import Login from "./pages/Login";
import GenerateTable from "./pages/GenerateTable";
function App() {
  return (
    <Routes>
      <Route element={<Login></Login>} path="/login"></Route>
      {/* <Route element={<Home></Home>} path="/"></Route> */}
      <Route element={<GenerateTable></GenerateTable>} path="/GenerateTable"></Route>
      {/* <Route element={<>PAGE NOT FOUND! ERROR 404</>} path="/*"></Route> */}
    </Routes>
  );
}

export default App;
