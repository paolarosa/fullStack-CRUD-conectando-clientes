import {Route, Routes} from "react-router-dom"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { Dashboard } from "../pages/Dashboard"
import { ProtectecRoutes } from "./ProtectedRoutes"

export const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/register" element={<Register/>} />
            <Route path="/" element={<Login/>}/>
            <Route element={<ProtectecRoutes/>}>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Route>
           
        </Routes>
    )
}