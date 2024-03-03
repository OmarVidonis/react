import { increment, decrement, incrementByValue } from "../redux/counterSlice"
import { useDispatch, useSelector } from "react-redux"


function Counter(){


    const count = useSelector((state) => state.counter.value);
    const disptach = useDispatch();

    return(
        <>
        <div className='flex justify-center'>
            <div className="flex-col justify-center m-3 bg-zinc-800 w-96 p-5 rounded-lg">
                <h1>{count}</h1>
                <div className="mt-2">
                    <button onClick={() => disptach(increment())}>+1</button>
                    <button onClick={() => disptach(decrement())}>-1</button>
                </div>
                <div className="mt-3">
                    <button onClick={() => disptach(incrementByValue(parseInt(document.querySelector("input").value)))}>Increment by:</button>
                    <input className="ml-1" type="number" placeholder="number"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Counter