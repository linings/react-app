import RESTAPI from '../REST API'

const deleteItem = async (id, tableName, history) => {
  let promise = await fetch(RESTAPI.name + `data/${tableName}/${id}`, {
    method: 'DELETE',
  });
  return history ? history.push('/') : promise.json();
}
export default deleteItem;