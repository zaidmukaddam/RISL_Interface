/* eslint-disable prettier/prettier */
import axios from 'axios';

const baseUrl = 'http://192.168.1.8:5000/api';

const API = axios.create({
  baseURL: baseUrl,
});

export default API;
// https://storage.googleapis.com/kaggle-data-sets/1387561/2301176/bundle/archive.zip