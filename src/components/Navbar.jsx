import { Link } from "react-router-dom"

function NavBar(){
    
    return(
        <> 
        <div className=" absolute top-4 ">
            <ul className="flex gap-10 mb-10">
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/about"}>About</Link>
                </li>
                <li>
                    <Link to={"/contatti"}>Contatti</Link>
                </li>
                <li>
                    <Link to={"/cities"}>Lista Citta</Link>
                </li>
                <li>
                    <Link to={"/cities-children"}>Lista Citta children</Link>
                </li>
            </ul>
        </div>
        </>
    )
}

export default NavBar