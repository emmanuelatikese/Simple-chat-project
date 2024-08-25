import Conversation from "./Conversation";
import UsersConverHooks from "../../hooks/UserConvHooks";

const ConversationBox = () => {
  const {loading, conversations} = UsersConverHooks();
  return (
    <div className="overflow-y-auto flex flex-col h-96 gap-0">
    {conversations.map(x => <Conversation key={x._id} 
      chat={x}
      profile={x.profilePic}
      username={x.username}/>)}
    </div>
  )
}

export default ConversationBox
