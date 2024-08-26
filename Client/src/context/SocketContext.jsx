import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useSocketContext = () =>{
    return useContext(SocketContext);
}

// eslint-disable-next-line react/prop-types
export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const { authUser } = useAuthContext();
    const [onlineUsers, setOnlineUsers] = useState([]);
    useEffect(() => {
        if (authUser){

            const socket = io("http://localhost:5000", {
                query: { userId: authUser.id }
                
            });
            setSocket(socket);
            socket.on("getOnlineUsers", (users) => {
                console.log(users)
                setOnlineUsers(users);
            })
            return () => socket.close();
        }
        else{
            if (socket){
            setSocket(null);
            socket.close();
            }
        }
    }, [authUser])
    return <SocketContext.Provider value={{ socket, onlineUsers}}>{ children }</SocketContext.Provider>
}