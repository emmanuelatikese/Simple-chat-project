import { useEffect, useRef } from "react";
import ListenMsgHook from "../../hooks/ListenMsgHook";
import receiveMsgHook from "../../hooks/receiveMsgHook";
import MsgComp from "./MsgComp";
import Skeleton from "./Skeleton";


const ChatRoom = () => {
const {Messages, loading} = receiveMsgHook();
ListenMsgHook();

const lastMsg = useRef(null);

// console.log(Messages.length, Messages);

useEffect( () => {
  setTimeout(() => lastMsg.current?.scrollIntoView({behavior: "smooth"}), 100)
}, [Messages])


  return (
          <div className="h-96 flex-col flex overflow-y-auto">
              {
                !loading && Messages.length > 0 && Messages.map((msg) => {
                  // console.log(msg);
                  return <div ref={lastMsg} key={msg._id}>
                  <MsgComp  message={msg} />
                  </div>
                })
              }

              {loading && [...Array(8)].map((_, idx) => <Skeleton key={idx}/>)}
              {!loading && Messages.length === 0 && (<p className="text-center font-bold text-sky-400">Send a text to start conversation</p>)}
          </div>
  )
}

export default ChatRoom