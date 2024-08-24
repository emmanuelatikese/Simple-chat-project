import SearchInput from "./SearchInput"
import ConversationBox from "./ConversationBox";
import LogOutButton from "./LogOutButton";


const sideBar = () => {
  return (
    <div className="flex flex-col gap-3 p-3 justify-center items-center">
        <SearchInput/>
        <hr className="border-gray-500 w-60 border-2 rounded-sm mt-4"/>
        <ConversationBox/>
        <LogOutButton/>
    </div>
  )
}

export default sideBar
