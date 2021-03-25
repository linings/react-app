import RESTAPI from '../REST API'

const deleteItem = async (id, tableName) => {
     await fetch(RESTAPI.name + `data/${tableName}/${id}`, {
       method: 'DELETE',
    });
}
export default deleteItem;