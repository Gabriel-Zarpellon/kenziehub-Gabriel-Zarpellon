import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";

export function RoutesMain(){
    return(
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
        </Routes>
    )
}