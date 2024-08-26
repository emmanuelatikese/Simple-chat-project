import { useEffect } from 'react';
import { useSocketContext } from './../context/SocketContext';
import useConvStore from './../Utils/useZustand';

const ListenMsgHook = () => {
  const { socket} = useSocketContext();
  const { Messages, setMessages } = useConvStore();

  useEffect(() => {
    socket?.on('newMessage', (msg) => {
      setMessages([...Messages, msg]);
      return () => socket?.off('newMessage');
    })},
    [Messages, socket, setMessages]);

}


export default ListenMsgHook