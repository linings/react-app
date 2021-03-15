import RESTAPI from "../REST API";

async function getImages() {
  let images = await fetch(RESTAPI.name + `data/data`);
  let result = await images.json();
  console.log(result);
  return result;
}
export default getImages;
