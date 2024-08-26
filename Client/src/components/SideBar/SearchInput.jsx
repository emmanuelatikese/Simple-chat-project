import { useState } from "react";
import UsersConverHooks from "../../hooks/UserConvHooks"
import useConvStore from "../../Utils/useZustand";
import toast from "react-hot-toast";


const SearchInput = () => {
  const { conversations } = UsersConverHooks();
  const { setConv, selectConv} = useConvStore();
  const [searchInput, setSearchInput] = useState("");

  const onSearchbtn = (e) => {
  e.preventDefault();
  const filteredConversations = conversations.find((conv) =>
    conv.fullname.toLowerCase().includes(searchInput.toLowerCase())
  );
  
  if (filteredConversations) {
    setConv(filteredConversations);
    setSearchInput("");
    console.log(selectConv);
  } else {
    toast.error("No User found!");
  }

}

  return (
    <div>
    <label className="input input-bordered flex items-center gap-2 flex-row">
  <input type="text" className="grow" placeholder="Search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}  />
<button onClick={(e) => onSearchbtn(e)}>
<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
  </button>
</label>
    </div>
  )
}

export default SearchInput