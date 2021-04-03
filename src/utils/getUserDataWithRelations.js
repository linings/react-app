import RESTAPI from '../REST API'

// https://eu-api.backendless.com/E06230DB-16D9-F7BF-FF7C-08FF9D3F8C00/9CD21057-7F83-4228-B53A-A6F3D2D938F2/data/Users?loadRelations=messages
const getUserDataWithRelations = async () => {
    let data = await fetch(RESTAPI.name + `data/Users?loadRelations=messages`);
    return await data.json();
}
export default getUserDataWithRelations;