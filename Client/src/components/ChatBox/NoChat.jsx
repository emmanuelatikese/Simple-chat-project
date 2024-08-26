import { MdMessage } from "react-icons/md";
import { useAuthContext } from "../../context/AuthContext";

const NoChat = () => {
    const {authUser} = useAuthContext();
  return (
    <div>
      <div className='flex justify-center w-96 flex-col items-center gap-2'>
      <p className='font-bold text-sky-500'>Hey, {authUser.username} ... 😃</p>
      <p className='font-bold text-sky-500'>Welcome to Simple Chat👋</p>
      <p className='font-bold text-sky-500'>Select a chat to start conversation</p>
      <MdMessage className='text-6xl text-sky-500'/>
      </div>
    </div>
  )
}

export default NoChat
