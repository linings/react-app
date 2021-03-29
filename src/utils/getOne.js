import RESTAPI from '../REST API'
async function getOne(tableName, id) {
    let promise = await fetch(RESTAPI.name + `data/${tableName}/${id}`);
    return promise.json();
}
export default getOne;