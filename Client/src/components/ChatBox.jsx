
import Chatheader from "./Chatheader";
import ChatTextinput from "./ChatTextinput";
import ChatRoom from './ChatRoom';

const ChatBox = () => {
  return (
    <div className="bg-black border-solid flex flex-col w-96 py-5 gap-6">
      <Chatheader/>
      <ChatRoom/>
      <ChatTextinput />
    </div>
  )
}

export default ChatBox
