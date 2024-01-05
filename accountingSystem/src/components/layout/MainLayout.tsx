import { Sidebar, Topbar, Main } from ".."


const MainLayout = () => {
    return (
        <div className="main-layout active">
            <Topbar/>
            <Sidebar/>
            <Main/>
        </div>
    )
}

export default MainLayout