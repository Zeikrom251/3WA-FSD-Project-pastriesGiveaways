import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Game from "../pages/Game"
import Login from "../pages/Login"
import Admin from "../pages/Admin"
import Logout from "../pages/Logout"
import ProtectedRoute from "../components/ProtectedRoute"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/game" element={<Game />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/admin" element={<Admin />} />
      </Route>
      <Route path="/logout" element={<Logout />} />
    </Routes>
  )
}

export default AppRoutes
