import RESTAPI from '../REST API'

async function getData(tableName) {
    let data = await fetch(RESTAPI.name + `data/${tableName}`);

    return await data.json()
}
export default getData;