import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import Card from "../components/Card"
import NavBar from "../components/Navbar"
import { Link } from "react-router-dom"

function SingolaCard(){
    const { cardId} = useParams()
    const city = useSelector((state) => 
    state.cities.value.filter((city) => city.id == cardId.toString())[0])


  return (
    <>
    <Link to={"/cities"}>
        <span >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
            </svg>
        </span>
    </Link>


    <div className="rounded-md bg-zinc-950 relative " >
        <img className=" w-96" src= {city.imgUrl} alt="" />
        <div className="flex flex-col p-4">
        <h2 className="text-2x1 text-white font-bold">{city.name}</h2>
        <p className="text-gray-500 w-80">"{city.description}"</p>
        {/* {isOnline ? <div className=" rounded-full bg-green-400 w-4 h-4 top-2 right-2 absolute"></div> : null} */}
        <span>{city.isVisited ? "✔ visitato" : "❌ non visitato"}</span>
        </div>
    </div>

    </>
  )
}

export default SingolaCard