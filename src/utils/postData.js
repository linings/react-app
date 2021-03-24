import RESTAPI from "../REST API";

const post = async (tableName, { name, age, breed, sex, story, url }) => {

    let promise = await fetch(RESTAPI.name + `data/${tableName}`, {
        method: 'POST',
        body: JSON.stringify({
            name,
            age,
            breed,
            sex,
            story,
            url
        }),
        headers: {
            "Content-Type": "application/json",
        }
    });
    let response = await promise.json();
}

export default post;