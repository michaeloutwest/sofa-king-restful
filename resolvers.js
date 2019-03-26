const messages = [];

module.exports = {
    Query: {
        message: (_, { id }) => messages[id],
        messages: () => messages
    },
    Mutation: {
        writeMessage: (_, { text }) => {
            const message = { id: messages.length, text };
            messages.push(message);
            return message;
        }
    }
};