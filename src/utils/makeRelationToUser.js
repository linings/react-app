import RESTAPI from "../REST API"

export default async (parentId, childTableName, id) => {
    // https://eu-api.backendless.com/E06230DB-16D9-F7BF-FF7C-08FF9D3F8C00/9CD21057-7F83-4228-B53A-A6F3D2D938F2/data/users/44808A34-D51E-4D5E-A3BA-D15640F197DC/message

    fetch(RESTAPI.name + `data/users/${parentId}/${childTableName}`, {
        method: 'PUT',
        body: JSON.stringify([id]),
        headers: {
            "Content-Type": "application/json",
        }
    }).then(promise => {
        let result = promise.json();
    }).catch(err => {
        console.log(err);
    })
}