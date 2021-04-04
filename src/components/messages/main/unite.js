export default (messages) => {
    let messageWrapper = [];
    for (const message of messages) {
        for (const singleMessage of message[1]) {
            let chat = {};
            chat[message[0]] = singleMessage;
            messageWrapper.push(chat);
        }
    }
    // console.log(Object.entries(Object.values(Object.entries(messageWrapper[0]))[0][1])[0][0]);
    let sorted = Object.values(messageWrapper).sort((a, b) => Date.parse(Object.entries(Object.entries(a)[0][1])[0][0]) - Date.parse(Object.entries(Object.entries(b)[0][1])[0][0]))

    return sorted;
}