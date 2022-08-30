import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/Home";
import { LoginPage } from "../Pages/Login";
import { RegisterPage } from "../Pages/Register";

export const RoutesComponent = () => {
    return <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route element={<LoginPage/>} path="/login"/>
        <Route element={<RegisterPage/>} path="/signup"/>
    </Routes>
}