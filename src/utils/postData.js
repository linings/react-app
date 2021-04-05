import RESTAPI from "../REST API";

const post = async (tableName, body) => {

    let promise = await fetch(RESTAPI.name + `data/${tableName}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
        }
    });
    return await promise.json();
}

export default post;