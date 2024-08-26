import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConvStore from '../../Utils/useZustand';
import formatTimeWithAMPM from '../../Utils/timeformat';

const MsgComp = ({message}) => {
      const {authUser} = useAuthContext();
      const currentUserId = authUser.id;
      const {selectConv} = useConvStore();
      const isCurrentUser = message.sender === currentUserId;
      const Msgtime = formatTimeWithAMPM(message.createdAt);
    return <>
        {
            isCurrentUser?
                <div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src={authUser.profilePic} />
    </div>
  </div>
  <div className="chat-header">
    <time className="text-xs opacity-50 text-white">{Msgtime}</time>
  </div>
  <div className="chat-bubble">{message.message}</div>
</div>
                :

                <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src={selectConv.profilePic} />
    </div>
  </div>
  <div className="chat-header">
    <time className="text-xs opacity-50 text-white">{Msgtime}</time>
  </div>
  <div className="chat-bubble bg-sky-500 text-white">{message.message}</div>
</div>
    }
    </>
}

export default MsgComp