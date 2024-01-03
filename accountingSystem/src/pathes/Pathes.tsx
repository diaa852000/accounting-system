import { Route, Routes } from "react-router-dom"
import { Dashboard, Login } from "../pages"
import Test from "../pages/Test"

function Pathes() {
    return (
        <Routes>
            {/* not protected  routes*/}
            <Route path="/login" element={<Login/>}/>
            
            {/* protected  routes*/}
            <Route path="/" element={<Dashboard/>}>
                <Route path="test" element={<Test/>}/>
            </Route>
        </Routes>
    )
}

export default Pathes