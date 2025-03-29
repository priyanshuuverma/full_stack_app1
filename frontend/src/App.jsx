import React from "react";
import "./App.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./HomePage/Homepage";
import Login from "./Auth/Login";
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
