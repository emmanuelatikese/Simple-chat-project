import { useEffect, useState } from "react";
import useConvStore from "../Utils/useZustand";
import toast from "react-hot-toast";
import axios from 'axios';

const receiveMsgHook = () => {
    const [loading, setLoading] = useState(false);
    const {selectConv, setMessages, Messages} = useConvStore();

    
    useEffect(() => {
        const receiveMsgHandler = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`/api/Msg/receive/${selectConv._id}`);
            if (res.data.error){
                throw new Error(res.data.error);
            }
            const newMsg = res.data;
            setMessages(newMsg);

        } catch (error) {
            toast.error(error.message);
        }
        finally{
            setLoading(false);
        }
    }

        if (selectConv?._id) receiveMsgHandler();
    }, [selectConv?._id, setMessages]);
    return {Messages, loading};
};

export default receiveMsgHook;