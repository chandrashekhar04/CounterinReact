import { useState } from "react"

function Counter(){

    let [ Count, setCount ] = useState(0)

    function changeValue(e, Code){
        e.preventDefault()
        Code === "plus"  (Count<20) ? setCount(Count+1) (Count>0) : setCount(Count-1)
    }

    return(
    <>
    <a href="" onClick={(e) => changeValue(e,"plus")}>Increase</a>
    <p>{Count}</p>
    <a href="" onClick={(e) => changeValue(e,"minus")}>Decrease</a>
    </>
    )
}

export default Counter
