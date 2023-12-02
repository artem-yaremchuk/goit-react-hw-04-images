import axios from "axios";

export const getProductsWithSearch = async (query, page) => {
  const BASE_URL = "https://pixabay.com/api/";
  const API_KEY = "39978806-55323bcd638212dcecbd2258d";

  const per_page = 12;
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    per_page,
    page,
  });

  const response = await axios.get(`${BASE_URL}?${params}`);
  response.data.perPage = per_page;
  return response.data;
}