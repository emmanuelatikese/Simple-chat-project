import { IoMdLogOut } from "react-icons/io";
import LogOutHooks from "../../hooks/LogoutHooks";

const LogOutButton = () => {
    const {LogOutHandler} = LogOutHooks();
  return (
    <div>
      <button className="" onClick={() => LogOutHandler()}>
        <IoMdLogOut className="text-2xl hover:text-sky-500 mt-4" />
        </button>
    </div>
  )
}

export default LogOutButton
