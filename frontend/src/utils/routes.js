import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Login from "../Tela_login_cadastro/components/pages/Login";
import Cadastro from "../Tela_login_cadastro/components/pages/Cadastro";
import Home from "../pages/Home";


const AppRoutes = () => {
   return(
       <BrowserRouter>
            <Routes>
                <Route element={ <Login/> }  path="/" exact/>
                <Route element={ <Home/> }  path="/home" />
                <Route element={ <Cadastro/> }  path="/cadastro" />
            </Routes>
       </BrowserRouter>
   )
}

export default AppRoutes;