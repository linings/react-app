import RESTAPI from "../REST API";

const edit = async (response, id) => {

    console.log(response);

    let promise = await fetch(RESTAPI.name + `users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(response),
        headers: {
            "Content-Type": "application/json",
        }
    });
    let result = await promise.json();
}

export default edit;