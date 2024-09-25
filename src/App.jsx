// import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import GenerateTable from "./pages/GenerateTable";
import ProtectedRoute from "./components/RouteProtected";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/home" element={ <ProtectedRoute><Home/></ProtectedRoute>}></Route>
        <Route
          path="/generateTable"
          element={<ProtectedRoute><GenerateTable/></ProtectedRoute>}
        ></Route>
        <Route path="/*" element={<>PAGE NOT FOUND! ERROR 404</>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
