import RESTAPI from "../REST API"

const getMessagesData = async (table, fromItemIndex, toItemIndex) => {
    //  data/Users/0AF3F8C4-1DF0-4D10-B48F-368DC840E38C/message?pageSize=20&offset=0

    const promise = await fetch(RESTAPI.name + `data/${table}?pageSize=${toItemIndex}&offset=${fromItemIndex}`);
    return promise.json();
}


export default getMessagesData;