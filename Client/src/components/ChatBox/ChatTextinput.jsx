import { IoMdSend } from "react-icons/io";

const ChatTextinput = () => {
  return (
    <div>
      <label className="input input-bordered flex items-center gap-2">
      <input type="text" className="grow p-4 mx-auto text-sm" placeholder="Type a message" />
        <button>
          <IoMdSend />
        </button>
      </label>
    </div>
  )
}

export default ChatTextinput
