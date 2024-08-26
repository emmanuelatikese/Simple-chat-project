const User = require("../models/Users");
const Message = require("../models/Messages");
const Conversation = require("../models/Conversations");
const { getReceiverId } = require("../webSocket/socket");
const {io} = require("../webSocket/socket");


const SenderMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        const newMessage = new Message({
            sender: senderId,
            receiver: receiverId,
            message,
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([conversation.save(), newMessage.save()]);

        const receiverSocketId = getReceiverId(receiverId);
        if (receiverSocketId) {
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }

        res.status(201).json(newMessage);
    } catch (error) {
        console.log("Error in sendMessage controller: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};


const ReceiveMessage = async (req, res) => {
    const {id} = req.params;
    const Receiver = req.user;
    try{
        const Sender = await User.findById(id);
        if (!Sender) return res.status(404).json({ error: "User not found" });
        let conversation = await Conversation.findOne(
            {participants: {$all: [Sender._id, Receiver._id]}}
        ).populate("messages");
        if (!conversation) return res.status(200).json([]);
    return res.status(200).json(conversation.messages);

    }
    catch(error){
        console.error(error);
        res.status(500).json({error: "Server Error"});
    }
};

module.exports = {SenderMessage, ReceiveMessage};