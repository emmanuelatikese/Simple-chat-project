
import Chatheader from "./Chatheader";
import ChatTextinput from "./ChatTextinput";
import ChatRoom from './ChatRoom';
import NoChat from "./NoChat";
import useConvStore from "../../Utils/useZustand";

const ChatBox = () => {
    const {selectConv, setConv} = useConvStore();
  return (
    <div className="bg-black border-solid flex flex-col w-96 py-5 gap-6">
    {selectConv == null ? <NoChat/> :
      <>
      <Chatheader/>
      <ChatRoom/>
      <ChatTextinput/>
      </>
    }

    </div>
  )
}

export default ChatBox
