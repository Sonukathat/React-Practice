import { useState } from "react"

export function Loginform(){
   
    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");

    const handleUsername = (e) => {
      setUsername(e.target.value);
    };

    const handlePassword = (e) => {
      setPassword(e.target.value);
    };
    
    return(
        <div className="flex flex-col items-center mt-20"> 
          <div>
            <h1 className="text-2xl font-bold">Login Form</h1>
          </div>
          <div className="flex flex-col mt-5">
            <label htmlFor="username" className="">Username</label>
            <input onChange={handleUsername} type="text" id="username" className="border rounded w-70"/>
            <label htmlFor="password" className="">Password</label>
            <input onChange={handlePassword} type="password" id="password" className="border rounded"/>
            <button type="submit" className="bg-blue-600 w-25 h-8 mt-5 ml-22 rounded">Submit</button>
          </div>
        </div>
    )
}