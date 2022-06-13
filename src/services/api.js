import axios from "axios";
const Api = axios.create({ baseURL: process.env.REAC_APP_BASE_API });

export { Api }