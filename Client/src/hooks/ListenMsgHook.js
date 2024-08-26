import { useEffect } from 'react';
import { useSocketContext } from './../context/SocketContext';
import useConvStore from './../Utils/useZustand';
import notificationSound from "../notificationSound/bell.wav";

const ListenMsgHook = () => {
  const { socket} = useSocketContext();
  const { Messages, setMessages } = useConvStore();


  useEffect(() => {
    socket?.on('newMessage', (msg) => {
      const sound = new Audio(notificationSound);
      sound.play();
      msg.shake = true;
      setMessages([...Messages, msg]);
      return () => socket?.off('newMessage');
    })},
    [Messages, socket, setMessages]);

}


export default ListenMsgHook