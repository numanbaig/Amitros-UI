import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const axiosClient = axios.create({
  baseURL: `${BASE_URL}`,
  withCredentials: true,
});

export default axiosClient;
