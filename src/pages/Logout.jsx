import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useLogoutMutation } from "../services/usersApi"
import { useEffect } from "react"
import { logout } from "../store/slice/authSlice"

const Logout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [logoutApi] = useLogoutMutation()

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await logoutApi().unwrap()
        dispatch(logout())
        navigate("/")
      } catch (error) {
        console.error("Erreur de déconnexion :", error)
      }
    }

    handleLogout()
  }, [dispatch, navigate, logoutApi])

  return <div>Déconnexion...</div>
}

export default Logout
