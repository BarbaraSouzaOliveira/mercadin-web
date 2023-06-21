
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Cadastro from '../Pages/Cadastro'
export default function Router() {
  return (
   <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />} exact></Route>
    <Route path="/home" element={<Home />} ></Route>
    <Route path="/criar" element={<Cadastro />} ></Route>
    </Routes>    
   </BrowserRouter>
  );
}