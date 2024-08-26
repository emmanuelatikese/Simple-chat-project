/* eslint-disable react/prop-types */
import { useAuthContext } from '../../context/AuthContext'
import useConvStore from '../../Utils/useZustand';
import formatTimeWithAMPM from '../../Utils/timeformat';

const MsgComp = ({ message}) => {
      console.log(message);
      const {authUser} = useAuthContext();
      const {selectConv} = useConvStore();

      const isCurrentUser = message.sender === authUser.id;
      const chatType = isCurrentUser ? "chat-end" : "chat-start";
      const backgroundColor = isCurrentUser ? '' : "bg-sky-500 text-white";
      const profile = isCurrentUser ? authUser?.profilePic : selectConv?.profilePic;
      const Msgtime = formatTimeWithAMPM(message.createdAt);
      const newMsg = message.message;
    return <div>
  <div className={`chat ${chatType}`}>
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src={profile} />
    </div>
  </div>
  <div className="chat-header">
    <time className="text-xs opacity-50 text-white">{Msgtime}</time>
  </div>

  <div className={`chat-bubble ${backgroundColor}`}>{newMsg}</div>
</div>

    </div>
}

export default MsgComp