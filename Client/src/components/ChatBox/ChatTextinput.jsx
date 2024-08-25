import { IoMdSend } from "react-icons/io";
import sentMsgHook from "../../hooks/sentMsgHook";
import { useState } from "react";

const ChatTextinput = () => {
  const { sendMsgHandler, loading } = sentMsgHook();
  const [Text, setText] = useState();

  const onSend = async(e) => {
    e.preventDefault();
    await sendMsgHandler(Text);
    setText("");
  }

  return (
    <div>
      <label className="input input-bordered flex items-center gap-2">
      <input type="text" value={Text} onChange={(e) => setText(e.target.value)} className="grow p-4 mx-auto text-sm" placeholder="Type a message" />
        <button onClick={(e) => onSend(e)}>
          <IoMdSend />
        </button>
      </label>
    </div>
  )
}

export default ChatTextinput;
