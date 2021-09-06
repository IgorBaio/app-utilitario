import axios from "axios";

const client = axios.create({
  // baseURL: 'http://192.168.15.3:8080/v1'
});

client.interceptors.request.use(async config => {
});

export default client;