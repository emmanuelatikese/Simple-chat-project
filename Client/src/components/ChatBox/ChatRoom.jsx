import receiveMsgHook from "../../hooks/receiveMsgHook";
import MsgComp from "./MsgComp";
import Skeleton from "./Skeleton";



const ChatRoom = () => {
const {Messages, loading} = receiveMsgHook();
console.log( Messages); // object
  return (
          <div className="h-96 flex-col flex overflow-y-auto">
              {loading ? [...Array(8)].map(x => <Skeleton key={x}/>)
            :
            Messages.length == 0 ? <p className="text-center text-sky-400"> Send a text to start conversation</p> : 
            
            Messages.map(msg => {
              return <MsgComp key={msg._id} message={msg}/>
            })
          
          }
            

          </div>
  )
}

export default ChatRoom