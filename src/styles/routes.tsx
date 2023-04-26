// routes.js
import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "@/pages";
import Login from "@/pages/login";


const RouterCom = () => (
    <Routes>
        <Route exact path="/" element={Login}/>
    </Routes>
);

export default RouterCom;