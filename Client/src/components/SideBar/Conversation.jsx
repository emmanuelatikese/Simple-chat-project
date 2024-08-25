import useConvStore from './../../Utils/useZustand';


// eslint-disable-next-line react/prop-types
const Conversation = ({profile, username, chat}) => {
  const {selectConv, setConv} = useConvStore();
  // eslint-disable-next-line react/prop-types
  const isSelect = selectConv?._id == chat._id;
  return (
<div className={`${isSelect ? 'bg-sky-500 text-white' : ''} hover:cursor-pointer hover:rounded-md w-60 flex flex-col py-2 hover:bg-sky-500 hover:text-white`} onClick={() => setConv(chat)}>
    <div className="flex flex-row gap-4  pl-1">
        <div className="avatar online">
            <div className="w-9 rounded-full">
                <img src={profile}/>
            </div>
        </div>
        <p className="font-bold my-auto text-sm">{username}</p>
    </div>
</div>
  )
}

export default Conversation