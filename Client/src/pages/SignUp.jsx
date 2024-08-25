
import { useState } from "react";
import CheckComponent from "../components/SignUp/checkComponent";
import {Link} from "react-router-dom";
import SignupHooks from "../hooks/SignupHooks";

const SignUp = () => {
  const [Inputs, setInputs] = useState({
    fullname: "",
    username:"",
    email: "",
    password: "",
    confirmedPassword: "",
    gender: "male",
  })

  const {loading, signUpHandler} = SignupHooks();

  const GenderHandler = (sex) => setInputs({...Inputs, gender: sex})

  const onSubmit = async(e) =>{
    e.preventDefault();
    console.log("submit");
    try {
      await signUpHandler(Inputs);
    } catch (error) {
      throw new Error(error.message);
    }
    
  }

  return (
    <div className="shadow-black shadow-sm rounded-lg min-w-96 p-8 flex flex-col justify-center gap-8 mx-auto items-center bg-black">
      <h1 className="text-2xl font-bold">Register</h1>
      <label className="input input-bordered flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32m-40 728H184V184h656zM492 400h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8m0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8m0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8M340 368a40 40 0 1 0 80 0a40 40 0 1 0-80 0m0 144a40 40 0 1 0 80 0a40 40 0 1 0-80 0m0 144a40 40 0 1 0 80 0a40 40 0 1 0-80 0"/></svg>
    <input type="text" className="grow" placeholder="Fullname" required value={Inputs.fullname} onChange={(e) => setInputs({...Inputs, fullname:e.target.value})}/>
    </label>
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
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" required value={Inputs.email} onChange={(e) => setInputs({...Inputs, email: e.target.value})}/>
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
    <input type="password" className="grow" placeholder="Confirm Password" required value={Inputs.confirmedPassword} onChange={(e) => setInputs({...Inputs, confirmedPassword: e.target.value})}/>
    </label>
    <CheckComponent ChangeGender={GenderHandler} GenderSelect={Inputs.gender}/>
    <Link className="ml-0 text-sm font-bold hover:text-white" to={"/Login"}>Already have an account? Click Here</Link>
    <button className="btn btn-neutral w-60" onClick={(e) => onSubmit(e)} disabled={loading}>{loading ? <span className="loading loading-infinity loading-lg"></span> : "SignUp"}</button>
    </div>
  )
}

export default SignUp