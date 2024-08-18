const {Schema, model} = require('mongoose');

const Conversations = new Schema({
    participants: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'Message',
        default: []
    }]
}, {
    timestamps: true
})

module.exports = model('Conversation', Conversations);