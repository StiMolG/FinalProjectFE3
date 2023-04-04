import axios from 'axios';

const dentistApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/users',
});

export default dentistApi;