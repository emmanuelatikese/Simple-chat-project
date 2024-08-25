import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";


const UsersConverHooks = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    const ChatsHandler = async() => {
        try {
            const res = await axios.get("/api/Users/");
            if (res.data.error){
                throw new Error(res.data.error);
            }
            setConversations(res.data);

        } catch (error) {
            toast.error(error.message);
        }
        finally{
            setLoading(false);
        }
    }
    useEffect( () => {
        ChatsHandler();
    }, []);

    return {conversations, loading}
};

export default UsersConverHooks;