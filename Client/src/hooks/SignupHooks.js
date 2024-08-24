import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import {  useAuthContext } from "../context/AuthContext";
import SignUpErrorHandler from "../Utils/SignUpErrorHandler";

const SignupHooks = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const signUpHandler = async({fullname, username, password, confirmedPassword, email, gender}) => {
        if (!SignUpErrorHandler({fullname, username, password, confirmedPassword, email, gender})){
            return;
        }
        setLoading(true);
        try {
            console.log("here");
            const res = await axios.post("/api/Auth/SignUp", {fullname, username, password, confirmedPassword, email, gender});
            const data = res.data;
            if(data.error){
                throw new Error(data.error);
            }
            localStorage.setItem("ChatUser", JSON.stringify(data));
            setAuthUser(data);
            toast.success("Signup successful");
        }
        catch (error) {
            toast.error(error.message);
        }
        finally{
            setLoading(false);
        }
    }
    return {signUpHandler, loading};
}



export default SignupHooks


