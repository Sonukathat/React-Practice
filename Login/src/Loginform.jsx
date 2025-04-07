export function Loginform(){
    return(
        <div className="shadow shadow-red-700"> 
          <div>
            <h1 className="text-2xl font-bold">Login Form</h1>
          </div>
          <div className="">
            <label htmlFor="username" className="">Username</label>
            <input type="text" id="username" className=""/>
            <label htmlFor="password" className="mt-3 font-bold">Password</label>
            <input type="password" id="password" className="border w-70 rounded"/>
            <button type="submit" className="bg-blue-600 p-2 rounded w-35 mt-4">Submit</button>
          </div>
        </div>
    )
}