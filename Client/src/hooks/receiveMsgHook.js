import { useEffect, useState } from "react";
import useConvStore from "../Utils/useZustand";
import toast from "react-hot-toast";
import axios from 'axios';

const receiveMsgHook = () => {
    const [loading, setLoading] = useState(false);
    const {selectConv, setMessages, Messages} = useConvStore();

    const receiveMsgHandler = async () => {
        try {
            setLoading(true);
            setMessages([]);
            const res = await axios.get(`/api/Msg/receive/${selectConv._id}`)
            setMessages(res.data);

        } catch (error) {
            toast.error(error.message);
        }
        finally{
            setLoading(false);
        }
    }
    useEffect(() => {
        if (selectConv?._id) receiveMsgHandler();
    }, [selectConv, setMessages]);
    return {Messages, loading};
};

export default receiveMsgHook;