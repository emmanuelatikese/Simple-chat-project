
const Conversation = () => {
  return (
<div className="hover:cursor-pointer hover:rounded-md w-60 flex flex-col py-2 hover:bg-sky-500 hover:text-white">
    <div className="flex flex-row gap-4  pl-1">
        <div className="avatar online">
            <div className="w-9 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
        </div>
        <p className="font-bold my-auto text-sm">Mary Doe</p>
    </div>
</div>
  )
}

export default Conversation