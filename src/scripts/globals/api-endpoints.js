import CONFIG from "./config";

const API_ENDPOINT = {
  RESTAURANTS: `${CONFIG.BASE_URL}list`,
  detail: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  search: (query) => `${CONFIG.BASE_URL}search?q=${query}`,
  addReview: `${CONFIG.BASE_URL}review`,
};
export default API_ENDPOINT;
