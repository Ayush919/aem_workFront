// routes.js
import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "@/pages";


const RouterCom = () => (
    <Routes>
        <Route exact path="/" element={Home}/>
</Routes>
);

export default RouterCom;