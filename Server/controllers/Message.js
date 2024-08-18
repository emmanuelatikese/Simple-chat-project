const User = require("../models/Users");
const Message = require("../models/Messages");
const Conversation = require("../models/Conversations");


const SenderMessage = async (req, res) => {
    const { id } = req.params
    const Sender = req.user;
    const { message } = req.body;
    try{
        const Receiver = await User.findById(id);
        if (!Receiver) return res.status(404).json({ error: "User not found" });
        const messageModel = new Message({
            sender: Sender._id,
            receiver: Receiver._id,
            message
        })
        if (messageModel){
            await messageModel.save();
            let conversation = await Conversation.findOne(
                {participants: {$all: [Sender._id, Receiver._id]}}
            );
            if (!conversation){
                conversation = new Conversation({
                    participants: [Sender._id, Receiver._id],
                    messages: []
                });
            }
            conversation.messages.push(messageModel._id);
            await conversation.save();
            res.status(201).json({ messageModel });
        }
        else{
            return res.status(400).json({ error: "Failed to send message" });
        }
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: "Server Error"});
    }
}


const ReceiveMessage = async (req, res) => {
    const {id} = req.params;
    const Receiver = req.user;
    try{
        const Sender = await User.findById(id);
        if (!Sender) return res.status(404).json({ error: "User not found" });
        let conversation = await Conversation.findOne(
            {participants: {$all: [Sender._id, Receiver._id]}}
        ).populate("messages");
    return res.status(200).json(conversation.messages);

    }
    catch(error){
        console.error(error);
        res.status(500).json({error: "Server Error"});
    }
};

module.exports = {SenderMessage, ReceiveMessage};