import SideBar from "../components/SideBar/SideBar";
import ChatBox from "../components/ChatBox/ChatBox";
const home = () => {
  return (
    <div className="flex flex-row justify-center items-center bg-black p-6">
    <SideBar/>
    <ChatBox/>
    </div>
  )
}

export default home