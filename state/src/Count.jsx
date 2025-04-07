import { useState } from "react"

export default function Count(){
    const[count,setcount] = useState(10)
    const handleState = () =>{
        setcount(count+1)
        console.log(count);
              
    }
    return(
        <>
          <h1>{count}</h1>
          <button onClick={handleState}>Inc</button>
        </>
    )
}