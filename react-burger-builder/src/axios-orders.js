import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-builder-b4f0b.firebaseio.com/'
});

export default instance;