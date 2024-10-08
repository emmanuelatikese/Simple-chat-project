
import {Link} from "react-router-dom";
import LoginHooks from "../hooks/LoginHooks";
import { useState } from "react";


const Login = () => {
  const [Inputs, setInputs] = useState({username: "", password: ""});
  const {LoginHandler, loading} = LoginHooks();
  
  const onSubmit = async(e) =>{
    e.preventDefault();
    console.log("submit");
    try {
      await LoginHandler(Inputs);
    } catch (error) {
      throw new Error(error.message);
    }
    
  }

  return (

    <div className="shadow-black shadow-sm rounded-lg min-w-96 p-8 flex flex-col justify-center gap-8 mx-auto items-center bg-black">
      <h1 className="text-2xl font-bold">Login</h1>
      <label className="input input-bordered flex items-center gap-2">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70">
        <path
        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
    </svg>
     <input type="text" className="grow" placeholder="Username" required value={Inputs.username} onChange={(e) => setInputs({...Inputs, username: e.target.value})}/>
    </label>
    <label className="input input-bordered flex items-center gap-2">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70">
        <path
        fillRule="evenodd"
        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
        clipRule="evenodd" />
    </svg>
    <input type="password" className="grow" placeholder="Password" required value={Inputs.password} onChange={(e) => setInputs({...Inputs, password: e.target.value})}/>
    </label>
    <Link className="ml-0 text-sm font-bold hover:text-white" to={"/SignUp"} >{"Don't"} have an account? Click Here</Link>
    <button className="btn btn-neutral w-60" onClick={(e) => onSubmit(e)} disabled={loading}>{loading ? <span className="loading loading-infinity loading-lg"></span> : "Login"}</button>
    </div>
  )
}

export default Login
