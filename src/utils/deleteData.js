import RESTAPI from '../REST API'

const deleteItem = async (id, tableName) => {
  let promise = await fetch(RESTAPI.name + `data/${tableName}/${id}`, {
    method: 'DELETE',
  });
  return promise;
}
export default deleteItem;