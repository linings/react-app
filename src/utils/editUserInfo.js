import RESTAPI from "../REST API";

const edit = async (messages, id) => {

    let promise = await fetch(RESTAPI.name + `users/${id}`, {
        method: 'PUT',
        body: JSON.stringify({messages}),
        headers: {
            "Content-Type": "application/json",
        }
    });
    return await promise.json();
}

export default edit;