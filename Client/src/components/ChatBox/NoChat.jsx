import { MdMessage } from "react-icons/md";

const NoChat = () => {
  return (
    <div>
      <div className='flex justify-center w-96 flex-col items-center gap-2'>
      <p className='font-bold text-sky-500'>Hey, Mary Doe ... 😃</p>
      <p className='font-bold text-sky-500'>Welcome to Simple Chat👋</p>
      <p className='font-bold text-sky-500'>Select a chat to start conversation</p>
      <MdMessage className='text-6xl text-sky-500'/>
      </div>
    </div>
  )
}

export default NoChat
