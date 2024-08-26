import {  useState } from "react";
import toast from "react-hot-toast";
import  axios  from 'axios';
import useConvStore from "../Utils/useZustand";

const sentMsgHook = () => {
    const [loading, setLoading] = useState(false);
    const {selectConv, Messages, setMessages} = useConvStore();


    const sendMsgHandler = async(message) => {
        setLoading(true);
        try {

            const res = await axios.post(`/api/Msg/send/${selectConv._id}`,{message});
            if (res.data.error){
                throw new Error(res.data.error);
            }
            setMessages([...Messages, res.data]);
            
        } catch (error) {
            toast.error(error.message);
        }
        finally{
            setLoading(false);
        }
    };
    return {sendMsgHandler, loading};
}

export default sentMsgHook;