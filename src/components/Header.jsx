import { Link } from "react-router-dom"
import "../styles/Header.style.css"
import { useSelector } from "react-redux"

const Header = () => {
  const user = useSelector((state) => state.auth.user)
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to="/admin">Administrateur</Link>
              </li>
              <li>
                <Link to="/logout">Déconnexion</Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Connexion</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header
