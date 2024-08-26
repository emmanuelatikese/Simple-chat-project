import { IoMdSend } from "react-icons/io";
import sentMsgHook from "../../hooks/sentMsgHook";
import { useState } from "react";

const ChatTextinput = () => {
  const { sendMsgHandler, loading } = sentMsgHook();
  const [msg, setMsg] = useState("");

  const onSend = async (e) => {
    e.preventDefault();
    if (!msg) return;
    await sendMsgHandler(msg);
    setMsg(""); 
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); 
      onSend(e);
    }
  };

  return (
    <form onSubmit={onSend}>
    <div>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          onKeyDown={handleKeyDown}
          className="grow p-4 mx-auto text-sm"
          placeholder="Type a message"
        />
        <button type="submit"  className="flex items-center">
          <IoMdSend />
        </button>
      </label>
    </div>
    </form>
  );
};

export default ChatTextinput;

