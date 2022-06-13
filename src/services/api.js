import axios from "axios";
require('dotenv').config();
const Api = axios.create({ baseURL: process.env.REACT_APP_BASE_API });

export { Api }