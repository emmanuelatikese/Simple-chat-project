import axios from "axios";
import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const LogOutHooks = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const LogOutHandler = async() => {
        setLoading(true);
        try {
            const res = await axios.post("/api/Auth/Logout");
            if(res.data.error){
                throw new Error(res.data.error);
            }
            localStorage.removeItem("ChatUser");
            setAuthUser(null);
            toast.success('Logged out successfully');
        } catch (error) {
            toast.error(error.message);
        }
        finally{
            setLoading(false);
        }
    }
    return { loading, LogOutHandler }
}

export default LogOutHooks;