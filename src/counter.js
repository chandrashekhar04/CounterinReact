import { useState } from "react"

function Counter(){

    let [ Count, setCount ] = useState(0)

    function Increase(){
        if(Count<20){
            setCount(Count+1)
        }
    }
    function Decrease(){
        if(Count>0){
            setCount(Count-1)
        }
    }

    return(
    <>
    <button onClick={Increase}>Increase</button>
    <p>{Count}</p>
    <button onClick={Decrease}>Decrease</button>
    </>
    )
}

export default Counter
