import { Sidebar, Main, Navbar } from "../components"

function Dashboard() {
    return (
        <div className="dashboard">
            <Navbar />
            <Sidebar />
            <Main/>
        </div>
    )
}

export default Dashboard