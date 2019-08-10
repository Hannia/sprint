import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/episodes";

function episodeUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export async function getEpisodes() {
  const { data } = await http.get(apiEndpoint);
  return data;
}

export function getEpisode(episodeId) {
  return http.get(episodeUrl(episodeId));
}
