import { useState } from "react"

function Counter(){

    let [ Count, setCount ] = useState('https://picsum.photos/200/300')

    fetch('https://picsum.photos/200/300')
    // .then((Response)=> {return Response.json()})
    // .then((result)=> Increase(result, setCount))
    // console.log(Increase)

    function Increase(result, setCount){
        // for(let i in result){
            <img src="https://picsum.photos/200/300"></img>
        // }
       
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
