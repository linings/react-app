import RESTAPI from '../REST API'

async function getAllUsersData() {
        let data = await fetch(RESTAPI.name + `data/users?loadRelations=message`);
        return await data.json();
}
export default getAllUsersData;