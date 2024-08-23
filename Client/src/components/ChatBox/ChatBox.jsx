
import Chatheader from "./Chatheader";
import ChatTextinput from "./ChatTextinput";
import ChatRoom from './ChatRoom';
import { useState } from "react";
import NoChat from "./NoChat";

const ChatBox = () => {
  const [chatSelect, setChatSelect] = useState(false);
  return (
    <div className="bg-black border-solid flex flex-col w-96 py-5 gap-6">
    {chatSelect ? <NoChat/> :
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
