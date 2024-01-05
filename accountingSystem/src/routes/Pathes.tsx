import { Route, Routes } from "react-router-dom"
import { Login } from "../pages"
import {routes} from '.'
import MainLayout from "../components/layout/MainLayout"
function Pathes() {
    return (
        <Routes>
            {/* not protected  routes*/}
            <Route path="/login" element={<Login/>}/>
            
            {/* protected  routes*/}
            <Route path="/" element={<MainLayout/>}>
                {routes}
            </Route>
        </Routes>
    )
}

export default Pathes