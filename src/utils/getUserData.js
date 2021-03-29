import RESTAPI from '../REST API'

async function getUserData(id) {
    let data = await fetch(RESTAPI.name + `users/${id}`);

    return await data.json()
}
export default getUserData;