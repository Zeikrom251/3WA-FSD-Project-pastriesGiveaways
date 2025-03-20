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
        <button onClick={() => navigate("/game")}>Jouer</button>
        <PastryList />
      </div>
    </>
  )
}

export default Home
