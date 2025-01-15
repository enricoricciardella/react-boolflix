import { contextUse } from "../Context/GlobalContext";
import axios from "axios";

const API_KEY = "abb150cdc0fbaa1929e9d0842bded5d5";
const API_BASE_URL = "https://api.themoviedb.org/3";

export async function handleSearch(query, setData) {
  const response = await axios.get(`${API_BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query: query,
    },
  });
  setData(response.data.results);
}
