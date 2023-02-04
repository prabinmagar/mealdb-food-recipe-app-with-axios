import axios from 'axios';
export default axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1/1/'
});