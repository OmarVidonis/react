import { useEffect } from "react"

function useCounterTimer(){
    useEffect(() => {
        const intervalTimer = setInterval(() =>{
            const num = Math.floor(Math.random() * 100);
            console.log(num);
        },1000);

        return () =>{
            clearInterval(intervalTimer)
        };
    },[]);

    
}

export default useCounterTimer