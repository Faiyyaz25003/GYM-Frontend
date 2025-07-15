import axios from 'axios';
const API = 'http://localhost:5000/api/profile';

export const fetchProfile = () => axios.get(API);
export const updateProfile = (data) => axios.put(API, data);
