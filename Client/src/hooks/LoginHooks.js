import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import {  useAuthContext } from "../context/AuthContext";
import LoginErrorHandler from "../Utils/LoginErrorHandler";


const LoginHooks = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const LoginHandler = async({password, username}) => {
        if (!LoginErrorHandler({password, username})){
            return;
        }
        setLoading(true);
        try {
            console.log("here");
            const res = await axios.post("/api/Auth/Login", {username, password});
            const data = res.data;
            if(data.error){
                throw new Error(data.error);
            }
            localStorage.setItem("ChatUser", JSON.stringify(data));
            setAuthUser(data);
            toast.success("Login successful");
        }
        catch (error) {
            toast.error(error.message);
        }
        finally{
            setLoading(false);
        }
    }
    return {LoginHandler, loading};
}



export default LoginHooks;