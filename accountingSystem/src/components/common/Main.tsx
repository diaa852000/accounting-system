import { Outlet } from "react-router-dom"

function Main() {
    return (
        <div className="main p-5">
            <Outlet/>
        </div>
    )
}

export default Main