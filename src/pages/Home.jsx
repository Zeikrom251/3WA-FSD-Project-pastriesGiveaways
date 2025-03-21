import { useNavigate } from "react-router-dom"
import PastryList from "../components/PastryList"
import Header from "../components/Header"
import "../styles/Home.style.css"

const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <Header />
      <div className="home-container">
        <h1>Jouez à notre jeu de Yam's pour tenter de remporter des lots !</h1>
        <button onClick={() => navigate("/game")}>Jouer</button>
        <PastryList />
      </div>
    </>
  )
}

export default Home
