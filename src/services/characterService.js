import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/characters";

// function characterUrl(id) {
//   return `${apiEndpoint}/${id}`;
// }

export async function getCharacters({ limit, offset }) {
  const { data } = await http.get(`${apiEndpoint}?limit=${limit}&offset=${offset}`);
  return data;
}
