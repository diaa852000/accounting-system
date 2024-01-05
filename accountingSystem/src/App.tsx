import { BrowserRouter } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import MainLayout from "./components/layout/MainLayout"
import { routes } from "./routes"
import { Login } from "./pages"
function App() {

  return (
    <BrowserRouter>
      <Routes>
            {/* not protected  routes*/}
            <Route path="/login" element={<Login/>}/>
            
            {/* protected  routes*/}
            <Route path="/" element={<MainLayout/>}>
                {routes}
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
