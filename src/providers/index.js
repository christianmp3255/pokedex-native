import axios from 'react-native-axios';

export const Api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});
