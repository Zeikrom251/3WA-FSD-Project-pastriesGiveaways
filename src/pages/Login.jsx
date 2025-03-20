import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useGetUsersQuery, useLoginMutation } from "../services/usersApi"
import { useEffect, useState } from "react"
import { loginFailure, loginSuccess } from "../store/slice/authSlice"
import "../styles/Login.style.css"

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [login, { isLoading, error }] = useLoginMutation()
  const { user, error: authError } = useSelector((state) => state.auth)
  const { data: users, error: usersError } = useGetUsersQuery()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const data = await login({ email, password }).unwrap()

      if (data) {
        const foundUser = users?.find((user) => user.id === data.id)

        if (foundUser) {
          dispatch(loginSuccess(foundUser))
          navigate("/")
        } else {
          dispatch(
            loginFailure(
              "Erreur lors de la récupération des détails de l'utilisateur"
            )
          )
        }
      } else {
        dispatch(loginFailure("Identifiants incorrects"))
      }
    } catch (error) {
      dispatch(loginFailure("Erreur de connexion, veuillez réessayer"))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-container">
      <h3>Connexion</h3>
      {isLoading || isLoading ? <p>Chargement...</p> : null}
      {error && <p className="error">Erreur de chargement...</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          Se connecter
        </button>
      </form>
      {authError && <p className="error">{authError}</p>}
    </div>
  )
}

export default Login
