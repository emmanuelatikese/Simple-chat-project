import SearchInput from "./SearchInput"
import ConversationBox from "./ConversationBox";
import { IoMdLogOut } from "react-icons/io";

const sideBar = () => {
  return (
    <div className="flex flex-col gap-3 p-3 justify-center items-center">
        <SearchInput/>
        <hr className="border-gray-500 w-60 border-2 rounded-sm mt-4"/>
        <ConversationBox/>
        <button className="">
        <IoMdLogOut className="text-2xl hover:text-sky-500 mt-4"/>
        </button>
      
    </div>
  )
}

export default sideBar
