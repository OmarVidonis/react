import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/citiesSlice";

function FormCard({ addCity }){
    const dispatch = useDispatch()
    
    const [dati, inviaDati] = useState({
        name : "",
        imgUrl : "",
        description : "",
        isVisited : false,
    })


    const handleClick = (e) =>{
        e.preventDefault()
        const city = {
            id: Math.random(),
            name : dati.name,
            imgUrl : dati.imgUrl,
            description : dati.description,
            isVisited : dati.isVisited,
            
        }
        dispatch(add(city))
        inviaDati({
            name : "",
            imgUrl : "",
            description : "",
            isVisited : false,
        })
    }

    const handleChangeInput = (e) =>{
        const { name, type, value, checked } = e.target;
        const inputValue = type == "checkbox" ? checked : value;
        inviaDati({
            ...dati,
            [name]: inputValue,
        })
    }

    return(
        <>
        <div className='flex justify-center'>
            <form onSubmit={handleClick} className="flex flex-col gap-3 w-80 mb-5 bg-zinc-900 p-5 rounded-lg">
                <div className="flex flex-col">
                    <label>NAME</label>
                    <input type="text" name="name" value={dati.name} onChange={handleChangeInput}/>
                </div>
                <div className="flex flex-col">
                    <label>DESCRIZIONE</label>
                    <textarea name="description" type="text" value={dati.description} onChange={handleChangeInput}></textarea>
                </div>
                <div className="flex flex-col">
                    <label>IMMAGINE</label>
                    <input type="text" name="imgUrl" value={dati.imgUrl} onChange={handleChangeInput}/>
                </div>
                <div className="flex flex-col">
                    <label>Visitata?</label>
                    <input type="checkbox" name="isVisited" checked={dati.isVisited} onChange={handleChangeInput}/>
                </div>
                <button className="bg-zinc-950" type="submit">ADD CARD</button>
            </form>
        </div>
        </>
    );
}

export default FormCard