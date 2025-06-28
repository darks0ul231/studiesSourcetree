import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import NoPage from "./pages/NoPage";
import Profile from './pages/Profile';
import Login2 from './pages/Login2';
import Login3 from './pages/Login3';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about_us" element={<AboutUs />} />
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login2 />} />
        <Route path="login3" element={<Login3 />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}
