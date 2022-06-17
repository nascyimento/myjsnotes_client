import axios from "axios";
//const Api = axios.create({ baseURL: 'http://localhost:8080' });
const Api = axios.create({ baseURL: process.env.REACT_APP_BASE_API });

export { Api }